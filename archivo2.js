$(document).ready(function(){
    $(".boton1").click(function(){
        window.location.href = "archivo1.1.html";
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
        window.location.href = "archivo1.2.html";
    });
});

