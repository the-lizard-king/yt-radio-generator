function YTtoPlaylist() {
    let urlElement = document.getElementById('YTurl');
    let output = document.getElementById('outputText');
    let reloadButton = document.getElementById('reload');
    let url = urlElement.value;
    let vidIdStart = 0;
    let vidId = '';
    let playlistUrl = '';

    if (url == '' || !url.includes('https://www.youtube.com/watch?v=')) {
        output.innerHTML = 'please enter a valid url';
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

    output.innerHTML = playlistUrl;
    reloadButton.style.display = 'inherit';
    }
}