document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById("language");

    window.translations = {
        "0": {
            resultPlaceholder: "Insert the number of stacks",
            calculateBtn: "Calculate",
            resultText: "You need ",
            doubleChest: " double chests",
            shulkerName: " Shulkers",
            remain: " slots remaining",
            decimalText: "The last shulker needs to have ",
            decimalText2: "The last double chest needs to have ",
            footer1: "All rights reserved to Mess on github :D",
            footer2: "Thank you for trying this, this thing is my first project after learning how to make webs",
            footer3: "I hope this helped u a lot!",
            footerLink: "Mess on GH"
        },
        "1": { // Español
            resultPlaceholder: "Inserta el número de stacks",
            calculateBtn: "Calcular",
            resultText: "Necesitas ",
            doubleChest: "cofres dobles ",
            shulkerName: " Shulkers",
            decimalText: "El último shulker debe tener ",
            decimalText2: "El ultimo cofre doble debe tener ",
            remain: " espacios restantes",
            footer1: "Todos los derechos reservados a Mess en github :D",
            footer2: "Gracias por probar esto, este es mi primer proyecto después de aprender a hacer webs",
            footer3: "¡Espero que te haya ayudado mucho!",
            footerLink: "Mess en GH"
        }
    };

    function updateLanguage(lang) {
        const t = translations[lang];

        document.getElementById("X").placeholder = t.resultPlaceholder;
        document.getElementById("btn").textContent = t.calculateBtn;

        const footer = document.querySelector("footer");
        footer.querySelectorAll("p")[0].textContent = t.footer1;
        footer.querySelectorAll("p")[1].textContent = t.footer2;
        footer.querySelectorAll("p")[2].textContent = t.footer3;
        footer.querySelector("a").textContent = t.footerLink;

        localStorage.setItem("language", lang);
    }

    const savedLang = localStorage.getItem("language") || "0";
    languageSelect.value = savedLang;
    updateLanguage(savedLang);

    languageSelect.addEventListener("change", function() {
        updateLanguage(this.value);
    });
});