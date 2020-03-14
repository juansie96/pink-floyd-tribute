function showFrame(element) {
    var frame = document.getElementById(element.id+'-frame');

    if (frame.style.display == 'block') {
        frame.style.display = 'none';
    } else {
        frame.style.display = 'block';
    }
    
}