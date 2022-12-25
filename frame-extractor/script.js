var videoUrl = null;
var fps = 30;
var player = null;
var icon = null;
var downloadButton = null;
var uploadButton = null;
var fpsDiv = null;
var slider = null;
var fpsOutput = null;
var progress = null;

window.onload = onInit;

function onInit() {
    this.player = document.getElementById("video");
    this.icon = document.getElementById("play-icon");
    this.downloadButton = document.getElementById("download-button");
    this.uploadButton = document.getElementById("upload-button");
    this.fpsDiv = document.getElementById("fps-div");
    this.slider = document.getElementById("fps-slider");
    this.fpsOutput = document.getElementById("fps-output");
    this.progress = document.getElementById("progress");
}

function uploadVideo() {
    document.getElementById('video-input').click();
}

function onVideoUpload() {
    var video = document.getElementById('video-input').files[0];
    this.videoUrl = window.URL.createObjectURL(video);
    this.player.src = videoUrl;

    this.player.style.display = "block";
    this.icon.style.display = "none";
    this.downloadButton.style.display = "block";
    this.fpsDiv.style.display = "flex";

    this.player.play();
}

function changeFps() {
    this.fps = this.slider.value;
    this.fpsOutput.value = `FPS: ${this.fps}`;
}

async function downloadImages() {
    var videoBlob = await fetch(videoUrl).then((r) => r.blob());
    var videoObjectUrl = URL.createObjectURL(videoBlob);
    var player = document.createElement("video");

    var seekResolve;
    player.addEventListener("seeked", async function () {
        if (seekResolve) {
            seekResolve();
        };
    });

    player.src = videoObjectUrl;

    while ((player.duration === Infinity || isNaN(player.duration)) && player.readyState < 2) {
        await new Promise((r) => setTimeout(r, 1000));
        player.currentTime = 10000000 * Math.random();
    }

    var zip = new JSZip();
    var folder = zip.folder('collection');

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var [width, height] = [player.videoWidth, player.videoHeight];
    canvas.width = width;
    canvas.height = height;

    var interval = 1 / this.fps;
    var currentTime = 0;
    var duration = player.duration;

    disableButtons();

    while (currentTime < duration) {
        player.currentTime = currentTime;
        await new Promise((r) => (seekResolve = r));

        context.drawImage(player, 0, 0, width, height);
        image = canvas.toDataURL();

        folder.file(`${Date.now()}.png`, dataURLtoFile(image, `${currentTime}.png`));

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
    this.progress.innerText = text;
}

function enableButtons() {
    this.downloadButton.classList.replace("alt-button-disabled", "alt-button");
    this.uploadButton.classList.remove("alt-button-disabled");
    this.progress.style.display = "none";
}

function disableButtons() {
    this.downloadButton.classList.replace("alt-button", "alt-button-disabled");
    this.uploadButton.classList.add("alt-button-disabled");
    this.progress.style.display = "block";
    this.fpsDiv.style.display = "none";
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