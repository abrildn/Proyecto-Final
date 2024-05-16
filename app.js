function changeVideo(videoId) {
    let iframe = document.getElementById('expansions-videos');
    iframe.src = 'http://www.youtube.com/embed/' + videoId;
}

