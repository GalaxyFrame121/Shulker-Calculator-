document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("language") || "0";
    const t = window.translations[lang];
    const btn = document.getElementById("btn");
    const img = document.getElementById("img");
    const result1 = document.getElementById("result");
    const result2 = document.getElementById("decimalResult");



    btn.addEventListener("click", function () {
        const num = parseFloat(document.getElementById("X").value);
        const FullShulk = Math.floor(num / 54);
        const Remaining = num % 54;

        const totalShulks = Remaining === 0 ? FullShulk : FullShulk + 1;

        if (Remaining === 0) {
            result1.textContent = t.resultText + totalShulks + " " + t.doubleChest;
            result2.textContent = "";
            img.classList.remove("hidden");
        }
        else {
            const Slots = 54 - Remaining;

            result1.textContent = t.resultText + totalShulks + " " + t.doubleChest;
            result2.textContent = t.decimalText2 + Slots + " " + t.remain;
            img.classList.remove("hidden");
        }
    })

})