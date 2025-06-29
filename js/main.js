$(document).ready(function(){
    let currentPage = "home";
    let currentNavLink = $("#nav-ul").children().first().children()[0];


    let characterIndex = 0;

    let titleNames = ["p", "pr", "pro", "prok", "prokh", "prokho", "prokhor", "prokhorc", "prokhorchu", "prokhorchuk", "prokhorchu", "prokhorch", "prokhorc", "prokhor", "prokho", "prokh", "prok", "pro", "pr", "p"];

    window.updateTitleName = function () {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
    }

    setInterval(() => {
        window.updateTitleName()
    }, 500);
    
})