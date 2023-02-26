$(document).ready(function(){
    $("#mybtn").click(function(){
        $("#man").css("left","0px");
        function showMenu(){
            $("#man").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100%)");
            $("#woman").css("right","-40%");
        }
        setTimeout(showMenu,100);
    });

});