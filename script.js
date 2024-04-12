function darkmode() {
    var body = document.body;
    body.classList.add('dark-mode');
    body.classList.remove('light-mode'); 

    // var colorpicker = document.getElementById('colorpicker');
    // colorpicker.value = '';

    document.body.style.backgroundColor = '';
    document.cookie = "theme=dark; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/"; // Set cookie for dark mode
}

function lightmode() {
    var body = document.body;
    body.classList.remove('dark-mode');
    body.classList.add('light-mode'); 

    // var colorpicker = document.getElementById('colorpicker');
    // colorpicker.value = '';



    document.body.style.backgroundColor = '';
    document.cookie = "theme=light; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/"; 
}

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
    
    let hide = document.getElementById('form');
    hide.style.display = 'block';

    // hide remember me button
    let hideremember = document.querySelector('.rme');
    hideremember.style.display = 'none';

    document.cookie = `Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
    document.cookie = `password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
    document.cookie = `color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
    document.cookie = `fontsize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
    document.cookie = `language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
    document.cookie = `score=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
    document.cookie = `theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`; 
}

function togglePassword() {
    var password = document.getElementById("password");
    var togglePasswordIcon = document.getElementById("togglePassword");
    if (password.type === "password") {
        password.type = "text";
        togglePasswordIcon.classList.remove("bi-eye-slash");
        togglePasswordIcon.classList.add("bi-eye");
    } else {
        password.type = "password";
        togglePasswordIcon.classList.remove("bi-eye");
        togglePasswordIcon.classList.add("bi-eye-slash");
    }
}

function changecolor(el) {
    document.body.style.backgroundColor = el.value;
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
    let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

    document.cookie = `Username=${username.value}`; 
    document.cookie = `password=${password.value}`; 
    document.cookie = `color=${color.value}`; 
    document.cookie = `fontsize=${fontsize.value}`; 
    document.cookie = `language=${selectedLanguage}`; 
    document.cookie = `score=${score.textContent}`; 
    document.cookie = `theme=${theme}`; 

    console.log(document.cookie);  
}
