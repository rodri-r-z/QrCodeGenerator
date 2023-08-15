function Render() {
    const value = document.querySelector("#qrInput").value;
    if (value.length === 0) return;
    document.querySelector("#qrResult").innerHTML = "";
    new QRCode(document.querySelector("#qrResult"), {
        text: value,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

document.querySelector("#qrInput").addEventListener("input", Render);
Render();