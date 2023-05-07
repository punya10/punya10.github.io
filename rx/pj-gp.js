var last = {axis: [0,0,0,0], buttons: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
var scrollFactor = 42;

function gpLoop() {
  const gamepads = navigator.getGamepads().filter(i=>i);
  if (!gamepads || gamepads.length < 1) {
    return;
  }

  const gp = gamepads[0];
  const ax = gp.axes[0];
  if (abs(ax) > 0.5) {
    window.scrollBy({
      top: ax*scrollFactor,
      behavior: "smooth"
    });
  }

  requestAnimationFrame(gpLoop);
}


/*


var gp = 
[
  {
    axes: [0.01, 0.01, 0.02, 0.04],
    buttons: [
      { pressed: true, value: 1 },
      { pressed: false, value: 0 },
      { pressed: false, value: 0 },
      { pressed: false, value: 0 },
      [...]
    ],
    connected: true,
    id: "Xbox 360 Controller (XInput STANDARD GAMEPAD)",
    index: 0,
    mapping: "standard",
    timestamp: 177550
  },
  null,
  null,
  null
]



*/
