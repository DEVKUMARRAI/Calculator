class Calculator{
    constructor(previousOperandElement,currentOperandElement){
        this.previousOperandElement=previousOperandElement;
        this.currentOperandElement=currentOperandElement;
        this.clear();
    }
    clear()
    {
        this.currentOperand='';
        this.previousOperand='';
        this.operation=undefined;
    }
    delete()
    {

    }
    appendNumber(n)
    {
        if(n==='.' && this.currentOperand.includes('.'))
        {
            return;
        }
        this.currentOperand+=n.toString();
    }
    chooseOperation(operation)
    {
        if(this.currentOperand==='')return;
        if(this.previousOperand!==''){
            this.compute();
        }
        this.operation=operation;
        this.previousOperand=this.currentOperand;
        this.currentOperand='';
    }
    compute()
    {
        let finalResult;
        const prev=parseFloat(this.previousOperand);
        const curr=parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(curr))
        {
            return;
        }
        switch(this.operation){
            case '+':
                {
                    finalResult=prev+curr;
                    break;
                }
            case '-':
                {
                    finalResult=prev-curr;
                    break;
                }
            case '*':
                {
                    finalResult=prev*curr;
                    break;
                }
            case '÷':
                {
                    finalResult=prev/curr;
                    break;
                }
            default:
                {
                    return;
                }
        }
        this.currentOperand=finalResult;
        this.operation=undefined;
        this.previousOperand='';
    }
    updateDisplay()
    {
        this.currentOperandElement.innerText=this.currentOperand;
        this.previousOperandElement.innerText=this.previousOperand;
    }
}
const numberButtons=document.querySelectorAll('[data-numbers]')
const operationButtons=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allclearButton=document.querySelector('[data-all-clear]')
const previousOperandElement=document.querySelector('[data-previous-operand]')
const currentOperandElement=document.querySelector('[data-current-operand]')

const calculator=new Calculator(previousOperandElement,currentOperandElement);
numberButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    })
})
operationButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    })
})
equalsButton.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay();
})
allclearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
})
