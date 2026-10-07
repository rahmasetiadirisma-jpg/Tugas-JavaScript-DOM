const btnMode = document.getElementById("btn-mode");

btnMode.addEventListener("click", function () {

    document.body.classList.toggle("mode-malam");

    if (document.body.classList.contains("mode-malam")) {
        btnMode.innerText = "☀️ Mode Siang";
    } else {
        btnMode.innerText = "🌙 Mode Malam";
    }

});