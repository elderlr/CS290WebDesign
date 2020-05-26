/*   https://www.w3schools.com/howto/howto_js_slideshow.asp.  */
/*https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9*/
//both of the above sites helped me come to the below code

function showPicture(n) {
    var i;
    var slide = document.getElementsByClassName("mySlides");
    var sub = document.getElementById("mySlides_sub").children;
    if (n > slide.length) {
        slideIndex = 1
    }
    else if (n < 1) {
        slideIndex = slide.length;
    } else {
        slideIndex = n;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < sub.length; i++) {
        sub[i].className = "sub";
    }
    slide[slideIndex - 1].style.display = "block";
    sub[slideIndex - 1].className = "subOn";
}


// clock
function pictureTimer() {
    slideIndex += 1;
    showPicture(slideIndex);
    setTimeout(pictureTimer, 3000);
}

// prev button
function previousPicture() {
    slideIndex -= 1;
    showPicture(slideIndex);
}

//next button
function nextPicture() {
    slideIndex += 1;
    showPicture(slideIndex);
}

// Add listener to previous picture button
document.getElementsByClassName("Prev")[0].addEventListener("click",
    previousPicture)

// Add listener to next picture button
document.getElementsByClassName("Next")[0].addEventListener("click",
    nextPicture)

// Call first picture
var slideIndex = 0;
showPicture(slideIndex);

//call to the clock to keep things moving at the end
pictureTimer();