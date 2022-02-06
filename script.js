const vidElement = document.getElementById('video');
const strtBtn = document.getElementById('button');
const vidUrl = '';

// prompt video media stream, pass to vid element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    vidElement.srcObject = mediaStream;
    vidElement.onloadedmetadata = () => {
      vidElement.play();
    }
  } catch (error) {
    console.log('soemthings wrong ', error);
  }
}

strtBtn.addEventListener('click', async () => {
  // disable button
  strtBtn.disabled = true;
  // start pic in pic
  await vidElement.requestPictureInPicture();
  // reset button
  strtBtn.disabled = false;

});
// on load
selectMediaStream();