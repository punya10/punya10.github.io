class UW {
    alert = true;
    constructor() {
      this.test = "hello";
      this.log(this.test);
    }
    log(...args) {
        console.log(...args);
        if (this.alert) window.alert(args);
    }
    clearSelection() {
        window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
    }
}
