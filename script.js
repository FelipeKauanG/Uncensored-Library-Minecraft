function calcularPorcentagemRolagem() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const porcentagemRolagem = (scrollTop / (documentHeight - windowHeight)) * 100


    return porcentagemRolagem
}

function lidarComRolagem() {
    const porcentagemRolagem = calcularPorcentagemRolagem();
    console.log(`Porcentagem de rolagem: ${porcentagemRolagem.toFixed(2)}%`);
}

window.addEventListener("scroll", lidarComRolagem);