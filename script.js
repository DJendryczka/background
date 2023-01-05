const css = document.querySelector('h3');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.querySelector('#gradient');
console.log(body)

const setGradient = ()=>{
    body.style.background = 'linear-gradient(to right, ' 
    + colorOne.value
    + ','
    + colorTwo.value
    + ')';
    css.textContent = body.style.background + ';'
}

colorOne.addEventListener('input', setGradient)

colorTwo.addEventListener('input', setGradient)