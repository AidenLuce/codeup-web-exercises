/** new $(document).ready */
$(function(){
    const $refToLibrary = $("#library")
    // id selector to alter content
    $refToLibrary.text("jQuery makes life easier");
    // get reference to content
    console.log($refToLibrary.text());

    /**  class selector and css method to alter styles
         single declaration syntax */
    // $(".framework").css('border', '1px solid black');

    /** multiple declaration syntax */

    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit content'
    });
    // type list with chained methods
    // type list with chained methods
    $("p, li").text("I've taken over.").css("color","hotpink")
});
