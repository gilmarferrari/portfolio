function showAbout(number, parent) {
    var about = document.getElementById(`about-${number}`);

    about.classList.remove('hideAbout');
    about.classList.add('about');
    parent.classList.remove('initial-icon');
}