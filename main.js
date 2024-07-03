const numbers = document.querySelectorAll('.numbers')
const result = document.querySelector('.result')
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')


let firstValue = '';
let secondValue = '';
let isFirstValue = false;
let isSecondValue = false;
let sign ='';
let resultValue = 0

numbers.forEach((element) => {
  element.addEventListener('click', (e) => {
    let atr = e.target.getAttribute('value');
    if (isFirstValue === false){
      getFirstValue(atr);
    }
    else if(isSecondValue === false) {
      getSecondValue(atr)
    }
    consoling();
  })
})

signs.forEach((element) => {
  element.addEventListener('click', (e) => {
    sign = e.target.getAttribute('value');
    isFirstValue = true;
    firstValue = Number(firstValue)
    consoling()
  })
}
)

function getFirstValue(el) {
  result.innerHTML = ''; // ?
  firstValue += el;
  result.innerHTML = firstValue;
}


function getSecondValue(el){
  result.innerHTML = '';
  secondValue += el;
  result.innerHTML = secondValue;
}


equals.addEventListener('click', ()  => {
  secondValue = Number(secondValue)
  switch (sign) {
    case '+':
      resultValue = firstValue + secondValue;
      break;
    case '-':
      resultValue = firstValue - secondValue;
      break;
    case 'x':
      resultValue = firstValue * secondValue;
      break;
    case '/':
      resultValue = firstValue / secondValue;
      break;
  }
  firstValue = resultValue;
  result.innerHTML = resultValue;
  secondValue = '';

})


negative.addEventListener('click', () => {
  console.log(firstValue)
  if (result.innerHTML = firstValue){
    firstValue *= -1;
    result.innerHTML = firstValue;
  }
  else if (result.innerHTML = secondValue){
    secondValue *= -1;
    result.innerHTML = secondValue;

  }
  }

)

percent.addEventListener('click', () =>{
  result.innerHTML = '';
  if(firstValue != ''){
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if (firstValue != '' && secondValue != '' && sign != ''){
    resultValue = resultValue / 100;
  }

  result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
  result.innerHTML = '';

  firstValue = '';
  secondValue = '';
  isFirstValue = false;
  isSecondValue = false;
  sign = '';
  resultValue = 0
})


function consoling() {

  console.log('isFirst:' + isFirstValue + ', firstValue:' + firstValue + ', its type: ' + typeof(firstValue))
  console.log('isSecond:' + isSecondValue + ', secondValue:' + secondValue + ', its type: ' + typeof(secondValue))
  console.log('sign: ' + sign)
  console.log('resultValue:' + resultValue + ', result:' + result + ', its type: ' + typeof(resultValue))
  console.log('------------------------')

}