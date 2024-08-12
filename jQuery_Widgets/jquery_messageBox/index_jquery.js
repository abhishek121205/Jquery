$("document").ready(function(){
   $("#btn").click(function(){
      $("#box").dialog("open")
   })

   $("#box").dialog({
      title: "Hello world!!",
      draggable: false,
      resizable: false,
      modal: true,
      autoOpen: false
   })
});
//go through the jquery website for more info