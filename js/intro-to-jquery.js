jQuery("h3").click(function (){
    $(this).next().slideToggle(500)
});

//  jQuery === $

function init() {
    jQuery("h3").click(function (){
        $(this).next().slideToggle(500)
    });
}
window.onload = init;