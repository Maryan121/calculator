let display = document.querySelector('#display')
let clear = document.querySelector('.clear')
let del = document.querySelector('.del')
let dot = document.querySelector('.dot')
let divide = document.querySelector('.divide')
let multiply = document.querySelector('.multiply')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let equal = document.querySelector('.equal')
// let body = document.querySelector('body')
//numbers
let zero = document.querySelector('.zero')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let ten = document.querySelector('.ten')

zero.addEventListener('click',()=>{
    display.value += '0'
})

one.addEventListener('click',()=>{
    display.value += '1'
})
two.addEventListener('click',function(){
    display.value = display.value += '2'
})
three.addEventListener('click',function(){
    display.value = display.value += '3'
})
four.addEventListener('click',function(){
    display.value = display.value += '4'
})
five.addEventListener('click',function(){
    display.value = display.value += '5'
})
six.addEventListener('click',function(){
    display.value = display.value += '6'
})
seven.addEventListener('click',function(){
    display.value = display.value += '7'
})
eight.addEventListener('click',function(){
    display.value = display.value += '8'
})
nine.addEventListener('click',function(){
    display.value = display.value += '9'
})

clear.addEventListener('click',function(){
    display.value = ''
})
dot.addEventListener('click',function(){
    display.value = display.value += '.'
})
plus.addEventListener('click',function(){
    display.value = display.value += '+'
})
minus.addEventListener('click',function(){
    display.value = display.value += '-'
})
multiply.addEventListener('click',function(){
    display.value = display.value += '*'
})
divide.addEventListener('click',function(){
    display.value = display.value += '/'
})


equal.addEventListener('click',()=>{
    display.value = eval(display.value);
    
})

del.addEventListener('click',() =>{
    const currentValue = display.value;
    if(currentValue.length > 0){
        const newValue = currentValue.slice(0, -1)
        display.value = newValue;
    }
})

