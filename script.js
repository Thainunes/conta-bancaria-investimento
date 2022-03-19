var cliente = {
    nome: "Manoel",
    login: "manoeljs",
    senha: "1234",
    conta: "AC58",
    saldo: 5000,
    tipoDeConta: "poupancaPlus"
};

var tipoDeConta = {
    poupanca: "poupanca",
    poupancaPlus: "poupancaPlus",
    fundosDeRendaFixa: "fundosDeRendaFixa"
}

var addDinheiro = function (valor) {
    cliente.saldo = cliente.saldo + valor;
}

var removerDinheiro = function (valor) {
    cliente.saldo = cliente.saldo - valor;
}

var consultarSaldo = function () {
    console.log("SALDO: " + cliente.saldo);
}

var consultarCliente = function () {
    console.log("Nome: " + cliente.nome);
    console.log("Login: " + cliente.login);
    console.log("Senha " + cliente.senha);
    console.log("Conta: " + cliente.conta);
    console.log("Saldo: " + cliente.saldo);
    console.log("Tipo de Conta: " + cliente.tipoDeConta);
}

function investimento() {
    if (cliente.tipoDeConta === 'poupanca') {
        cliente.saldo = cliente.saldo * 0.015 + cliente.saldo;
        console.log("Saldo com Investimento: " + cliente.saldo)
    } else if (cliente.tipoDeConta === 'poupancaPlus') {
        cliente.saldo = cliente.saldo * 0.02 + cliente.saldo;
        console.log("Saldo com Investimento: " + cliente.saldo)
    } else {
        cliente.saldo = cliente.saldo * 0.04 + cliente.saldo;
        console.log("Saldo com Investimento: " + cliente.saldo)
    }
}

function jurosDeInvestimento() {
    if (cliente.tipoDeConta === 'poupanca') {
        cliente.saldo = cliente.saldo * 0.015;
        console.log("Juros do Investimento: " + cliente.saldo)
    } else if (cliente.tipoDeConta === 'poupancaPlus') {
        cliente.saldo = cliente.saldo * 0.02;
        console.log("Juros do Investimento: " + cliente.saldo)
    } else {
        cliente.saldo = cliente.saldo * 0.04;
        console.log("Juros do Investimento: " + cliente.saldo)
    }
}

consultarCliente();
investimento();
jurosDeInvestimento();
