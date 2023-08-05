const modal = document.getElementById("modal");

function modalAc() {
  modal.style.display = "block";
}

function modalKapat() {
  modal.style.display = "none";
}

function formuGonder() {
  const ad = document.getElementById("ad").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("telefon").value;
  const uygunluk = document.getElementById("uygunluk").value;

  // Form verileri burada işlenebilir, bir sunucuya gönderilebilir veya bir veritabanına kaydedilebilir.
  console.log("Ad:", ad);
  console.log("E-posta:", email);
  console.log("Telefon:", telefon);
  console.log("Uygunluk Durumu:", uygunluk);

  modalKapat();
}
