function YTtoPlaylist() {
    let urlIn = document.getElementById('urlinput');
    let urlElement = document.getElementById('YTurl');
    let outputTxt = document.getElementById('outputText');
    let reloadBut = document.getElementById('reload');
    let copyBut = document.getElementById('copy');
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

    if (playlistUrl.includes('https://')) {
        outputTxt.innerHTML = playlistUrl;
        outputTxt.setAttribute('href', playlistUrl);
    } else {
    outputTxt.innerHTML = playlistUrl;
    outputTxt.setAttribute('href', 'https://' + playlistUrl);
    }

    urlIn.style.display = 'none';
    outputTxt.style.display = 'inherit';
    copyBut.style.display = 'inline';
    reloadBut.style.display = 'inline-block';
    content.style.marginLeft = '35vw';
    content.style.marginRight = '35vw';
    }
}

function copyToClipboard() {
    let outputTxt = document.getElementById('outputText');

    navigator.clipboard.writeText(outputTxt.innerText);
}