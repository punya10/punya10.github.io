
var ankiMap = {
    "ArrowLeft": {
        "key": "ArrowLeft",
        "code": "ArrowLeft",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "Left",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 37,
        "which": 37
    },
    "ArrowRight": {
        "key": "ArrowRight",
        "code": "ArrowRight",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "Right",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 39,
        "which": 39
    },
    "ArrowUp": {
        "key": "ArrowUp",
        "code": "ArrowUp",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "Up",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 38,
        "which": 38
    },
    "ArrowDown": {
        "key": "ArrowDown",
        "code": "ArrowDown",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "Down",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 40,
        "which": 40
    },
    "Digit1": {
        "key": "1",
        "code": "Digit1",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0031",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 49,
        "which": 49
    },
    "Digit2": {
        "key": "2",
        "code": "Digit2",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0032",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 50,
        "which": 50
    },
    "Digit3": {
        "key": "3",
        "code": "Digit3",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0033",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 51,
        "which": 51
    },
    "Digit4": {
        "key": "4",
        "code": "Digit4",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0034",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 52,
        "which": 52
    },
    "KeyR": {
        "key": "r",
        "code": "KeyR",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0052",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 82,
        "which": 82
    },
    "KeyU": {
        "key": "u",
        "code": "KeyU",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0055",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 85,
        "which": 85
    },
    "Space": {
        "key": " ",
        "code": "Space",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "U+0020",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 32,
        "which": 32
    },
    "Enter": {
        "key": "Enter",
        "code": "Enter",
        "location": 0,
        "ctrlKey": false,
        "shiftKey": false,
        "altKey": false,
        "metaKey": false,
        "keyIdentifier": "Enter",
        "keyLocation": 0,
        "altGraphKey": false,
        "charCode": 0,
        "keyCode": 13,
        "which": 13
    }
}


var remap = {"ArrowLeft": "ArrowDown", "ArrowRight": "ArrowUp"};

window.addEventListener("keydown", (e) => {
    if (Object.keys(remap).includes(e.code)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.dispatchEvent(new KeyboardEvent(ankiMap[remap[e.code]]));
    }
}, true);
