



function btnClique(){
    var resposta = prompt("Escolha a opção 1 ou 2!");


    function JB1 (resposta){
        if(resposta == 2 ){
        alert ("Pelo visto o helicóptero estava lá ativo, pois dava para ouvir o barulho do motor além disso chamava muita atenção dos zumbis nesse momento ele foi derrubado por eles e puxado pelos cabelos ele tinha derrubado seu facão. Mas pasmem o rottweiler apareceu e atacando o zumbi a tempo para ele matar ele e fugir com o cachorro para o helicóptero. Fim");
        }
         else if(resposta==1){
        alert("Pelo visto o helicóptero estava lá ativo, pois dava para ouvir o barulho do motor além disso chamava muita atenção dos zumbis nesse momento ela foi derrubada por eles e puxada pelos cabelos e não conseguiu pegar seu facão para se defender.")
        location.replace("escolhapersonagem.html")

        }
        else{
        alert("Responda corretamente");
        }
    }
    JB1(resposta)
}