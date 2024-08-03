$("document").ready(function () {
 
  $("#hide").click(function(){
    $("#img").hide()
  })

  $("#show").click(function(){
    $("#img").show()
  })

  $("#toggle").click(function(){
    $("#img").toggle()
  })

  $("#fadeIn").click(function(){
    $("#img").fadeIn(2000)
  })

  $("#fadeOut").click(function(){
    $("#img").fadeOut(2000)
  })

  $("#fadeToggle").click(function(){
    $("#img").fadeToggle()
  })

  $("#SlideUp").click(function(){
    $("#img2").slideUp(2000)
  })

  $("#SlideDown").click(function(){
    $("#img2").slideDown(2000)
  })

  $("#SlideToggle").click(function(){
    $("#img2").slideToggle()
  })

  $("#stop").click(function(){
    $("#img2").stop()
  })

  $("#animate").click(function(){
    $("#img3").animate({  //animate function take three parameters: css, duration, callBack
        left:"200px",
        opacity:1,
        width:"300px",
        height:"200px"
    },1000)
  })

});
