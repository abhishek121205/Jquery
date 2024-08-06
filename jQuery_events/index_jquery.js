$("document").ready(function () {
 
    $("#btn").dblclick(function () { //double click event
        $(".box").fadeToggle();
    });

    // $(".box").mouseenter(function () {
    //     $(".box").css("background-color","yellow"); //mouse enter event
    // });

    // $(".box").mouseleave(function () {
    //     $(".box").css("background-color","red");//mouse leave event
    // });

    $(".box").hover(func1,func2); //hover event
    function func1(){
        $(".box").css("background-color","yellow");
    }

    function func2(){
        $(".box").css("background-color","red");
    }

    $('#name').keyup(function(){  //keyboard event
        var name=$('#name').val()
        $('#result').html(name)
    })
});
