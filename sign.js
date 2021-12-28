let date = new Date();
let day = date.getDay();
let time = date.getHours();

function sign() {
  if ((day === 1 || 2 || 3 || 4 || 5) && (time <= 10 || time >= 19)) {
    $("#sign").attr("src", "images/closed.jpeg");
  } else if ((day === 6 || 0) && (time <= 11 || time >= 16)) {
    $("#sign").attr("src", "images/closed.jpeg");
  }
}

sign();
