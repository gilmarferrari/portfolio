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