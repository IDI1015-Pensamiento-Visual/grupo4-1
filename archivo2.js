$(document).ready(function(){
    $(".boton1").click(function(){
        window.location.href = "archivo1.1.html";
    });
    $(".boton2").click(function(){
        window.location.href = "archivo1.2.html";
    });
    $(".boton3").click(function(){
        window.location.href = "archivo1.3.html";
    });
    $(".boton4").click(function(){
        window.location.href = "archivo1.1.html";
    });
    $(".boton5").click(function(){
        window.location.href = "archivo1.0.html";
    });  
    $("#year1").hover(function(){
        $("#mensaje1").show();
        },
        function(){
        $("#mensaje1").hide();
    });
    $("#year2").hover(function(){
        $("#mensaje2").show();
        },
        function(){
        $("#mensaje2").hide();
    });
    $("#year3").hover(function(){
        $("#mensaje3").show();
        },
        function(){
        $("#mensaje3").hide();
    });
    $("#year4").hover(function(){
        $("#mensaje4").show();
        },
        function(){
        $("#mensaje4").hide();
    });
    $("#year5").hover(function(){
        $("#mensaje5").show();
        },
        function(){
        $("#mensaje5").hide();
    });
    $("#year6").hover(function(){
        $("#mensaje6").show();
        },
        function(){
        $("#mensaje6").hide();
    });
    $("#botoninicial3").hover(function(){
        $("#hazclick").show();
        },
        function(){
        $("#hazclick").hide();
    });
});