class UW {
    //alert = false;
    constructor() {
      this.test = "hello";
      this.log(this.test);
    }
    log(...args) {
        console.log(...args);
        //if (this.alert) window.alert(args);
    }
    clearSelection(delay = 0) {
        setTimeout(() => {window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()}, delay);
    }
}


class Popup {
    contents = '<--- Your Content Here --->';
    delay = 0;
    timeout = 1000;
    bg = '#0074D9';
    el;
    onShow() {}
    onDone() {}
    onCancel() {}
    collection;

    constructor(collection, args) {
        //this.arguments = arguments;
        this.collection = collection
        this.args = args;
        for (var k in args) {
            this[k] = args[k];
        }

        this.toid = setTimeout(this.create.bind(this), this.delay);
        console.log(this);
    }

    create() {
        this.el = document.createElement("DIALOG");
        this.el.innerHTML = this.contents;
        this.el.style.color = "white";
        this.el.style.background = this.bg;

        document.body.appendChild(this.el);
        
        this.onShow && this.onShow();
        this.el.showModal();
        
        this.el.addEventListener('close', this.close.bind(this));
        setTimeout(this.close.bind(this), this.timeout);
    }

    close() {
        console.log("closing", this)
        this.el.remove();
        this.onDone && this.onDone();
        this.delete();
    }

    cancel() {
        console.log("canceling", this)
        this.toid && clearTimeout(this.toid);
        this.onCancel && this.onCancel();
        this.delete();
    }

    delete() {
        var idx = this.collection.indexOf(this);
        console.log("curridx =",idx,this.toid, this.collection);
        delete this.collection[idx];
        this.collection.splice(idx, 1);
        console.log("curridx =",idx,this.toid, this.collection);
    }
}

class Popups {
    active = [];
    constructor(args) {
        //args.forEach(a => this.create(a));
    }
    create(arg) {
        this.active.push(new Popup(this.active,arg));
    }

    cancelAll() {
        while(this.active.length) {
            this.active[0].cancel()
        }
    }
}


