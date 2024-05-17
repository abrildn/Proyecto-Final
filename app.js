function changeVideo(videoId) {
    let iframe = document.getElementById('change-video');
    iframe.src = 'http://www.youtube.com/embed/' + videoId;
}