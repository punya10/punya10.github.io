// Build a worker from an anonymous function body
var blobURL = URL.createObjectURL(new Blob(['(',
    function() {
        var intervalID;
        onmessage = (e) => {
            if (e.data.type === "start") {
                clearInterval(intervalID)
                let t = e.data.t || 0
                intervalID = setInterval(() => {
                    t++
                    if (t > e.data.maxDuration) {
                        postMessage({
                            t: t - 1,
                            running: false
                        })
                        clearInterval(intervalID)
                    } else {
                        postMessage({
                            t: t,
                            running: true
                        })
                    }
                }, 1000)
            } else {
                clearInterval(intervalID)
            }
        }

    }.toString(), ')()'], {
        type: 'application/javascript'
    })),
    timerWorker = new Worker(blobURL);
// Won't be needing this anymore
URL.revokeObjectURL(blobURL);

//var timerWorker = new Worker("./worker.js");

var root = document.documentElement;
var fullname = {
    focus: "Focus",
    short: "Keep Going!",
    long: "You got this!",
};
var config = {
    focus: 60,
    short: 60,
    long: 60,
    longGap: 40,
    maxRounds: 60
};

var roundInfo = {
    t: 0,
    focusNum: 1,
    current: "focus",
    running: false,
};

var themes = {
    dark: {
        props: {
            "color-scheme": "dark",
            "--focus": "#d64f4f",
            "--short": "#26baba",
            "--long": "#5fbbe6",
        },
        defaccent: "lavender",
    },
    light: {
        props: {
            "color-scheme": "light",
            "--focus": "#d64f4f",
            "--short": "#26baba",
            "--long": "#5fbbe6",
        },
        defaccent: "red",
    },
    black: {
        props: {
            "color-scheme": "dark",
            "--focus": "#d64f4f",
            "--short": "#26baba",
            "--long": "#5fbbe6",
        },
        defaccent: "lavender",
    },
    white: {
        props: {
            "color-scheme": "light",
            "--focus": "#d64f4f",
            "--short": "#26baba",
            "--long": "#5fbbe6",
        },
        defaccent: "red",
    },
};
var accents = {
    dark: {
        red: {
            "--bgcolor": "#252222",
            "--bgcolor2": "#403333",
            "--color": "#ffeeee",
            "--coloraccent": "#ffaaaa",
        },
        violet: {
            "--bgcolor": "#252225",
            "--bgcolor2": "#3a2a3a",
            "--color": "#ffeeff",
            "--coloraccent": "#ee82ee",
        },
        blue: {
            "--bgcolor": "#131320",
            "--bgcolor2": "#1d3752",
            "--color": "#eeeeff",
            "--coloraccent": "#9bb2ff",
        },
        lavender: {
            "--bgcolor": "#222230",
            "--bgcolor2": "#333340",
            "--color": "#eeeeff",
            "--coloraccent": "#b2b2ff",
        },
        green: {
            "--bgcolor": "#1d201d",
            "--bgcolor2": "#143814",
            "--color": "#eeffee",
            "--coloraccent": "#8dd48d",
        },
        teal: {
            "--bgcolor": "#111f1f",
            "--bgcolor2": "#334040",
            "--color": "#eeffff",
            "--coloraccent": "#00aaaa",
        },
        grey: {
            "--bgcolor": "#222222",
            "--bgcolor2": "#444444",
            "--color": "#dddddd",
            "--coloraccent": "#aaaaaa",
        },
    },
    black: {
        red: {
            "--bgcolor2": "#403333",
            "--color": "#ffeeee",
            "--coloraccent": "#ffaaaa",
            "--bgcolor": "#000000",
        },
        violet: {
            "--bgcolor": "#000000",
            "--bgcolor2": "#312131",
            "--color": "#ffeeff",
            "--coloraccent": "#ee82ee",
        },
        blue: {
            "--bgcolor2": "#1d3752",
            "--color": "#eeeeff",
            "--coloraccent": "#9bb2ff",
            "--bgcolor": "#000000",
        },
        lavender: {
            "--bgcolor2": "#333340",
            "--color": "#eeeeff",
            "--coloraccent": "#b2b2ff",
            "--bgcolor": "#000000",
        },
        green: {
            "--bgcolor2": "#143814",
            "--color": "#eeffee",
            "--coloraccent": "#8dd48d",
            "--bgcolor": "#000000",
        },
        teal: {
            "--bgcolor": "#000000",
            "--bgcolor2": "#303f3f",
            "--color": "#eeffff",
            "--coloraccent": "#00aaaa",
        },
        grey: {
            "--bgcolor2": "#444444",
            "--color": "#dddddd",
            "--coloraccent": "#aaaaaa",
            "--bgcolor": "#000000",
        },
    },
    light: {
        red: {
            "--bgcolor": "#fff3f3",
            "--bgcolor2": "#ffd2d2",
            "--color": "#222222",
            "--coloraccent": "#d64f4f",
        },
        violet: {
            "--bgcolor": "#fff3ff",
            "--bgcolor2": "#ffd2ff",
            "--color": "#222222",
            "--coloraccent": "#ee82ee",
        },
        blue: {
            "--bgcolor": "#f3f3ff",
            "--bgcolor2": "#d2d2ff",
            "--color": "#222222",
            "--coloraccent": "#4169e4",
        },
        lavender: {
            "--bgcolor": "#faf1ff",
            "--bgcolor2": "#e2d4ff",
            "--color": "#222222",
            "--coloraccent": "#8b51ff",
        },
        teal: {
            "--bgcolor": "#faffff",
            "--bgcolor2": "#cbebeb",
            "--color": "#222222",
            "--coloraccent": "#008080",
        },
        green: {
            "--bgcolor": "#f3fff3",
            "--bgcolor2": "#cafcc1",
            "--color": "#222222",
            "--coloraccent": "#39743d",
        },
        grey: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#dddddd",
            "--color": "#333333",
            "--coloraccent": "#555555",
        },
    },
    white: {
        red: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#ffd2d2",
            "--color": "#222222",
            "--coloraccent": "#ee7777",
        },
        violet: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#ffd2ff",
            "--color": "#222222",
            "--coloraccent": "#ee82ee",
        },
        blue: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#d2d2ff",
            "--color": "#222222",
            "--coloraccent": "#4169e4",
        },
        lavender: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#e2d4ff",
            "--color": "#222222",
            "--coloraccent": "#8b51ff",
        },
        teal: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#cbebeb",
            "--color": "#222222",
            "--coloraccent": "#008080",
        },
        green: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#cafcc1",
            "--color": "#222222",
            "--coloraccent": "#39743d",
        },
        grey: {
            "--bgcolor": "#ffffff",
            "--bgcolor2": "#dddddd",
            "--color": "#333333",
            "--coloraccent": "#555555",
        },
    },
};

var theme = "dark";
var themeAccent = "lavender";

function setTheme(basetheme="dark", accent) {
    if (!accent)
        accent = themes[basetheme].defaccent;
    if (basetheme !== "custom") {
        for (let prop in themes[basetheme].props) {
            root.style.setProperty(prop, themes[basetheme].props[prop]);
        }
    }
}

setTheme(theme, themeAccent);

function getColor(value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}

let q = new SpeechSynthesisUtterance();
q.text = "Move On!"
const quotes = ["82 82 82 82 82. You Got This. Saying It Again, 82. Go!", "Almost There", "Believe you can and you’re halfway there", "Disneyland!", "Do You Want To Go See Your Friends?", "Do You Want To Go To Disneyland?", "Do You Want To Go To EDC?", "Do You Want To Go To LA?", "Do You Want To Go To Vegas?", "Don’t wait. The time will never be just right", "EDC! EDC! EDC! EDC! Let's go to EDC!", "Every accomplishment starts with the decision to try", "Every moment is a fresh beginning", "Finish Up!", "Happiness is not by chance, but by choice", "Hurry Along!", "If things go wrong, don’t go with them", "If you can dream it, you can do it", "Imagine how good life could be if only you did what needed to be done!", "Just A Little More", "Keep Going", "Keep It Super Simple", "LA!", "Let's Get This Done!", "Let's Go!", "Life is like riding a bicycle. To keep your balance, you must keep moving", "Look Straight Ahead 82", "Move On", "Nothing is impossible. The word itself says “I’m possible!\"", "Problems are not stop signs, they are guidelines.", "Quickly Now", "Simplicity is the ultimate sophistication", "Success is not final, failure is not fatal: it is the courage to continue that counts", "Thank you, Next!", "There is no substitute for hard work", "Vegas!", "You Can Do It!", "You can’t cross the sea merely by standing and staring at the water", "You Got This!", "You Rock!"];
function sayQuote() {
    q.text = quotes[Math.floor(Math.random() * quotes.length)];
    window.speechSynthesis.speak(q);
}

function nextRound() {
    let finished = fullname[roundInfo.current];
    let body = "Begin ";
    if (roundInfo.current === "focus") {

        focusEnd(roundInfo.t);
        finished += " Round";
        if (roundInfo.focusNum >= config.longGap) {
            roundInfo.current = "long";
            roundInfo.focusNum = 0;
        } else {
            roundInfo.current = "short";
        }
        body += "a " + Math.floor(config[roundInfo.current] / 60) + " minute " + fullname[roundInfo.current];
    } else {
        roundInfo.current = "focus";
        roundInfo.focusNum++;
        roundnoDiv.innerText = roundInfo.focusNum + "/" + config.longGap;
        body += "focusing for " + Math.floor(config.focus / 60) + " minutes";
    }

    //timer.className = "t-" + roundInfo.current;
    roundInfo.t = 0;
    sayQuote();
    setTime();
    if (roundInfo.running) {

        timerWorker.postMessage({
            type: "start",
            maxDuration: config[roundInfo.current],
        });
    }
    notify(`${finished} Complete`, body);
}

function pauseplay() {
    if (roundInfo.current === "none") {
        nextRound();
        return;
    }
    if (roundInfo.running) {
        timerWorker.postMessage({
            type: "stop"
        });
        roundInfo.running = false;
    } else {

        sayQuote();
        timerWorker.postMessage({
            type: "start",
            t: roundInfo.t,
            maxDuration: config[roundInfo.current],
        });
        roundInfo.running = true;
    }
}


function setTime() {
    let seconds = config[roundInfo.current] - roundInfo.t;
    if (seconds < 0) {
        //nextRound();
        return;
    }
    let timestr =
    Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0") +
    ":" +
    (seconds % 60).toString().padStart(2, "0");
    if (pipActive)
        loop();
}

timerWorker.addEventListener("message", (e) => {
    roundInfo.t = e.data.t;
    setTime();
    if (!e.data.running) {
        nextRound();
    }
});


function focusEnd(t) {
	let minutes = Math.round(t / 60);
	if (minutes <= 0) return;
}


var canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.width = canvas.height = 400;
var ctx = canvas.getContext("2d");
canvas.style.visibility = "hidden";
var video = document.createElement("video");
//video.style.height = "50px";
//video.style.width = "50px";
video.style.visibility = "hidden";


function loop() {
    let seconds = config[roundInfo.current] - roundInfo.t;
    let percent = roundInfo.t / config[roundInfo.current];

    let bg = getColor(percent);

    ctx.fillStyle = accents[theme][themeAccent]["--bgcolor"];
    ctx.fillRect(0, 0, 400, 400);

    ctx.fillStyle = accents[theme][themeAccent]["--color"];
    ctx.font = "80px monospace";
    ctx.textAlign = "center";

    if (seconds < 0) {
        //nextRound();
        return;
    }
    let timestr =
    Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0") +
    ":" +
    (seconds % 60).toString().padStart(2, "0");
    ctx.fillText(timestr, 200, 200, 280);

    ctx.font = "32px monospace";
    ctx.fillText(fullname[roundInfo.current].toUpperCase(), 200, 260, 280);

    ctx.strokeStyle = accents[theme][themeAccent]["--coloraccent"];
    ctx.strokeStyle = bg;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = themes[theme].props["--" + roundInfo.current];
    ctx.strokeStyle = bg;
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(200, 200, 180, -Math.PI / 2, (1 - roundInfo.t / config[roundInfo.current]) * Math.PI * 2 - Math.PI / 2);
    ctx.stroke();
}

var pipActive = false;
var timerContainer = null;
var pipWindow = null;



if (document.pictureInPictureEnabled || document.fullscreenEnabled) {
    document.body.appendChild(video);
    document.body.appendChild(canvas);
    //video.style.opacity = "0";
    let stream = canvas.captureStream();
    video.srcObject = stream;
    video.autoplay = false;
    video.controls = true;
    video.addEventListener("play", () => {
        if (!roundInfo.running)
            pauseplay();
        console.log('playing');
    });
    video.addEventListener("pause", () => {
        console.log('pausing');
        if (roundInfo.running)
            pauseplay();
    });
    video.addEventListener("seeked", () => {
        if (roundInfo.running)
            pauseplay();
        alert('seek   END: ' + video.currentTime)
    });
    video.addEventListener("seeking", () => {
        alert('seek BEGIN: ' + video.currentTime)
    });
    loop();

    video.onenterpictureinpicture = () => {
        pipActive = true;
        video.classList.add("pipactive");
    };
    video.onleavepictureinpicture = () => {
        if (document.fullscreenElement)
            return;
        pipActive = false;
        video.classList.remove("pipactive");
    };
    video.onfullscreenchange = (ev) => {
        if (document.fullscreenElement) {
            pipActive = true;
            video.classList.add("pipactive");
        } else {
            pipActive = false;
            video.classList.remove("pipactive");
        }
    };
    document.body.onclick = () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
            video.classList.remove("pipactive");
            return;
        }
        if (pipActive) {
            pipActive = false;
            video.classList.remove("pipactive");
            return;
        }
        loop();
        video.play();
        video.classList.add("pipactive");
        if (document.pictureInPictureEnabled) {
            video.requestPictureInPicture();
        }
        pipActive = true;
    }
}
