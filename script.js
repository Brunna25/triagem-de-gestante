// ALGORÍTIMO NA ÁREA DA SAÚDE (TRIAGEM NA MATERNIDADE)

// Coleta o nome da gestante
let nome_gestante = prompt("Qual o nome da gestante?");

// Exibe o nome da gestante no terminal
console.log("Nome da gestante: " + nome_gestante);

// Coleta e verifica a idade da gestante
let idade_gestante = parseInt(prompt("Qual a idade da gestante?"));
console.log("Idade da gestante: " + idade_gestante);

if (idade_gestante < 18) {
    console.log("Gestante adolescente. Encaminhar para suporte médico especializado.");
} else if (idade_gestante > 35) {
    console.log("Gestante com mais de 35 anos. Risco adicional devido à idade, monitorar com mais cuidado.");
} else {
    console.log("Idade da gestante dentro da faixa normal.");
}

// Coleta e verifica o tipo sanguíneo da gestante
let tipo_sanguineo = prompt("Qual o tipo sanguíneo da gestante? (A/B/AB/O):").toUpperCase();

if (tipo_sanguineo === "A") {
    console.log("Sangue tipo A");
} else if (tipo_sanguineo === "B") {
    console.log("Sangue tipo B");
} else if (tipo_sanguineo === "AB") {
    console.log("Sangue tipo AB");
} else if (tipo_sanguineo === "O") {
    console.log("Sangue tipo O");
} else {
    console.log("Tipo sanguíneo inválido");
}

// Coleta a quantidade de meses de gestação
let meses_gestacao = parseInt(prompt("Quantos meses de gestação?"));

// Coleta e exibe o tipo de parto previsto
let tipo_parto = prompt("Parto previsto (normal ou cesárea)?").toLowerCase();

if (tipo_parto === "normal") {
    console.log("Parto normal");
} else if (tipo_parto === "cesárea") {
    console.log("Parto cesárea");
} else {
    console.log("Tipo de parto inválido");
}

// Solicita a dilatação e garante que esteja entre 1 e 10 cm
let dilatacao = parseFloat(prompt("Quantos centímetros de dilatação a gestante está? (entre 1 e 10 cm):"));

// Verifica se a dilatação está fora do intervalo permitido
while (dilatacao < 1 || dilatacao > 10) {
    console.log("Erro: a dilatação deve estar entre 1 e 10 cm.");
    dilatacao = parseFloat(prompt("Por favor, insira novamente a dilatação (entre 1 e 10 cm):"));
}

console.log(`Dilatação registrada: ${dilatacao} cm`);

// Coleta a pressão arterial sistólica
let pressao_sistolica = parseInt(prompt("Pressão arterial:"));
console.log("Pressão arterial: " + pressao_sistolica);

// Verifica se a gravidez é de risco
let gravidez_risco = prompt("Gravidez de risco? (sim/não):").toLowerCase();
 
if (gravidez_risco === "sim") {
    console.log("É uma gravidez de risco");
} else if (gravidez_risco === "não") {
    console.log("Não é uma gravidez de risco");
} else {
    console.log("Resposta inválida para gravidez de risco");
}

// Finaliza o processo de coleta de dados
console.log("\n--- Triagem concluída ---");

