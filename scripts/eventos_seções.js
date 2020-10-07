function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        window.location.hash = id;
    });

}


$(function () { // jquery

    $("#irParaSecao0").on("click", function () {
        scrollPara("#secao0");
    });

    $("#irParaSecao1").on("click", function () {
        scrollPara("#secao1");
    });

    $("#irParaSecao2").on("click", function () {
        scrollPara("#secao2");
    });

    $("#irParaSecao3").on("click", function () {
        scrollPara("#secao3");
    });

    $("#irParaSecao4").on("click", function () {
        scrollPara("#secao4");
    });

    $("#irParaSecao5").on("click", function () {
        scrollPara("#secao5");
    });
    
    $("#irParaSecao6").on("click", function () {
        scrollPara("#secao6");
    });


});

