function calculate(){
    const input = document.getElementById("input").value;
    let opearand1 = 0 , operand2 = 0 , operator='' , res = 0;
   let arr=[];
    
    if(input.includes('+')){
        operator = '+';
        arr = input.split('+')
    }else if(input.includes('-')){
        operator = '-';
         arr = input.split('-');
    }else if(input.includes('*')){
        operator = '*';
         arr = input.split('*')
    }else if(input.includes('/')){
        operator = '/';
         arr = input.split('/')
    }else{
        operator = '%';
         arr = input.split('%')
    }
    
    operand1 = Number(arr[0]);
    
    operand2 = Number(arr[1]);
    switch(operator){
        case '+':
            res = operand1+operand2;
            break;

            case '-':
            res = operand1-operand2;
            break;

            case '*':
            res = operand1*operand2;
            break;

            case '/':
            res = operand1/operand2;
            break;

            case '%':
            res = operand1%operand2;
            break;

    } 
    let result = document.getElementById("result");
    result.innerHTML = res; 
}