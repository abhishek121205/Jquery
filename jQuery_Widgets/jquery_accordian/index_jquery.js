$("document").ready(function(){
   $("#box").accordion({
    collapsible: true,
    icons:{header:"ui-icon-arrow-1-e",activeHeader:"ui-icon-arrow-1-se"},
    animate: 500,
    // event: "mouseover"  //by default click
   })
});
//go through the jquery website for more info