let display = document.getElementsByClassName('container')[0];

display.textContent = '0';

function addition(a,b){
    return Number(a)+Number(b);
}

function subtraction(a,b){
    return Number(a)-Number(b);
}

function multiplication(a,b){
    return Number(a)*Number(b);
}

function division(a,b){
    return Number(a)/Number(b);
}

function write(element){
    displayFull();
    if(display.textContent == '0'){
        display.textContent = '';   
    }
    display.textContent += element;
}

function writeAdd(){
    displayFull();
    if(display.textContent.includes('-') ||
    display.textContent.includes('x') ||
    display.textContent.includes('/')){
       let lastDigit = display.textContent.charAt(display.textContent.length - 1);
       if(lastDigit == '-' || 
       lastDigit == 'x' ||
       lastDigit == '/'){
            if(display.textContent.startsWith('-')){
                display.textContent = display.textContent.slice(0,-1) + '+';
            }else{
                display.textContent = display.textContent.replace(lastDigit,'+');
            }
       }else{
            result();
       }
    }

    if(!display.textContent.includes('+'))
        display.textContent += '+';
}

function writeSub(){
    displayFull();
    if(display.textContent.includes('+') ||
    display.textContent.includes('x') ||
    display.textContent.includes('/')){
       let lastDigit = display.textContent.charAt(display.textContent.length - 1);
       if(lastDigit == '+' || 
       lastDigit == 'x' ||
       lastDigit == '/'){
            display.textContent = display.textContent.replace(lastDigit,'-');
       }else{
            result();
       }
    }

    if(!display.textContent.endsWith('-')){
        if(!(display.textContent.split('-').length > 2)){
            display.textContent += '-'
        }
    }
        
}

function writeMult(){
    displayFull();
    if(display.textContent.includes('-') ||
    display.textContent.includes('+') ||
    display.textContent.includes('/')){
       let lastDigit = display.textContent.charAt(display.textContent.length - 1);
       if(lastDigit == '-' || 
       lastDigit == '+' ||
       lastDigit == '/'){
            if(display.textContent.startsWith('-')){
                display.textContent = display.textContent.slice(0,-1) + 'x';
            }else{
                display.textContent = display.textContent.replace(lastDigit,'x');
            }
       }else{
            result();
       }
    }

    if(!display.textContent.includes('x'))
        display.textContent += 'x';
}

function writeDot(){
    displayFull();
    if(display.textContent.includes('+') ||
    display.textContent.includes('-') ||
    display.textContent.includes('x') ||
    display.textContent.includes('/')){
        if((display.textContent.split('.').length < 1)){
            display.textContent += '.'
        }
    }

    if(!(display.textContent.endsWith('.'))){
        if((display.textContent.split('.').length < 3)){
            display.textContent += '.'
        }
    }
    
} 

function writeDiv(){
    displayFull();
    if(display.textContent.includes('-') ||
    display.textContent.includes('+') ||
    display.textContent.includes('x')){
       let lastDigit = display.textContent.charAt(display.textContent.length - 1);
       if(lastDigit == '-' || 
       lastDigit == '+' ||
       lastDigit == 'x'){
            if(display.textContent.startsWith('-')){
                display.textContent = display.textContent.slice(0,-1) + '/';
            }else{
                display.textContent = display.textContent.replace(lastDigit,'/');
            }
       }else{
            result();
       }
    }

    if(!display.textContent.includes('/'))
        display.textContent += '/';
}

function result(){
    let operator;
    if(display.textContent.includes('+')){
        operator = '+';
    }else if(display.textContent.includes('-') && !(display.textContent.includes('x'))
    && !(display.textContent.includes('/'))){
        operator = '-';
    }else if(display.textContent.includes('x')){
        operator = 'x';
    }else if(display.textContent.includes('/')){
        operator = '/';
    }

    let arrayDisplay = display.textContent.split(operator)
    let firstPartDisplay = arrayDisplay[0];
    let secondPartDisply = arrayDisplay[1];
    if(arrayDisplay.length == 3){ 
        firstPartDisplay = '-' + arrayDisplay[1];
        secondPartDisply = arrayDisplay[2];
    }
    if(display.textContent.includes('+')){
        display.textContent = addition(firstPartDisplay,secondPartDisply);
    }else if(display.textContent.includes('-') && !(display.textContent.includes('x'))
    && !(display.textContent.includes('/'))){
        display.textContent = subtraction(firstPartDisplay,secondPartDisply);
    }else if(display.textContent.includes('x')){
        display.textContent = multiplication(firstPartDisplay,secondPartDisply);
    }else if(display.textContent.includes('/')){
        display.textContent = division(firstPartDisplay,secondPartDisply);
    }

    

}

let number0 = document.getElementsByClassName('btn-0')[0];
number0.addEventListener('click',() => write('0'));
let number1 = document.getElementsByClassName('btn-1')[0];
number1.addEventListener('click',() => write('1'));
let number2 = document.getElementsByClassName('btn-2')[0];
number2.addEventListener('click',() => write('2'));
let number3 = document.getElementsByClassName('btn-3')[0];
number3.addEventListener('click',() => write('3'));
let number4 = document.getElementsByClassName('btn-4')[0];
number4.addEventListener('click',() => write('4'));
let number5 = document.getElementsByClassName('btn-5')[0];
number5.addEventListener('click',() => write('5'));
let number6 = document.getElementsByClassName('btn-6')[0];
number6.addEventListener('click',() => write('6'));
let number7 = document.getElementsByClassName('btn-7')[0];
number7.addEventListener('click',() => write('7'));
let number8 = document.getElementsByClassName('btn-8')[0];
number8.addEventListener('click',() => write('8'));
let number9 = document.getElementsByClassName('btn-9')[0];
number9.addEventListener('click',() => write('9'));


let buttonAddition = document.getElementsByClassName('btn-add')[0];
buttonAddition.addEventListener('click',writeAdd);
let buttonSubtracion = document.getElementsByClassName('btn-sub')[0];
buttonSubtracion.addEventListener('click',writeSub);

let buttonResult = document.getElementsByClassName('btn-result')[0];
buttonResult.addEventListener('click',result);

let buttonDot = document.querySelector('.btn-dot');
buttonDot.addEventListener('click',writeDot);

let buttonMul = document.querySelector('.btn-mult');
buttonMul.addEventListener('click',writeMult);

let buttonDivided = document.querySelector('.btn-divided');
buttonDivided.addEventListener('click',writeDiv);

let buttonDel = document.querySelector('.btn-del');
buttonDel.addEventListener('click',deleteOnDisplay);

function deleteOnDisplay(){
    displayFull();
    display.textContent = display.textContent.slice(0,-1);
}

let buttonCe = document.querySelector('.btn-ce');
buttonCe.addEventListener('click',deleteAll);

function deleteAll(){
    display.textContent = '0';
}

function displayFull(){
    if(display.textContent.length >24){
        display.textContent = '';
    }
    if(display.textContent.includes('NaN')){
        display.textContent = '';
    }
    if(display.textContent.includes('Infinity')){
        display.textContent = '';
    }
}
