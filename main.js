function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Opção não encontrada');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    listaTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
