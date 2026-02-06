let gastos = JSON.parse(localStorage.getItem("gastos")) || [];

function salvar() {
  localStorage.setItem("gastos", JSON.stringify(gastos));
}

function atualizarTela() {
  const lista = document.getElementById("lista");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  gastos.forEach((gasto, index) => {
    total += gasto.valor;

    const li = document.createElement("li");
    li.innerHTML = `
      ${gasto.descricao} - R$ ${gasto.valor}
      <button onclick="removerGasto(${index})">X</button>
    `;
    lista.appendChild(li);
  });

  totalSpan.innerText = total.toFixed(2);
}

function adicionarGasto() {
  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);

  if (!descricao || valor <= 0) {
    alert("Preencha corretamente!");
    return;
  }

  gastos.push({ descricao, valor });
  salvar();
  atualizarTela();

  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
}

function removerGasto(index) {
  gastos.splice(index, 1);
  salvar();
  atualizarTela();
}

atualizarTela();
