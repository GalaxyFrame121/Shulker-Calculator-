const Dtoggle = document.getElementById("Dark")

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark")
    Dtoggle.checked = true;
}

Dtoggle.addEventListener("change", function() {
    if(this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode" , "enabled");
    }
    else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled")
    }
})