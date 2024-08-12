$("document").ready(function(){
    $("#tool").tooltip({
        track: true,
        content: "enter your name",
        show: {effect:"pulsate",duration:1000},
        hide: {effect:"explode",duration:1000},                
    })
});
//go through the jquery website for more info