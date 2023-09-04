const values = [1, 2, 3, 4, 5, 6, 7];

function leftClick() {
  var rightValue = document.getElementById("liC").innerHTML;
  if (rightValue <= values.length - 1 && rightValue > values[0]) {
    console.log("a");
    document.getElementById("liA").innerHTML = values[rightValue - 2];
    document.getElementById("liB").innerHTML = values[rightValue - 1];
    document.getElementById("liC").innerHTML = values[rightValue];
  }
  if (rightValue > values.length - 1) {
    console.log("b");

    document.getElementById("liA").innerHTML = values[rightValue - 2];
    document.getElementById("liB").innerHTML = values[rightValue - 1];
    document.getElementById("liC").innerHTML = values[0];
  }
  if (rightValue == values[0]) {
    document.getElementById("liA").innerHTML = values[values.length - 1];
    document.getElementById("liB").innerHTML = values[0];
    document.getElementById("liC").innerHTML = values[1];
  }
}

function rightClick() {
  document.getElementById("liB").innerHTML = "Hello World";
}

function setValue(event) {
  if (event === "liA") {
    document.getElementById("set-btn").innerHTML =
      document.getElementById("liA").innerHTML;
  }
  if (event === "liB") {
    document.getElementById("set-btn").innerHTML =
      document.getElementById("liB").innerHTML;
  }
  if (event === "liC") {
    document.getElementById("set-btn").innerHTML =
      document.getElementById("liC").innerHTML;
  }
}
