var codes = [];
var cnt = 0;
var props = ["key", "code", "keyCode", "charCode", "which", "altKey","ctrlKey","shiftKey","metaKey"];

var OUT = document.getElementById("OUT");
/*
window.addEventListener("keydown", (evt) => {
  var curr = {}
  props.forEach(p => {curr[p] = evt[p]});
  console.log(curr);
  codes.push(curr)
  console.log(codes);
  OUT.innerHTML = ("<pre>" +JSON.stringify(codes,null,2)+ "</pre>");
})

OUT.addEventListener("click", (evt) => {
    downloadObjectAsJson(codes, "keys");
});*/
function log(...arg) {
    OUT.innerHTML += `<pre>${JSON.stringify(arg,null,2)}</pre>`;
}
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

var remote = [{"key":"l","code":"KeyL","keyCode":76,"charCode":0,"which":76,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"v","code":"KeyV","keyCode":86,"charCode":0,"which":86,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"y","code":"KeyY","keyCode":89,"charCode":0,"which":89,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"t","code":"KeyT","keyCode":84,"charCode":0,"which":84,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"u","code":"KeyU","keyCode":85,"charCode":0,"which":85,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"f","code":"KeyF","keyCode":70,"charCode":0,"which":70,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"k","code":"KeyK","keyCode":75,"charCode":0,"which":75,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"p","code":"KeyP","keyCode":80,"charCode":0,"which":80,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"j","code":"KeyJ","keyCode":74,"charCode":0,"which":74,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"n","code":"KeyN","keyCode":78,"charCode":0,"which":78,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"y","code":"KeyY","keyCode":89,"charCode":0,"which":89,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"t","code":"KeyT","keyCode":84,"charCode":0,"which":84,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"h","code":"KeyH","keyCode":72,"charCode":0,"which":72,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"1","code":"Digit1","keyCode":49,"charCode":0,"which":49,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"r","code":"KeyR","keyCode":82,"charCode":0,"which":82,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"2","code":"Digit2","keyCode":50,"charCode":0,"which":50,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"a","code":"KeyA","keyCode":65,"charCode":0,"which":65,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"ArrowLeft","code":"ArrowLeft","keyCode":37,"charCode":0,"which":37,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"q","code":"KeyQ","keyCode":81,"charCode":0,"which":81,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"d","code":"KeyD","keyCode":68,"charCode":0,"which":68,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"ArrowRight","code":"ArrowRight","keyCode":39,"charCode":0,"which":39,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"c","code":"KeyC","keyCode":67,"charCode":0,"which":67,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"w","code":"KeyW","keyCode":87,"charCode":0,"which":87,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"ArrowUp","code":"ArrowUp","keyCode":38,"charCode":0,"which":38,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"e","code":"KeyE","keyCode":69,"charCode":0,"which":69,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"x","code":"KeyX","keyCode":88,"charCode":0,"which":88,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"ArrowDown","code":"ArrowDown","keyCode":40,"charCode":0,"which":40,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false},{"key":"z","code":"KeyZ","keyCode":90,"charCode":0,"which":90,"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false}];

let rDown = remote.filter((element, index) => { return index % 2 === 0 });
let rUp = remote.filter((element, index) => { return index % 2 === 1 });

log(rDown,rUp);


//uworld answers [...document.querySelectorAll('[id^="answerhighlight"]')]

