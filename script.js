// const checkbox = document.querySelector('[type="radio"]');
// checkbox.addEventListener('change', () => {
//    if (checkbox.checked) {
//     alert('CHECKED')
//    } else {
//        alert('ERROR')
//    }
// });


const radios = document.querySelectorAll('[type="radio"]');
for (let i = 0; i < radios.length; i++) {
    const radio = radios[i];
    radio.addEventListener('change', () => {
        console.log(radio)
        if (radio.checked) {
            alert('OK')
        }
    })
}

const range = document.querySelector('[type="range"]'),
    inputText = document.querySelector('[type="text"]');


    range.value = 0;
function plusOne() {
    if (range.value < 100)
        range.value++
        console.log(range.value)
}

setInterval(plusOne, 100000);

range.addEventListener('input', (e) => {
    let score = range.value;
    inputText.value = score;

})

inputText.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        range.value = inputText.value;
    }
})

// window.addEventListener('scroll', () => {
//     console.log(inputText.clientWidth)
// })

// ПОДКЛЮЧИЛ RANGEs К DIV

let block = document.querySelector('.container2 #block');
console.log(block)
let tl = document.querySelector('#tl'),
    tr = document.querySelector('#tr'),
    bl = document.querySelector('#bl'),
    br = document.querySelector('#br');
   

    let ntl = 0,
        ntr = 0,
        nbl = 0,
        nbr = 0;

let container2 = document.querySelector('.container2');
container2.addEventListener('input', (e) => {
    
    if (e.target.id == 'tl') {ntl = e.target.value;}
    if (e.target.id == 'tr') { ntr = e.target.value;}
    if (e.target.id == 'bl') {nbl = e.target.value;}
    if (e.target.id == 'br') {nbr = e.target.value;}
    block.style.borderRadius = ` ${ntl}px ${ntr}px ${nbl}px ${nbr}px `;
});
