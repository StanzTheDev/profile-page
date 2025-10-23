function showCurrentTime() {
  const currentTime = Date.now();
  document.getElementById('currentTime').textContent = currentTime;
}

showCurrentTime();

setInterval(showCurrentTime, 1000);
