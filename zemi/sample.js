/**
 * スライダとその値を表示する領域を制御するクラス
 */
class slider_parameter{
    /**
     * コンストラクタ
     * @param {HTMLInputElement} slider 人間が操作するスライダ
     * @param {HTMLInputElement} output 値を表示する要素
     */
    constructor(slider, output){
        this.slider = slider;
        this.output = output;
        this.slider_value = 0;
        slider.addEventListener('change',(event)=>{
            this.slider_value = event.target.value;
            this.output.innerText = this.slider_value;
        })
    }
}

let slider1 = new slider_parameter(
    document.querySelector('#slider1'),
    document.querySelector('#processing_time')
);

let slider2 = new slider_parameter(
    document.querySelector('#slider2'),
    document.querySelector('#deviation')
)

let slider3 = new slider_parameter(
    document.querySelector('#slider3'),
    document.querySelector( '#flow' )
)



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

