//used to clear the input values taken in iv
function clear()
{
iv="";
}

function add(a,b){
    let sum=a+b;
    onScreen(sum);
  clear();
}

function subtract(a,b){
    let difference=a-b;
    onScreen(difference); clear();
}

function multiply(a,b){
    let product=a*b;
    onScreen(product); clear();
}

function divide(a,b){
    let division=a/b;
    onScreen(division); clear();
}

function operate(operator,num1,num2)
{
    if(operator=='+')
    {
        add(num1,num2);
 
    }
    else if(operator=='-')
    {
        subtract(num1,num2);
 
    }
    else if(operator=='*')
    {
        multiply(num1,num2);

    }
    else if(operator=='/')
    {
        divide(num1,num2);
    }
}
//initialising variables
let iv="";
//to display output on screen
function onScreen(output){
    const para1=document.querySelector("p");
    para1.textContent=output;

}
//to store value on screen ,i think it could be skipped and directly added into taking inputs
function store(valueOfButton){
    const para=document.querySelector("p")
    para.textContent=valueOfButton;
    let vb=valueOfButton
    takingInput(vb);
}

//it is used to take inputs

function takingInput(vob)
{
    if(vob!="=")
    {
        iv=iv+vob;
        onScreen(iv);
        
    }   
    else if(vob=="=")
    {
        
        divideString(iv);

    }    
}
//to perform operation the string needs to be divided into two numbeer and one operator
function divideString(ivv){
    for(let i=0;i<ivv.length;i++)
    {
        if(ivv.charAt(i)=="+"||ivv.charAt(i)=="-"||ivv.charAt(i)=="*"||ivv.charAt(i)=="/")
        {
            let inputValue='';
            let operator1='';
            let secondInputValue=''; 
            inputValue=parseInt(inputValue+iv.slice(0,i));

            operator1=iv.charAt(i);
            
            secondInputValue=parseInt(secondInputValue+ivv.slice(i+1,ivv.length));
            
            operate(operator1,inputValue,secondInputValue);            
        }
    }
}


    

//dom

const btn=document.querySelectorAll("button");
btn.forEach((button)=>button.addEventListener('click',()=>store(button.value)));
const btn1=document.querySelector("#l1");
btn1.addEventListener('click',()=>clear())

















































