document.addEventListener('DOMContentLoaded', function() {
    let characterIndex = 0;

    let titleNames = ["p", "pr", "pro", "prok", "prokh", "prokho", "prokhor", "prokhorc", "prokhorchu", "prokhorchuk", "prokhorchu", "prokhorch", "prokhorc", "prokhor", "prokho", "prokh", "prok", "pro", "pr", "p"];

    window.updateTitleName = function () {
        document.title = titleNames[characterIndex % titleNames.length];
        characterIndex++;
    }

    setInterval(() => {
        window.updateTitleName();
    }, 500);

});