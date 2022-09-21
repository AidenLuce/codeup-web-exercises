$(function(){

    $("#clickMe").on('click', function(){
        alert(">:(");
    });

    $("#create-an-element").on("click", function(){
        $(this).after("<button class='will-this-work'>Click Me</button>");
    });
    //DELEGATED EVENT
    $(document).on('click', '.will-this-work', function(){
        alert("OOOOOOOOOOOOH YEEEEEAAAAAAAAAHH");
    });

    $(".box").hover(function(){
        $(this).css('background-color', 'hotpink');
    },
    function (){
        $(this).css('background-color', 'unset');
    });


});