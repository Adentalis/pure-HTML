function play() {
  var audio = document.getElementById("numbers-audio");
  var audiosource = document.getElementById("src");
  audiosource.setAttribute("src", "numbers.m4a#t=20,25");
  audio.play();
}

function playRnd() {
  var times = [
    1.8, 2.65, 3.64, 4.67, 5.67, 6.55, 7.49, 8.57, 9.63, 10.5, 11.47, 12.48,
    13.28, 14.37, 15.65, 16.92, 18.09, 19.33, 20.55, 21.8, 23.09, 24.3, 25.66,
    27.35, 29, 30.51, 31.98, 33.52, 35.15, 36.65, 38.19, 39.33, 40.74, 42.29,
    43.8, 45.24, 46.57, 47.92, 49.37, 50.8, 52.27, 53.17, 54.5, 55.99, 57.41,
    58.71, 60.04, 61.42, 62.98, 64.45, 65.91, 66.86, 68.31, 69.92, 71.42, 72.85,
    74.67, 76.1, 77.54, 79, 80.53, 81.55, 82.95, 84.45, 85.94, 87.4, 88.75,
    90.26, 91.83, 93.28, 94.83, 95.9, 97.17, 98.7, 100.2, 101.65, 103.25,
    105.12, 106.93, 108.41, 109.86, 110.91, 112.65, 114.13, 116.03, 117.51, 119,
    120.37, 122.04, 123.53, 125.02, 125.97, 127.68, 129.05, 130.64, 132.06,
    133.46, 134.95, 136.4, 137.89, 139.28,
  ];
  var rndNum = Math.floor(Math.random() * 100);
  var timeFrame = "" + times[rndNum] + "," + times[rndNum + 1];

  var audio = new Audio("numbers.m4a#t=" + timeFrame);
  audio.play();
}
