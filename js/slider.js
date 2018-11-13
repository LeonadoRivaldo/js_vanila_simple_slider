

class Slider{

  constructor(){
    this.debug = true;
    this.log("slider", "start");

    var _this = this;

    this.sliders.forEach(function(slider){
      var arrows = [];
      var items = [];
      slider.childNodes.forEach(function(cn){
        if( cn.nodeName == "#text" || !cn ){
          return;
        }

        _this.log('cl', cn.classList.contains("slider-item-container"));

        if(cn.classList.contains("slider-arrow")){
          arrows.push(cn);
        }else if(cn.classList.contains("slider-item-container") ){
          cn.childNodes.forEach(function(item, key){
            if( item.nodeName == "#text" || !item ){
              return;
            }

            item.dataset.index = items.length;

            if(item.classList.contains("start")){
              item.classList.add("active");
            }

            //for further use
            items.push(item);

          })
        }

      });


      arrows.forEach(function(arrow){

        if(arrow.classList.contains("left")){
          arrow.addEventListener('click', function(event){
            _this.log("pe", event);
          });
        }else if(arrow.classList.contains("right")){
          arrow.addEventListener('click',  function(event){
            _this.log("ne", event);
          });
        }else{
          _this.log("unknwon arrows");
        }

      })


      _this.log('a', arrows);
      _this.log('s', slider.childNodes);
    })





  }

  log(label, msg){
    if(this.debug){
      console.log(`${label} --> `, msg);
    }
  }

  get sliders(){
    return document.querySelectorAll(".slider");
  }

}

var slider = new Slider();
