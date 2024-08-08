$("document").ready(function () {
 let isChange = false;
  $("#getRes").click(function () {   
    var x = $("#inp").val();
    $("#heading").html(x);
  });

  $("#getRes2").click(function () {   
    alert($(".h2").attr("id"))
  });

  $("#chId").click(function(){
      if(isChange == false){
        isChange = true
        $(".h2").attr("id","head2")
      }else{
        isChange = false
        $(".h2").attr("id","h2")
      }
  })

  $("#apnd").click(function(){
    $(".pg").append("<b>hello world! appended data</b>")
  })

  $("#prnd").click(function(){
    $(".pg").prepend("<b>hello world! prepended data</b>")
  })

  $("#before").click(function(){
    $(".box").before("<b>hello world! this is before</b>")
  })

  $("#after").click(function(){
    $(".box").after("<b>hello world! this is after</b>")
  })

  $("#remove").click(function(){
    $(".box").remove()
  })

  $("#empty").click(function(){
    $(".box").empty()
  })

});
