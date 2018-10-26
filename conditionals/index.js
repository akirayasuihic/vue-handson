const app = new Vue({
  el: '#app',
  data: {
    message: '',
    seen: true,
    now: ''
  }
})

var date = new Date();
var month = date.getMonth();
var today = date.getDate();
var message = "";

if (today % 2 == 0) {
  message = "本日は" + month + "月" + today + "日です";
} else {
  message = "本日は" + month + "月の奇数日です";
}

app.message = message;

var seenChange = function() {
  var seenDate = new Date();
  var millSec = seenDate.getSeconds();
  if (millSec >= 30) {
    app.seen = false;
  } else {
    app.seen = true;
  }
};

var seenNow = function() {
  var intervalDate = new Date();
  var dateStr = [intervalDate.getMonth(), intervalDate.getDate()].join('/');
  var timeStr = [intervalDate.getHours(), intervalDate.getMinutes()].join(':');
  var withSeconds = [timeStr, intervalDate.getSeconds()].join('.');
  var nowTimeStr = [dateStr, withSeconds].join(' ');
  app.now = nowTimeStr;
};

setInterval(seenChange, 500);
setInterval(seenNow, 1000);
