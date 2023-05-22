$(document).ready(function(){
    $(".boton1").click(function(){
        window.location.href = "archivo1.2.html";
    });
    $(".boton2").click(function(){
        window.location.href = "archivo1.4.html";
    });
    $(".boton3").click(function(){
        window.location.href = "archivo1.3.1.html";
    });
    $(".boton4").click(function() {
        var outputValue = $("#output").text();
      
        if (outputValue === "60%") {
          window.location.href = "archivo1.1.1.html";
        } else {
          window.location.href = "archivo1.1.2.html";
        }
      });      
    $(".boton5").click(function(){
        window.location.href = "archivo1.0.html";
    });  
    $(".boton6").click(function(){
        window.location.href ="archivo1.3.1.html";
    });
    $(".boton7").click(function(){
        window.location.href = "archivo1.3.2.html";
    });
    $(".boton8").click(function(){
        window.location.href = "archivo1.3.3.html";
    });
    $(".boton9").click(function(){
        window.location.href = "archivo1.1.3.html";
    });
    $(".boton10").click(function(){
        window.location.href = "archivo1.3.4.html";
    });
    $(".boton11").click(function(){
        window.location.href = "archivo1.2.html";
    });
/*clicks de archivo1.3.4*/
    $('#f1').click(function() {
        $("#f3").toggle();
    });
    $('#w1').click(function() {
        $("#w3").toggle();
    });
    $('#i1').click(function() {
        $("#i3").toggle();
    });
    $('#s1').click(function() {
        $("#s3").toggle();
    });
    $('#t1').click(function() {
        $("#t3").toggle();
    });
        
    var mensaje = $('#mensajeayuda');
    var content = $('#textoayuda').offset().top;
      
    $(window).scroll(function() {
          if ($(window).scrollTop() > content) {
            mensaje.addClass('hidden'); 
          } else {
            mensaje.removeClass('hidden'); 
          }
        });
      

/*hovers de archivo1.4*/
    $("#addiccion1").hover(function() {
        $("#addiccion2").show();
        },
        function(){
            $("#soledad2").hide();
        },
        );
        $("#addiccion1").hover(function() {
            $("#addiccion2").show();
            },
            function(){
                $("#exp2").hide();
            },
        );
        $("#addiccion1").hover(function() {
                $("#addiccion2").show();
                },
                function(){
                    $("#cyber2").hide();
                },
                );
    $("#soledad1").hover(function() {
        $("#soledad2").show();
        },
        function(){
            $("#addiccion2").hide();
            },
        );
        $("#soledad1").hover(function() {
            $("#soledad2").show();
            },
            function(){
                    $("#exp2").hide();
                },
            );
            $("#soledad1").hover(function() {
                $("#soledad2").show();
                },
                function(){
                        $("#cyber2").hide();
                    },
                );
    $("#exp1").hover(function() {
        $("#exp2").show();
            },
        function(){
            $("#addiccion2").hide();
            },
        );
        $("#exp1").hover(function() {
            $("#exp2").show();
                },
            function(){
                $("#soledad2").hide();
                },
            );
            $("#exp1").hover(function() {
                $("#exp2").show();
                    },
                function(){
                    $("#cyber2").hide();
                    },
                );
    $("#cyber1").hover(function() {
        $("#cyber2").show();
            },
        function(){
            $("#addiccion2").hide();
            },
        );
        $("#cyber1").hover(function() {
            $("#cyber2").show();
                },
            function(){
                $("#soledad2").hide();
                },
            );
            $("#cyber1").hover(function() {
                $("#cyber2").show();
                    },
                function(){
                    $("#exp2").hide();
                    },
                );  

});