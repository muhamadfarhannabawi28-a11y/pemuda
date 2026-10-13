
document.addEventListener("DOMContentLoaded", function () {

  // MENU NAVIGASI MOBILE
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const terbuka = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(terbuka));
      toggle.setAttribute(
        "aria-label",
        terbuka ? "Tutup menu" : "Buka menu"
      );

      toggle.textContent = terbuka ? "✕" : "☰";
    });
  }

  // TAHUN OTOMATIS DI FOOTER
  document.querySelectorAll("[data-year]").forEach(function (elemen) {
    elemen.textContent = new Date().getFullYear();
  });

  // FORM KONTAK
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const pesan = document.getElementById("pesan").value.trim();
      const isiPesan = encodeURIComponent(
        "Nama: " + nama +
        "\nEmail: " + email +
        "\n\nPesan:\n" + pesan
      );

      window.location.href =
        "https://wa.me/6283806092028?text=" + isiPesan;
    });
  }

});
