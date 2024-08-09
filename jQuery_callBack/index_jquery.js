$("document").ready(function () {

  $("#animate").click(function(){
    $("#img3").animate({  //animate function take three parameters: css, duration, callBack
        left:"200px",
        opacity:1,
        width:"300px",
        height:"200px"
    },1000,function(){
      alert('animated')
    })
  })

  $("#slide").click(function(){
    $("#img3").slideUp(2000,function(){
      $("#img3").slideDown(2000)
    })
  })

  $("#chain").click(function(){
    $("#img3").slideUp(2000).slideDown(2000).css("opacity","1")  // chaining
  })

});
