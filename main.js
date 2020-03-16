function showFrame(element) {
    var frame = document.getElementById(element.id+'-frame');

    if (frame.style.display == 'block') {
        frame.style.display = 'none';
    } else {
        frame.style.display = 'block';
    }
    
}

function bigImg(image) {
    image.style = "cursor:pointer";
    image.style.width = "65%";
    
}

function normalImg(image) {
    image.style.width = "60%";
}

$('#id').click(function() {
    console.log('scrolling')
});