function showAbout(number, parent) {
    var about = document.getElementById(`about-${number}`);

    about.classList.remove('hideAbout');
    about.classList.add('about');
    parent.classList.remove('initial-icon');
}

function changeLanguage() {
    var language = localStorage.getItem('lang') ?? 'PT-BR';

    switch (language) {
        case 'PT-BR':
            language = 'EN-US'
            window.location.href = 'https://gilmarferrari.github.io/portfolio/en/';
            break;
        case 'EN-US':
            language = 'PT-BR'
            window.location.href = 'https://gilmarferrari.github.io/portfolio/';
            break;
    }

    localStorage.setItem('lang', language);
    getLanguage();
}

function getLanguage() {
    var label = document.getElementById('lang-code');
    label.innerText = localStorage.getItem('lang') ?? 'PT-BR';
}

var index = 0;
window.onload = onInit;

function onInit() {
    getLanguage();
    changeLabel();
}

function changeLabel() {
    var label = document.getElementById('label');

    if (!label.classList.contains('typing-effect')) {
        label.classList.add('typing-effect');
    }
    
    var language = localStorage.getItem('lang') ?? 'PT-BR';

    switch (index) {
        case 0:
            if (language == 'PT-BR') {
                label.innerText = 'Desenvolvedor de Software';
            }
            else if (language == 'EN-US') {
                label.innerText = 'Software Developer';
            }
            index++;
            break;
        case 1:
            if (language == 'PT-BR') {
                label.innerText = '<html> Desenvolvedor Web </html>';
            }
            else if (language == 'EN-US') {
                label.innerText = '<html> Web Developer </html>';
            }
            index++;
            break;
        case 2:
            if (language == 'PT-BR') {
                label.innerText = '<xml> Desenvolvedor Mobile </xml>';
            }
            else if (language == 'EN-US') {
                label.innerText = '<xml> Mobile Developer </xml>';
            }
            index++;
            break;
        case 3:
            if (language == 'PT-BR') {
                label.innerText = '../Desenvolvedor de Jogos/';
            }
            else if (language == 'EN-US') {
                label.innerText = '../Game Developer/';
            }
            index = 0;
            break;
    }
    setTimeout(() => changeLabel(), 5999);
}
