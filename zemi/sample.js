function change_slider(){
    var processing = document.querySelector( '#slider1' ).value;
    var output1 =  document.querySelector( '#processing_time' );

    var devi = document.querySelector( '#slider2' ).value;
    var output2 = document.querySelector( '#deviation' );

    var flow = document.querySelector( '#slider3' ).value;
    var output3 = document.querySelector( '#flow' );

    output1.innerText = processing;
    output2.innerText = devi;
    output3.innerText = flow;
}
