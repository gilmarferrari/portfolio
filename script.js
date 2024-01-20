function showAbout(number, parent) {
    var about = document.getElementById(`about-${number}`);

    about.classList.remove('hideAbout');
    about.classList.add('about');
    parent.classList.remove('initial-icon');
}

var index = 0;
window.onload = onInit;

function onInit() {
    changeLabel();

    $.when($.getJSON('https://api.github.com/repos/gilmarferrari/Plan-It/releases/latest')).done(function (latestRelease) {
        var apkAsset = latestRelease?.assets?.filter(a => a.content_type == 'application/vnd.android.package-archive')[0]
        
        if (apkAsset) {
            var planItDownloadUrl = apkAsset.browser_download_url;
            document.getElementById('plan-it-download-button').href = planItDownloadUrl;
        }
    });
}

function changeLabel() {
    var label = document.getElementById('label');

    if (!label.classList.contains('typing-effect')) {
        label.classList.add('typing-effect');
    }

    switch (index) {
        case 0:
            label.innerText = 'Desenvolvedor de Software';
            index++;
            break;
        case 1:
            label.innerText = '<html> Desenvolvedor Web </html>';
            index++;
            break;
        case 2:
            label.innerText = 'const Text("Desenvolvedor Mobile")';
            index++;
            break;
        case 3:
            label.innerText = '../Desenvolvedor de Jogos/'
            index = 0;
            break;
    }
    setTimeout(() => changeLabel(), 5999);
}
