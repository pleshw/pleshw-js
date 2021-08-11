
function lerp(inicio, fim, qtd) {
    return (1 - qtd) * inicio + qtd * fim;
}

function inverseLerp(a, b, valor) {
    return (valor - a) / (b - a);
}

function remap(entradaMin, entradaMax, saidaMin, saidaMax, valor) {
    return lerp(saidaMin, saidaMax, inverseLerp(entradaMin, entradaMax, valor));
}
