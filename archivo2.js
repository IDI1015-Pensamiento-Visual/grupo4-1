$(document).ready(function(){
/*Los siguientes 11 botones te llevan a otro archivo cuando haces click en este*/
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
        var valor = $("#output").text();
      
        if (valor === "60%") {
          window.location.href = "archivo1.1.1.html";
        } else {
          window.location.href = "archivo1.1.2.html";
        }
      });   
/*El boton4 te lleva a distintos archivos dependiendo del valor que eligan en el slider los usuarios 
de la página web. Así si eligen el valor real, les podemos decir que su respuesta es correcta*/   
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
/*clicks de archivo1.3.4. Cuando haces click en estos botones te muestra un svg (si es que esta hidden)
y te lo esconde (si es que esta shown). El comando toggle no los mostró Chat GBT*/
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

/*hovers de archivo1.4 Estos hovers muestran un svg cuando pasasel mouse por sus titulos,
 y lo esconden cuando pasas el mouse por otro de los titulo (no cuando haces mouseleave, 
así la información esta hasta quieras ver la información de otro)*/
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
/*Este código permite que el mensaje de ayuda desaparezca cuando hacen scroll y
 pasan el textoayuda. CHat GBT nos ayudo con este código*/
    var mensaje = $('#mensajeayuda');
    var content = $('#textoayuda').offset().top;
      
    $(window).scroll(function() {
          if ($(window).scrollTop() > content) {
            mensaje.addClass('hidden'); 
          } else {
            mensaje.removeClass('hidden'); 
          }
        });  

});