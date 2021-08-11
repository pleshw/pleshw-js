function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function primeiraLetraMaiuscula(str) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function rejeitarEspacos(htmlInputElement) {
    inputElement.addEventListener("keyup", function () {
        this.value = this.value.replace(/(\s)*/igm, "");
    })

    inputElement.addEventListener("keydown", function () {
        this.value = this.value.replace(/(\s)*/igm, "");
    });

    inputElement.addEventListener("paste", function () {
        this.value = this.value.replace(/(\s)*/igm, "");
    });
}
