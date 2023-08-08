let display = document.querySelector('#display')
let clear = document.querySelector('.clear')
let del = document.querySelector('.del')
let dot = document.querySelector('.dot')
let divide = document.querySelector('.divide')
let multiply = document.querySelector('.multiply')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let equal = document.querySelector('.equal')
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

one.addEventListener('click',()=>{
    display.value = '1'
    console.log('one')
})
two.addEventListener('click',function(){
    display.value = two.value
    console.log('two')
})


