document.addEventListener("touchstart", function () { }, true);

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});


$(document).mouseup(function (e) {
  const menu = $("#menu");
  const box = $(".contacts-box");

  if (menu.has(e.target).length === 0) {
    menu.removeClass('show');
  }
  if (box.has(e.target).length === 0) {
    box.removeClass('ride');
  }

  if (e.target.id === "arrow") {
    if(box.hasClass('ride')) {
      box.removeClass("ride");
    } 
    box.addClass("ride")
  }

  if (e.target.id === "mobile") {
    menu.addClass("show")
  }
});


$("#download").on('click', () => {
  window.open("./files/cv.pdf", "_blank");
});

const btn = $('#top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.show(300);
  } else {
    btn.hide(300);
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '500');
});