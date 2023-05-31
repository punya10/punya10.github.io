const zmax = 2147483647;
const initialOpacity = 0.42691;
const initialSize = 10.69142;
const initialColor = "#5E30EB";

let lineWidth = 0
let isMousedown = false
let points = []
let allowDirect = false;
const strokeHistory = []

const phead = '<meta charset="UTF-8">\n<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">';
const $info = document.createElement('div');
/*        //todo
        // 1. undo
        // 2. toggle direct
        // 3. color
        // 5. increase/decrease opacity
        // 6. increase/decrease size
        // 8. clear
        // 5. switch between pen and highlighter

*/

$info.id = "info";
$info.style = `z-index: ${zmax}; position: absolute; bottom: 1em; background-color: ${initialColor};`;

const $undo = document.createElement('button');
$undo.onclick = undoDraw;
$undo.innerHTML = "Undo";


const $toggle = document.createElement('button');
$toggle.onclick = toggleDirect;
$toggle.innerHTML = "Toggle Direct";

const $force = document.createElement('div');
$force.id = "force";

const $touches = document.createElement('div');
$touches.id = "touches";

$info.append($force);
$info.append($touches);
$info.append($undo);
$info.append($toggle);



const $canvas = document.createElement('canvas');
$canvas.id = "pencil-canvas";
const $ctx = $canvas.getContext('2d');
$canvas.width = document.body.clientWidth
$canvas.height = document.body.clientHeight
$canvas.style = `position: absolute; width: 100%; height: 100%; left: 0; top: 0; border: 2px solid red; z-index: ${zmax - 1}; opacity: ${initialOpacity};`;




const scheduleCallback = function(fn) {
    setTimeout(fn, 1)
};

const colorPicker = document.createElement("input");
colorPicker.setAttribute("type", "color");
colorPicker.setAttribute("value", initialColor);
colorPicker.setAttribute("id", "colorPicker");
colorPicker.oninput = (e) => {
    $info.style.backgroundColor = e.target.value;
}
$info.append(colorPicker);

let penSize = 0.69142;
let hlSize = penSize * 10;

const sizeLabel = document.createElement("label");
sizeLabel.setAttribute("for", "sizePicker")
sizeLabel.innerHTML = initialSize;
$info.append(sizeLabel);
sizePicker = document.createElement("input");
sizePicker.setAttribute("id", "sizePicker");
sizePicker.setAttribute("type", "range");
sizePicker.setAttribute("min", "0");
sizePicker.setAttribute("max", "42.691");
sizePicker.setAttribute("step", "any");
sizePicker.setAttribute("value", initialSize);
sizePicker.oninput = (e) => {
    sizeLabel.innerHTML = "Size: " + Number(e.target.value).toFixed(2);
}
$info.append(sizePicker);


function addAlpha(color, opacity) {
    // coerce values so ti is between 0 and 1.
    var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}


const opacityLabel = document.createElement("label");
opacityLabel.setAttribute("for", "opacityPicker")
opacityLabel.innerHTML = initialOpacity;
$info.append(opacityLabel);
opacityPicker = document.createElement("input");
opacityPicker.setAttribute("id", "opacityPicker");
opacityPicker.setAttribute("type", "range");
opacityPicker.setAttribute("min", "0");
opacityPicker.setAttribute("max", "1");
opacityPicker.setAttribute("step", "any");
opacityPicker.setAttribute("value", initialOpacity);
opacityPicker.oninput = (e) => {
    opacityLabel.innerHTML = "Opacity: " + Number(e.target.value).toFixed(2);
    $canvas.style.opacity = Number(e.target.value);
}
$info.append(opacityPicker);


let fixedWidth = true;
let pen = 0.69142;
let highlighter = pen * 10;
let selectedWidth = highlighter;


function init() {
    document.head.innerHTML += phead;

    document.body.appendChild($info);
    document.body.appendChild($canvas);
    $ctx.canvas.width = window.innerWidth;
    $ctx.canvas.height = Math.max(window.innerHeight, document.body.clientHeight);


    for (const ev of ["touchstart", "mousedown"]) {
        $canvas.addEventListener(ev, pencilDown)
    }
    for (const ev of ['touchmove', 'mousemove']) {
        $canvas.addEventListener(ev, pencilMove)
    }

    for (const ev of ['touchend', 'touchleave', 'mouseup']) {
        $canvas.addEventListener(ev, pencilUp)
    };
}




function drawOnCanvas(stroke) {
    //$ctx.canvas.width  = window.innerWidth;
    //$ctx.canvas.height = Math.max(window.innerHeight, document.body.clientHeight);
    //console.log(stroke.length,stroke[0],stroke[stroke.length-1]);

    $ctx.strokeStyle = colorPicker.value; //addAlpha(colorPicker.value, opacityPicker.value);
    //console.log($ctx.strokeStyle)
    $ctx.lineCap = 'round'
    $ctx.lineJoin = 'round'

    //$ctx.globalCompositeOperation = "multiply";


    const l = stroke.length - 1
    if (stroke.length >= 3) {
        const xc = (stroke[l].x + stroke[l - 1].x) / 2
        const yc = (stroke[l].y + stroke[l - 1].y) / 2
        $ctx.lineWidth = stroke[l - 1].lineWidth
        $ctx.quadraticCurveTo(stroke[l - 1].x, stroke[l - 1].y, xc, yc)
        $ctx.stroke()
        $ctx.beginPath()
        $ctx.moveTo(xc, yc)
    } else {
        const point = stroke[l];
        $ctx.lineWidth = point.lineWidth
        $ctx.strokeStyle = point.color
        $ctx.beginPath()
        $ctx.moveTo(point.x, point.y)
        $ctx.stroke()
    }
}

function undoDraw() {
    //console.log("Undoing...")
    strokeHistory.pop()
    $ctx.clearRect(0, 0, $canvas.width, $canvas.height)

    strokeHistory.map(function(stroke) {
        if (strokeHistory.length === 0) return

        $ctx.beginPath()

        let strokePath = [];
        stroke.map(function(point) {
            strokePath.push(point)
            drawOnCanvas(strokePath)
        })
    })
}

function toggleDirect() {
    $touches.innerHTML = $touches.innerHTML.replace(`allowDirect = ${String(allowDirect)}`, `allowDirect = ${String(!allowDirect)}`)
    allowDirect = !allowDirect;
    console.log("allowDirect now set to:", allowDirect);
}
const pencilDown = function(e) {
    //console.log(e);

    const touch = e.touches ? e.touches[0] : null
    if (allowDirect || touch && touch.touchType != "direct") {

        let {
            x,
            y,
            pressure
        } = getTouchXY(e);

        isMousedown = true

        if (sizePicker.value > 0) {
            lineWidth = sizePicker.value;
        } else {
            lineWidth = Math.log(pressure + 1) * 40
        }
        $ctx.lineWidth = lineWidth // pressure * 50;

        points.push({
            x,
            y,
            lineWidth
        })
        drawOnCanvas(points)
    }
}

const pencilMove = function(e) {
    //console.log(e);
    if (!isMousedown) return
    e.preventDefault()
    let pressure = 0.1;

    const touch = e.touches ? e.touches[0] : null

    if (allowDirect || touch && touch.touchType != "direct") {
        let {
            x,
            y,
            pressure
        } = getTouchXY(e);

        if (sizePicker.value > 0) {
            lineWidth = sizePicker.value;
        } else {
            // smoothen line width
            lineWidth = (Math.log(pressure + 1) * 40 * 0.2 + lineWidth * 0.8)
        }
        points.push({
            x,
            y,
            lineWidth
        })

        drawOnCanvas(points);
    }

    scheduleCallback(() => {
        $force.textContent = 'force = ' + pressure

        if (touch) {
            $touches.innerHTML = `
          touchType = ${touch.touchType} ${touch.touchType === 'direct' ? '👆' : '✍️'} <br/>
          radiusX = ${touch.radiusX} <br/>
          radiusY = ${touch.radiusY} <br/>
          rotationAngle = ${touch.rotationAngle} <br/>
          altitudeAngle = ${touch.altitudeAngle} <br/>
          azimuthAngle = ${touch.azimuthAngle} <br/>
          x = ${touch.pageX} <br/>
          y = ${touch.pageY} <br/>
          allowDirect = ${allowDirect} <br/>
        `
        }
    })
}

const pencilUp = function(e) {
    //console.log(e);
    let {
        x,
        y,
        pressure
    } = getTouchXY(e);

    isMousedown = false

    scheduleCallback(function() {
        strokeHistory.push([...points]);
        points = []
    })

    lineWidth = 0
}

const getTouchXY = function(e) {
    let pressure = 0.1;
    let x, y;

    if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
        if (e.touches[0]["force"] > 0) {
            pressure = e.touches[0]["force"]
        }
        x = e.touches[0].pageX
        y = e.touches[0].pageY
    } else {
        pressure = 1.0
        x = e.pageX
        y = e.pageY
    }
    return {
        x,
        y,
        pressure
    };
}



/* Based on this http://jsfiddle.net/brettwp/J4djY/*/
function detectDoubleTapClosure() {
    let lastTap = 0;
    let timeout;
    return function detectDoubleTap(event) {
        const curTime = new Date().getTime();
        const tapLen = curTime - lastTap;
        if (tapLen < 500 && tapLen > 0) {
            console.log('Tripple tapped!');
            event.preventDefault();
            init();
        } else {
            timeout = setTimeout(() => {
                clearTimeout(timeout);
            }, 500);
        }
        lastTap = curTime;
    };
}

/* Based on this http://jsfiddle.net/brettwp/J4djY/*/
function detectTripleTapClosure() {
    let lastToLastTap = 0;
    let lastTap = 0;
    let timeout;
    return function detectDoubleTap(event) {
        const curTime = new Date().getTime();
        const tapMid = curTime - lastTap;
        const tapLen = curTime - lastToLastTap;
        if (tapLen < 500 && tapLen > 0 && lastTap > lastToLastTap) {
            console.log('Tripple tapped!');
            event.preventDefault();

            if ($info.style.display === "none") {
                $info.style.display = "block";
            } else {
                $info.style.display = "none";
            }

        } else {
            timeout = setTimeout(() => {
                clearTimeout(timeout);
            }, 500);
        }
        lastToLastTap = lastTap;
        lastTap = curTime;
    };
}

document.body.addEventListener('touchend', detectTripleTapClosure(), {
    passive: false
});
/*document.body.addEventListener('touchend', detectDoubleTapClosure(), {
    passive: false
});*/
window.addEventListener('load', init);
