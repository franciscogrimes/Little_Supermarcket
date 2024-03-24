const btnConsulta = document.getElementById("consult-value");
btnConsulta.addEventListener("click", function (e) {
  e.preventDefault();
});

const btnCompra = document.getElementById("purchase");
btnCompra.addEventListener("click", function (e) {
  e.preventDefault();
});

const lista = [
  { Produto: "morango", Valor: "4.90" },
  { Produto: "kiwi", Valor: "3.85" },
  { Produto: "maracuja", Valor: "4.12" },
  { Produto: "caju", Valor: "5.90" },
  { Produto: "limão", Valor: "2.87" },
  { Produto: "banana", Valor: "7.90" },
  { Produto: "laranja", Valor: "6.90" },
  { Produto: "maca", Valor: "3.68" },
  { Produto: "melancia", Valor: "15.00" },
];

function getValue() {
  const respostaConsulta = document.getElementById("result-consult");
  let produto = document.getElementById("product").value;
  let resposta = lista.find((item) => item.Produto === produto);
  if (resposta) {
    respostaConsulta.textContent = `O valor do produto é: R$ ${resposta.Valor}`;
  } else {
    respostaConsulta.textContent = "Produto não encontrado!";
  }
}

const carrinho = [];
function sell() {
  const valorCarrinho = document.getElementById("totalPrice");
  const quantidadeProdutos = document.getElementById("product-quantity");
  const respostaConsulta = document.getElementById("result-consult");

  let produto = document.getElementById("product").value;
  let resposta = lista.find((item) => item.Produto === produto);
  if (resposta) {
    carrinho.push({
      produto: resposta.Produto,
      valor: parseFloat(resposta.Valor),
    });

    respostaConsulta.textContent = "Produto adicionado ao carrinho";
    let soma = 0;

    for (let i = 0; i < carrinho.length; i++) {
      // Entra em cada item na Lista de compra para verificar e somar os valores dos produtos
      soma += carrinho[i].valor;
    }

    quantidadeProdutos.textContent = `Itens selecionados: ${carrinho.length}`;
    valorCarrinho.textContent = `Carrinho: R$ ${soma.toFixed(2)} `;
    console.log(carrinho);

    localStorage.setItem("carrinho", JSON.stringify(carrinho)); //converte um objeto JavaScript em uma string JSON
  } else {
    respostaConsulta.textContent = "Produto não adicionado ao carrinho";
  }
}

let carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")); //Converte a resposta de JSON para JS
