slider1.addEventListener('change',()=>{
    var processing = document.querySelector( '#slider1' ).value;
    var output1 =  document.querySelector( '#processing_time' );
    output1.innerText = processing;
});

slider2.addEventListener('change',()=>{
    var devi = document.querySelector( '#slider2' ).value;
    var output2 =  document.querySelector( '#deviation' );
    output2.innerText = devi;
});

slider3.addEventListener('change',()=>{
    var flow = document.querySelector( '#slider3' ).value;
    var output3 =  document.querySelector( '#flow' );
    output3.innerText = flow;
});

window.addEventListener("load", function(){
    var element = document.getElementById('graph');
    var context = element.getContext('2d');
    console.log(context);
    context.beginPath();
    context.moveTo(25,0);
    context.lineTo(25,350);
    context.stroke();

    context.beginPath();
    context.moveTo(0,280);
    context.lineTo(500,280);
    context.stroke();
});
