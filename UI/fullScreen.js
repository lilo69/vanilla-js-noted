function activeFullscreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  }
}

function inactiveFullscreen(element) {
  if (element.exitFullscreen) {
    element.exitFullscreen();
  }
}


