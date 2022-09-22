$(function(){

    const listItems = $("li");

    listItems.each(function (index){
        if (index % 2 !== 0){
            $(this).css("font-style","italic");
        }
    });

    listItems.first().css("font-size","larger");

    $("li a").last().css("text-decoration", "underline dotted");

    $("button").click("click",function(){
        // $("main").children().css("font-family", "sans-serif");
        $("ul").last().children().children().toggleClass("sansSerif").css("text-decoration","underline dotted");
    });


});