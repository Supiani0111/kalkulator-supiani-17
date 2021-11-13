const numbers = document.querySelectorAll(".number")
const calculatorscreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationoperator = ''
let currentNumber = '0'

const updatescreen = (number) => {
    calculatorscreen.value = number
}
const inputNumber = (number) => {
   // currentNumber += number
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => { 
    number.addEventListener("click", (event) => {
        //console.log(event.target.value)
        inputNumber(event.target.value)
        updatescreen(currentNumber)
})
})

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        //console.log(event.target.value)
        inputoperator(event.target.value)
    }) 
})

const inputoperator = (operator) => {
    if (calculationoperator === '') {
    prevNumber = currentNumber
}
    calculationoperator = operator
    currentNumber = '0'
}

const equalsign = document.querySelector('.equal-sign')

 equalsign.addEventListener('click', () => {
        //console.log('equal button is pressed')
        calculate ()
        updatescreen (currentNumber)
        console.log (currentNumber)
    })

const calculate = ()  => {
        let result = ''
        switch(calculationoperator) {
                //result = parseInt(prevNumber) + parseInt(currentNumber)
            case "+":
                result  = parsefloat(prevNumber) + parsefloat(currentNumber)
                break 
            case "-":
                result  = prevNumber - currentNumber
                break
            case "*":
                result  = prevNumber * currentNumber
                break
            case "/":
                result  = prevNumber / currentNumber
                break  
            default:
                return      
        }
        currentNumber = result 
        calculationoperator = ''
    }

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    //console.log ('AC button is pressed')
    clearAll()
    updatescreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationoperator = '' 
    currentNumber  = '0'
} 

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    //console.log (event.target.value)
    inputDecimal(event.target.value)
    updatescreen(currentNumber)
})

inputDecimal = (dot) =>  {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}