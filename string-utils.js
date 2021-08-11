function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function primeiraLetraMaiuscula(str) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}
