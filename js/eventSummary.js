
//*type-01
function HandleOnclick() {
    // console.log('button clicked');
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = "handled By attached on onclick attribute";
}

//*type-02
document.getElementById('event-listener').addEventListener('click', function () {
    document.getElementById('handler-status').innerText = "text-done";
});