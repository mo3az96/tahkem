$(document).ready(function () {
  const inputElements = [...document.querySelectorAll("input.code-input")];

  inputElements.forEach((ele, index) => {
    ele.addEventListener("input", (e) => {
      const [first] = e.target.value;
      e.target.value = first ?? "";
      const lastInputBox = index === inputElements.length - 1;
      const insertedContent = first !== undefined;
      if (insertedContent && !lastInputBox) {
        inputElements[index + 1].removeAttribute("disabled");
        inputElements[index + 1].focus();
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
      if (insertedContent && lastInputBox) {
        document.getElementById("code-submit-btn").classList.remove("disabled");
        document.getElementById("code-submit-btn").removeAttribute("disabled");;
      }
    });
  });

  var timer2 = "02:00";
  var interval = setInterval(function () {
    var timer = timer2.split(":");
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = seconds < 0 ? --minutes : minutes;
    if (minutes < 0) clearInterval(interval);
    seconds = seconds < 0 ? 59 : seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $(".countdown .timer").html(minutes + ":" + seconds);
    timer2 = minutes + ":" + seconds;
    if (seconds == 0) {
      clearInterval(interval);
      $(".countdown .timer").hide();
      $(".countdown .auth-link").fadeIn();
    }
  }, 1000);
});

function togglePass(ele) {
  let passInput = $(ele).siblings("input");
  if (passInput.attr("type") === "password") {
    passInput.attr("type", "text");
  } else {
    passInput.attr("type", "password");
  }
}
