Kinput.onkeydown = Kinput.onkeyup = Kinput.onkeypress = Kinput.onmouseup = Kinput.onmousedown = handle;

function handle(e) {
// untuk testing 
//   let text = e.type +
//     ' key=' + e.key +
//     ' code=' + e.code +
//     (e.shiftKey ? ' shiftKey' : '') +
//     (e.ctrlKey ? ' ctrlKey' : '') +
//     (e.altKey ? ' altKey' : '') +
//     (e.metaKey ? ' metaKey' : '') +
//     (e.repeat ? ' (repeat)' : '') +
//     "\n";
    
//    console.log(text);
    if(e.button == 0){
        var button = 'leftclick';
    }else if(e.button == 1){
        var button = 'middleclick';
    }else if(e.button == 2){
        var button = 'rightclick';
    }
    if(e.type == 'keydown'){
        document.getElementById(e.code).classList.add("press");
        document.getElementById(e.code).classList.remove("pressed");
    }
    if(e.type == 'keyup'){
        document.getElementById(e.code).classList.remove("press");
        document.getElementById(e.code).classList.add("pressed");
    }
    if(e.type == 'mousedown'){
        document.getElementById(button).classList.add("press");
        document.getElementById(button).classList.remove("pressed");
    }
    if(e.type == 'mouseup'){
        document.getElementById(button).classList.remove("press");
        document.getElementById(button).classList.add("pressed");
    }
    e.preventDefault();
}