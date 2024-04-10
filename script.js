function changecolor(el) {
    document.body.style.backgroundColor = el.value;
  }


  function darkmode() {
    var body = document.body;
    body.classList.add('dark-mode');

    var colorpicker = document.getElementById('colorpicker');
    colorpicker.value = '';

    body.style.backgroundColor = '';
   
    
}

function lightmode() {
    var body = document.body;
    body.classList.remove('dark-mode');

    var colorpicker = document.getElementById('colorpicker');
    colorpicker.value = '';

    body.style.backgroundColor = '';
    
}

function game(){
    var highscore = document.getElementById('hnum');
    var num = document.getElementById('num');
    var score = Math.floor(Math.random() * 500);
    num.textContent = score;

    if(score > highscore.textContent){
        
        highscore.textContent = score;
    }
}

function Reset(){
    var form = document.getElementById('form');
    form.reset();

    var num = document.getElementById('num');
    var highscore = document.getElementById('hnum');
    num.textContent = '';
    highscore.textContent = '';

    var colorpicker = document.getElementById('colorpicker');
    colorpicker.value = '';

    document.body.style.backgroundColor = '';
}

// function changefont(fs){
//     document.body.style.fontSize = fs.value;
// }

// function changelanguage(select){
//     var select = document.getElementById("language");
//     var lang = select.value;

//     document.documentElement.lang = lang;
// }