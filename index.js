

var $btn = document.getElementById('btnScreenShot');
$btn.addEventListener('click', onScreenShotClick);

function download(canvas, filename) {
  // create an "off-screen" anchor tag
  const a = document.createElement('a');

  // the key here is to set the download attribute of the a tag
  a.download = filename;

  // convert canvas content to data-uri for link. When download
  // attribute is set the content pointed to by link will be
  // pushed as "download" in HTML5 capable browsers
  a.href = canvas.toDataURL("image/png;base64");

  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function onScreenShotClick(event) {
  const element = document.querySelector("#capture");

  html2canvas(element).then((canvas) => {
    download(canvas, 'screenshot');
  });
}
