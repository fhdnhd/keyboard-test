Kinput.onkeydown = Kinput.onkeyup = Kinput.onkeypress = Kinput.onmouseup = Kinput.onmousedown = handle;

let lastTime = Date.now();

function handle(e) {
  //if (form.elements[e.type + 'Ignore'].checked) return;

  //area.scrollTop = 1e6;

  let text = e.type +
    ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftKey' : '') +
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.metaKey ? ' metaKey' : '') +
    (e.repeat ? ' (repeat)' : '') +
    "\n";
    //alert(e.key);
    
    console.log(text);
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
//   if (area.value && Date.now() - lastTime > 250) {
//     area.value += new Array(81).join('-') + '\n';
//   }
//   lastTime = Date.now();

//   area.value += text;

//   if (form.elements[e.type + 'Stop'].checked) {
//     e.preventDefault();
//   }
}