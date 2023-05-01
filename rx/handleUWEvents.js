handleNavigationEvent(event) {
  let actionElement = document.activeElement;
  if (event.altKey && event.keyCode == _this.m.alph_n || event.keyCode == _this.m.rightarrow) {
    if ("INPUT" == actionElement.nodeName && "text" == actionElement.getAttribute("type")) {
      return;
    }
    this._onKeyboardShortcut.next("nextQuestion");
    this._onKeyboardShortcut.next({
      fn : "nextQuestion",
      event : event
    });
  }
  if (event.altKey && event.keyCode == _this.m.alph_p || event.keyCode == _this.m.leftarrow) {
    if ("INPUT" == actionElement.nodeName && "text" == actionElement.getAttribute("type")) {
      return;
    }
    this._onKeyboardShortcut.next("previousQuestion");
    this._onKeyboardShortcut.next({
      fn : "previousQuestion",
      event : event
    });
  }
}
handleAnswerSelectEvent(s, method) {
  var ds = 0;
  if (s >= 65 && s <= 90) {
    ds = s - 64;
  } else {
    if (s >= 97 && s <= 122) {
      ds = s - 96;
    }
  }
  if (0 != ds) {
    this._onKeyboardShortcut.next({
      fn : "answerSelect",
      val : ds,
      event : method
    });
  }
}
handleMarkEvent(event) {
  if (event.altKey) {
    if (this.sharedService._clientConfig.qBankId == _this.h.mcat) {
      if (event.keyCode == _this.m.alph_f) {
        event.preventDefault();
        this._onKeyboardShortcut.next({
          fn : "markQuestion",
          event : event
        });
      }
    } else {
      if (event.keyCode == _this.m.alph_m) {
        this._onKeyboardShortcut.next("markQuestion");
        this._onKeyboardShortcut.next({
          fn : "markQuestion",
          event : event
        });
      }
    }
  }
}
handleStrikeoutEvent(event) {
  if (event.altKey && event.keyCode == _this.m.alph_s) {
    event.preventDefault();
    this._onKeyboardShortcut.next("strikeOut");
  }
}




var remap = {
  'q': 'a',
  'w': 'b',
  'e': 'c',
  'r': 'd',
  't': 'e',
  'y': 'f',
  'u': 'g',
  'i': 'h'
  }
  var choices = document.querySelectorAll("mat-radio-button");
  
  
  document.querySelector('input').addEventListener('keydown', (e) => {
    var action = remap[e.key];
    if(!!action) {
      document.querySelector('div').innerText = (`${e.key} => ${action}`);
    }
  })




document.querySelectorAll("label.mat-radio-label")[1].click()
document.querySelector('a.bookmark-question').click();
document.querySelectorAll(".answer-choice-content > span")[0].dispatchEvent(new MouseEvent("mouseup"))




var choices = ["q","w","e","r","t","y","u","i","o"];
var cstrike = ["a","s","d","f","g","h","j","k","l"];
var mark = [" ","m"];
window.addEventListener('keydown', (e) => {
  var all = [...choices, ...cstrike, ...mark];
  if (all.includes(e.key)) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    if (choices.includes(e.key) && document.querySelectorAll("mat-radio-button")[choices.indexOf(e.key)]) {
      var elem = document.querySelectorAll("label.mat-radio-label")[choices.indexOf(e.key)]
      console.log(e.key, "answer", elem);
      elem.click();
    }
    if (cstrike.includes(e.key) && document.querySelector(`[id^="answerhighlight${cstrike.indexOf(e.key)+1}"`)) {
      var elem = document.querySelector(`[id^="answerhighlight${cstrike.indexOf(e.key)+1}"`);
      console.log(e.key, "strikeout", elem);
      elem.dispatchEvent(new MouseEvent("mouseup"));
    }
    if (e.code == 'Space' || e.code == 'KeyM') {
      console.log(e.key, "mark");
      document.querySelector('a.bookmark-question').click();
    }
  }
}, true);
