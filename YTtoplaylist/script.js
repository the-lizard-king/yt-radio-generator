function YTtoPlaylist() {
    let urlIn = document.getElementById('urlinput');
    let urlElement = document.getElementById('YTurl');
    let outputTxt = document.getElementById('outputText');
    let reloadBut = document.getElementById('reload');
    let url = urlElement.value;
    let vidIdStart = 0;
    let vidId = '';
    let playlistUrl = '';

    if (url == '' || !url.includes('youtube.com/watch?v=')) {
        outputTxt.innerHTML = 'please enter a valid url';
        outputTxt.style.display = 'inherit';
    } else {
        let i = 0;
        while (vidIdStart == 0) {
            if (url.charAt(i) == '=') {
                vidIdStart = i + 1;
            }
            i++;
        }
    vidId = url.substring(vidIdStart, url.length);
    playlistUrl = url + '&list=RD' + vidId + '&start_radio=1';

    outputTxt.innerHTML = playlistUrl;
    urlIn.style.display = 'none';
    outputTxt.style.display = 'inherit';
    reloadBut.style.display = 'inherit';
    }
}