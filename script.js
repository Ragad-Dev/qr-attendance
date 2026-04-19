function generateQR() {
  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: "Lecture123",
    width: 150,
    height: 150
  });
}

function markAttendance() {
  let name = document.getElementById("studentName").value;

  if (name === "") {
    alert("Enter your name");
    return;
  }

  let time = new Date().toLocaleString();

  let data = {
    name: name,
    time: time
  };

  localStorage.setItem(name, JSON.stringify(data));

  document.getElementById("result").innerText =
    "Attendance recorded for " + name;
}