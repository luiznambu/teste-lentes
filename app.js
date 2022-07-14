// lente prime -> -3 > esferico > -12 || cilindrico > -2 && -3 > esferico > -10
// lente vision -> 0 > esferico > -15 && esferico > -5
// quando disponivel prime mostrar apenas ela
// grau limite 0 ateh -15 esferico, e -6 cilindrico
// iterados de 0.25 em 0.25

submitForms = function(){
    // //variaveis esfericas
    var eEsq = parseFloat(document.getElementById('esfEsq').value);
    var eDir = parseFloat(document.getElementById('esfDir').value);

    // //variaveis cilindricas
    var cEsq = parseFloat(document.getElementById('cilEsq').value);
    var cDir = parseFloat(document.getElementById('cilDir').value);

    // calculo para olho esquerdo
    if(eEsq <= 0 && eEsq >= -15 && cEsq <= 0 && cEsq >= -6 && (eEsq + cEsq)%0.25 == 0) {
        if ((eEsq <= -3 && eEsq >= -12 && cEsq == 0) || (eEsq <= -3 && eEsq >= -10 && cEsq >= -2)) { 
            document.getElementById('res-esquerdo').innerHTML = ('Lentes Prime disponível!');
            //console.log('Lente Prime disponível para o olho esquerdo.');
        }
        else {
            document.getElementById('res-esquerdo').innerHTML = ('Lentes Vision disponível!');
            //console.log('Lente Vision disponível para o olho esquerdo.');
        }
    }
    else {
        document.getElementById('res-esquerdo').innerHTML = ('Indisponível ou inválido.');
        //console.log('Valor inserido inválido.');
    }

    //calculo para olho direito
    if(eDir <= 0 && eDir >= -15 && cDir <= 0 && cDir >= -6 && (eDir + cDir)%0.25 == 0) {
        if ((eDir <= -3 && eDir >= -12 && cDir == 0) || (eDir <= -3 && eDir >= -10 && cDir >= -2)) {
            document.getElementById('res-direito').innerHTML = ('Lentes Prime disponível!');
            //console.log('Lente Prime disponível para o olho direito.');
        }
        else {
            document.getElementById('res-direito').innerHTML = ('Lentes Vision disponível!');
           //console.log('Lente Vision disponível para o olho direito.');
        }
    }
    else {
        document.getElementById('res-direito').innerHTML = ('Indisponível ou inválido.');
        //console.log('Valor inserido inválido.');
    }
}

