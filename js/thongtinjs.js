$(document).ready(function() {
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 50) {
            $("#navbar").css('display', 'block');
        } else {
            $("#navbar").css('display', 'none');
        }

        if ($(window).scrollTop() > 200) {
            $("#sound").css('display', 'block');
        } else {
            $("#sound").css('display', 'none');
        }
    })


});


function clickplayer() {
    if(document.getElementById("audio").paused) {
        document.getElementById("audio").play();
    }
    $("#sound").addClass('clickPlayer');
    $("#nen").css('display', 'block');
    $("#audio").css('display', 'block');
    $("#control-play").css('display', 'none');
}

function clickImg(s) {
    var hienImg = document.getElementById('hienImg');
    hienImg.style.display='block';
    hienImg.firstElementChild.src = s;
}

