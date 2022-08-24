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

function onScreen(output){
    const para1=document.querySelector("p");
    para1.textContent=output;

}
function store(valueOfButton){
    const para=document.querySelector("p")
    para.textContent=valueOfButton;
    let vb=valueOfButton
    takingInput(vb);
}



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


    



const btn=document.querySelectorAll("button");
btn.forEach((button)=>button.addEventListener('click',()=>store(button.value)));
const btn1=document.querySelector("#l1");
btn1.addEventListener('click',()=>clear())

















































