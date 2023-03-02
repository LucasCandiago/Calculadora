function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;
    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.display.value = " ";
      }

      if (el.classList.contains("btn-del")) {
        this.display.value = this.display.value.slice(0, -1);
      }

      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
      }
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
