// Mobile screen height sizing
// initial change
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// in case of rotation
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(function() {
//random color on load --- type matches blob
  $(document).ready(function() {
    $(".blobColorChange").css({"fill": getRandomColor()});
    $(".typeColorChange").css({"color": matchRandomColor()});
  });
//random color on click --- type matches blob
  $("body").click(function() {
    $(".blobColorChange").css({"fill": getRandomColor()});
    $(".typeColorChange").css({"color": matchRandomColor()});
  });
});

//generate random hex code for blob
function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}
//create matching hex code value for everything else
function matchRandomColor() {
  var blobColor = $(".blobColorChange").css("fill");
  return blobColor;
}
