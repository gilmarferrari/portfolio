function showAbout(number, parent) {
    var about = document.getElementById(`about-${number}`);

    about.classList.remove('hideAbout');
    about.classList.add('about');
    parent.classList.remove('initial-icon');
}

function changeLanguage(language) {
    switch (language) {
        case 'PT-BR':
            language = 'PT-BR'
            window.location.href = portPage;
            break;
        case 'EN-US':
            language = 'EN-US'
            window.location.href = engPage;
            break;
    }

    localStorage.setItem('lang', language);
    getLanguage();
}

function getLanguage() {
    var select = document.getElementById('lang-code');
    select.value = localStorage.getItem('lang') ?? 'PT-BR';
}

function initLanguage() {
    var language = localStorage.getItem('lang') ?? 'PT-BR';

    if (language == 'PT-BR' && window.location.href != portPage) {
        window.location.href = portPage;
    }
    else if (language == 'EN-US' && window.location.href != engPage) {
        window.location.href = engPage;
    }
}

var index = 0;
const portPage = 'https://gilmarferrari.github.io/portfolio/';
const engPage = 'https://gilmarferrari.github.io/portfolio/en/';
window.onload = onInit;

function onInit() {
    //initLanguage();
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
