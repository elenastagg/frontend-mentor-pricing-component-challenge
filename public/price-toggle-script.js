function check() {
  const basicPrice = document.getElementById("basicPrice");
  const professionalPrice = document.getElementById("professionalPrice");
  const masterPrice = document.getElementById("masterPrice");

  if (checkBox.checked == true) {
    basicPrice.innerText = "$19.99";
    professionalPrice.innerText = "$24.99";
    masterPrice.innerText = "$39.99";
  } else {
    basicPrice.innerText = "$199.99";
    professionalPrice.innerText = "$249.99";
    masterPrice.innerText = "$399.99";
  }
}

const checkBox = document.getElementById("checkBox");

checkBox.addEventListener("click", check);
