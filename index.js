let number1 = prompt('Enter your first number')
let operation = prompt('Enter operation')
let number2 = prompt('Enter your second number')

let random = Math.random()

let obj = {
    '+' : '-' ,
    '*' : '+' ,
    '-' : '/' ,
    '/' : '**'
}


if (random > 0.1) {
    alert(`The result is ${eval(`${number1} ${operation} ${number2}`)}`)
}
else{
    operation = obj[operation]
    alert(`The result is ${eval(`${number1} ${operation} ${number2}`)}`)
}
