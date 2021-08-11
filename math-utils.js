
function lerp(inicio, fim, qtd) {
    return (1 - qtd) * inicio + qtd * fim
}

function inverseLerp(a, b, valor) {
    return (valor - a) / (b - a);
}

function remap(entradaMin, entradaMax, saidaMin, saidaMax, valor) {
    return inverseLerp(
        entradaMin,
        entradaMax,
        lerp(saidaMin, saidaMax, t));
}
