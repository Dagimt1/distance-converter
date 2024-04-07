(function () {
  var convertType = "miles";
  var heading = document.querySelector("h1");
  var intro = document.querySelector(".top p");
  let answerBox = document.getElementById("answer");
  var form = document.getElementById("convert");

  document.addEventListener("keydown", function (event) {
    var key = event.code;
    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to miles converter";
      intro.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to kilometers converter";
      intro.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var distance = parseFloat(document.getElementById("distance").value);
    if (!isNaN(distance)) {
      var result;
      if (convertType === "miles") {
        result = (distance * 1.60934).toFixed(3);
        answerBox.innerHTML = `You have entered ${distance} miles and the converted distance to kilometers is: ${result}`;
      } else if (convertType === "kilometers") {
        result = (distance / 1.60934).toFixed(3);
        answerBox.innerHTML = `You have entered ${distance} kilometers and the converted distance to miles is: ${result}`;
      }
    } else {
      answerBox.innerHTML = "Please provide a valid number";
    }
  });
})();
