
function lerp(inicio, fim, qtd) {
    return (1 - qtd) * inicio + qtd * fim;
}

function inverseLerp(a, b, valor) {
    return (valor - a) / (b - a);
}

function remap(entradaMin, entradaMax, saidaMin, saidaMax, valor) {
    return lerp(saidaMin, saidaMax, inverseLerp(entradaMin, entradaMax, valor));
}

function clamp (num, min = 0, max = 100){
    return  Math.min(Math.max(num, min), max) || min 
}
