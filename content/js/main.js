document.querySelector(".input-container input").addEventListener("input", function() {
  if (!parseInt(Number([...this.value].join("")), 2)) {
    document.querySelector(".text-container p:nth-child(2)").innerText = "Você digitou algo não-binário (Somente 0 e 1).";
    document.querySelector(".content h2").innerText = "";
  }
  else {
    document.querySelector(".text-container p:nth-child(2)").innerText = "";
    document.querySelector(".content h2").innerText = parseInt(Number([...this.value].join("")), 2);
  }
})
