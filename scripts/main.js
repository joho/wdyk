bespoke.horizontal.from('article', {
  bullets: 'li, .bullet',
  hash: true
});

var countdownTimer = function(e) {
  confirm("Start Presentation Now?");
  var start = new Date().getTime();

  setInterval(function () {
    var now = new Date().getTime();
    var rawSeconds = parseInt((now - start) / 1000);
    var minutes = parseInt(rawSeconds / 60);
    var seconds = 60 - (rawSeconds % 60)
    e.target.innerHTML = (5 - minutes) + ":" + seconds;
  }, 1000);
};

var el = document.getElementById("clock");
if (el.addEventListener) {
    el.addEventListener("click", countdownTimer, false);
} else {
    el.attachEvent('onclick', countdownTimer);
}  

