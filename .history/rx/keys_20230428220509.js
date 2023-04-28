var codes = [];
var cnt = 0;
var props = ["key", "code", "keyCode", "charCode", "which", "altKey","ctrlKey","shiftKey","metaKey"];

var OUT = document.getElementById("OUT");

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
});

function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}