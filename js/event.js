console.log('Hello World');

//*option-2
function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}

//*option-3
let makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//*option - 4
const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
//*option-4's Modified version
document.getElementById('make-purple').addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple';
})