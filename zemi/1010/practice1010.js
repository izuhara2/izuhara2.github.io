var number1=0;
up1.addEventListener('click' , ()=>{
    number1 += 1;
    document.querySelector( '#number1' ).value=number1;
});
down1.addEventListener('click' , ()=>{
    number1 -= 1;
    document.querySelector( '#number1' ).value=number1;
});

var number2=0;
up2.addEventListener('click' , ()=>{
    number2 += 1;
    document.querySelector( '#number2' ).value=number2;
});
down2.addEventListener('click' , ()=>{
    number2 -= 1;
    document.querySelector( '#number2' ).value=number2;
});

var result=0;
sum.addEventListener('click' , ()=>{
    result=number1 + number2;
    document.querySelector( '#answer' ).value=result;
});