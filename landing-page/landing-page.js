function scroll(element) {
    document.getElementById(element).scrollIntoView({
        behavior: 'smooth'
    });
}

var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var navigation = document.getElementById("navigation");
    var curScrollPos = window.pageYOffset;

    if (prevScrollPos > curScrollPos) {
        navigation.style.top = "0";
    }
    else if (curScrollPos > 40) {
        navigation.style.top = "-50px";
    }
    
    prevScrollPos = curScrollPos;
}