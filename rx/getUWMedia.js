
var media = { a: [...document.querySelectorAll('a[href="javascript:void(0)"]')], imgs: {}, vids: {} };
media.a.forEach(i => {
    i.click();
    console.log(i.textContent);
});
var esel = "div.exhibits-body";
function step() {
    if ([...document.querySelectorAll(esel)].length < media.a.length) {
        window.requestAnimationFrame(step);
    } else {
        [...document.querySelectorAll(esel)].forEach(i => {
            //shortcuts://run-shortcut?name=%5Bname%5D&input=%5Binput%5D&text=%5Btext%5D
            i.querySelectorAll("img").forEach(s => console.log(s.src))
            i.querySelectorAll("video").forEach(s => console.log(s.src));
        });
    }
}

window.requestAnimationFrame(step);

//"mat-tab-label-content"><span class="ng-star-inserted">Exhibit 1</span><!----><!----><!----></div>