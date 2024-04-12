function openpopup(){
    popup.classList.add("open-popup")
    let hide = document.getElementById('form');
    hide.style.display = 'none';
  }

window.onload = function(){
   openpopup();
}

function closepopup(){
    popup.classList.remove("open-popup")
   
    let hide = document.getElementById('form');
    hide.style.display = 'block';
  }

  function closepopup2(){
    popup.classList.remove("open-popup")

     // hide remember me button
    let rememberMeSection = document.querySelector('.rme');
    rememberMeSection.style.display = 'none';
  }


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


function internalCookie(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let color = document.getElementById('colorpicker');
    let fontsize = document.getElementById('fsize');
    let language = document.getElementById('language');
    let selectedLanguage = language.options[language.selectedIndex].value;
    let score = document.getElementById('hnum');

    document.cookie = `Username=${username.value}`; 
    document.cookie = `password=${password.value}`; 
    document.cookie = `color=${color.value}`; 
    document.cookie = `fontsize=${fontsize.value}`; 
    document.cookie = `language=${selectedLanguage}`; 
    document.cookie = `score=${score.textContent}`; 

    console.log(document.cookie);
    
}



// function changefont(fs){
//     document.body.style.fontSize = fs.value;
// }

// function changelanguage(select){
//     var select = document.getElementById("language");
//     var lang = select.value;

//     document.documentElement.lang = lang;
// }