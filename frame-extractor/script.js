function uploadVideo() {
    document.getElementById('video-input').click();
}

function onVideoUpload() {
    var video = document.getElementById('video-input').files[0];
    this.videoUrl = window.URL.createObjectURL(video);

    var player = document.getElementById("video");
    var icon = document.getElementById("play-icon");
    var downloadButton = document.getElementById("download-button");
    var fpsDiv = document.getElementById("fps-div");
    player.src = videoUrl;

    player.style.display = "block";
    icon.style.display = "none";
    downloadButton.style.display = "block";
    fpsDiv.style.display = "flex";

    player.play();
}

function changeFps() {
    var slider = document.getElementById("fps-slider");
    this.fps = slider.value;
    var fpsOutput = document.getElementById("fps-output");
    fpsOutput.value = `FPS: ${this.fps}`;
}

var videoUrl = null;
var fps = 30;

async function downloadImages() {
    let videoBlob = await fetch(videoUrl).then((r) => r.blob());
    let videoObjectUrl = URL.createObjectURL(videoBlob);
    let player = document.createElement("video");

    let seekResolve;
    player.addEventListener("seeked", async function () {
        if (seekResolve) seekResolve();
    });

    player.src = videoObjectUrl;

    while ((player.duration === Infinity || isNaN(player.duration)) && player.readyState < 2) {
        await new Promise((r) => setTimeout(r, 1000));
        player.currentTime = 10000000 * Math.random();
    }

    let zip = new JSZip();
    let folder = zip.folder('collection');

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    let [width, height] = [player.videoWidth, player.videoHeight];
    canvas.width = width;
    canvas.height = height;

    let interval = 1 / this.fps;
    let currentTime = 0;
    let duration = player.duration;

    disableButtons();

    while (currentTime < duration) {
        player.currentTime = currentTime;
        await new Promise((r) => (seekResolve = r));

        context.drawImage(player, 0, 0, width, height);
        image = canvas.toDataURL();

        folder.file(`${currentTime}.png`, dataURLtoFile(image, `${currentTime}.png`));

        currentTime += interval;
        setProgress(`Extraídos ${Math.round(currentTime * this.fps)} de ${Math.round(duration * this.fps)} frames`);
    }

    setProgress("Processando...");

    folder.generateAsync({ type: "blob" }).then(content => {
        enableButtons();
        saveAs(content, "archive.zip");
    });
}

function setProgress(text) {
    var progress = document.getElementById("progress");
    progress.innerText = text;
}

function enableButtons() {
    var downloadButton = document.getElementById("download-button");
    var uploadButton = document.getElementById("upload-button");
    var progress = document.getElementById("progress");

    downloadButton.classList.replace("alt-button-disabled", "alt-button");
    uploadButton.classList.remove("alt-button-disabled");
    progress.style.display = "none";
}

function disableButtons() {
    var downloadButton = document.getElementById("download-button");
    var uploadButton = document.getElementById("upload-button");
    var progress = document.getElementById("progress");
    var fpsDiv = document.getElementById("fps-div");

    downloadButton.classList.replace("alt-button", "alt-button-disabled");
    uploadButton.classList.add("alt-button-disabled");
    progress.style.display = "block";
    fpsDiv.style.display = "none";
}

function dataURLtoFile(dataurl, filename) {
    var array = dataurl.split(','),
        mime = array[0].match(/:(.*?);/)[1],
        bstr = atob(array[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}