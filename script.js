function changeLanguage() {
    var language = localStorage.getItem('language');

    switch (language) {
        case 'English':
            language = 'Portuguese'
            break;
        case 'Portuguese':
            language = 'English'
            break;
        default:
            language = 'Portuguese'
            break;
    }

    localStorage.setItem('language', language);
}

function showAbout(number, parent) {
    var about = document.getElementById(`about-${number}`);

    about.classList.remove('hideAbout');
    about.classList.add('about');
    parent.classList.remove('initial-icon');
}