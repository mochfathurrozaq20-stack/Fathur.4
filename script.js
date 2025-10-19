// Tombol sapa
document.getElementById("sapaButton").addEventListener("click", function() {
    alert("Halo! Terima kasih sudah mampir ke profil saya 😄");
});

// Tombol ganti tema
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    toggleThemeBtn.textContent = 
        document.body.classList.contains("dark") ? "☀️ Tema Terang" : "🌙 Ganti Tema";
});
