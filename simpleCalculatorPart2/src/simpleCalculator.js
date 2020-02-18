"use strict"
let LAST =0;
class Calculator {
    constructor(){
        this.resultArray = []
        this.memory_slot = []
        
    }
     
    add() {
        let sum = 0;

        for(let i = 0; i < arguments.length; i++){
            sum += arguments[i]
        }
        this.resultArray.push(sum)
        return sum 
    }

    multiply() {
        let product = 1;

        for( let i = 0; i < arguments.length; i++){
            product *= arguments[i]
        } 
        this.resultArray.push(product)
        return product
    }

    last() {
        LAST = this.resultArray[this.resultArray.length - 1]
        return LAST
    }

    set_slot(numSlot) {
         numSlot = this.resultArray[numSlot - 1]
        return numSlot
    }

    get_slot(numSlot) {
        return set_slot()
    }
    
}

let calc = new Calculator()
calc.add(9,6)
console.log(calc.last())
console.log(calc.add(LAST,4,5))
console.log(calc.resultArray)

console.log(calc.get_slot())


module.exports = Calculator;