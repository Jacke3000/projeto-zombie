function btnClique(){
    var resposta = prompt("Escolha a opção 1 ou 2!");


    function A1 (resposta){
        if(resposta == 2 ){
        alert ("Não irá se arriscar ao se afastar do grupo e tentar se salvar sozinha, vai seguir com seu trajeto pois o grupo precisa de sua ajuda. Fim");
        }
         else if(resposta==1){
        alert("Muitos perigos nas ruas até o local, mas está é uma ótima oportunidade para buscar ajuda e fugir desse pesadelo.")
        location.replace("Alanafase2.html")

        }
        else{
        alert("Responda corretamente");
        }
    }
    A1(resposta)
}