
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

/// Precisa do math-utils.js
function scrollSuave(posicaoDestino) {
    const interval = setInterval(() => {
        const distancia = Math.abs(document.body.scrollTop - posicaoDestino);
        if (distancia > 20) {
            document.body.scrollTop = lerp(document.body.scrollTop, posicaoDestino, 0.05);
        } else {
            clearInterval(interval);
        }

        window.addEventListener('wheel', () => clearInterval(interval));
    }, 1000 / 60)
}

let intervalosBarraProgresso = new Map();
function animarBarraProgresso(posicaoDestino, idHtmlElementBarraProgresso) {
    if (intervalosBarraProgresso[idHtmlElementBarraProgresso]) {
        clearInterval(intervalosBarraProgresso[idHtmlElementBarraProgresso]);
    }

    intervalosBarraProgresso[idHtmlElementBarraProgresso] = setInterval(() => {
        const posicaoAnterior = parseFloat($('#CadastroAbaDivForcaSenha').get(0).style.width.replace('%', ''));
      
        const distancia = Math.abs(posicaoAnterior - posicaoDestino);
        if (distancia > 0.1) {
            /// Pegando a posição que a barrinha deve ficar no proximo frame pra animação ficar suavizada
            let porcentagemFrameAtual = lerp(posicaoAnterior, posicaoDestino, 0.05);

            /// Escolhendo a cor com base na porcentagem
            let classeCor = "bg-danger";
            if (porcentagemFrameAtual > 30) {
                classeCor = "bg-warning";
            }

            if (porcentagemFrameAtual > 70) {
                classeCor = "bg-info";
            }

            if (porcentagemFrameAtual > 90) {
                classeCor = "bg-success";
            }

            /// Alterando as informações
            $('#' + idHtmlElementBarraProgresso).css('width', porcentagemFrameAtual + '%');
            $('#' + idHtmlElementBarraProgresso)[0].className = "progress-bar " + classeCor;
        } else {
            clearInterval(intervalosBarraProgresso[idHtmlElementBarraProgresso]);
        }
    }, 1000 / 60)
}
