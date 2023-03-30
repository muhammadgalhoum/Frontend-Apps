let serial = document.querySelector(".container .serialDiv input");
let serialLength = document.getElementsByName("serialLength")[0];
let generateBtn = document.getElementsByTagName("button")[0];
let warningMsg = document.getElementsByTagName("p")[0];

generateBtn.onclick = function () {
  if (serialLength.value >= 8 && serialLength.value <= 30) {
    let characters =
      "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomSerial = "";
    for (let i = 0; i < serialLength.value; i++) {
      randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serial.value = randomSerial;
    
    // Copy to Clipboard function
    serial.addEventListener("click", function (e) {
      serial.select();
      // serial.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(serial.value);
      e.target.parentElement.setAttribute("data-content", "Copied")
    });
  }
}