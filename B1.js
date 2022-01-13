function btnClique(){
    var resposta = prompt("Escolha a opção 1 ou 2!");


    function B1 (resposta){
        if(resposta == 2 ){
        alert ("Não irá se arriscar ao se afastar do grupo e tentar se salvar sozinho, vai seguir com seu trajeto pois o grupo precisa de sua ajuda. Fim");
        location.replace("escolhapersonagem.html")
        }
         else if(resposta==1){
        alert("Muitos perigos nas ruas até o local, mas está é uma ótima oportunidade para buscar ajuda e fugir desse pesadelo.")
        location.replace("Brunofase2.html")

        }
        else{
        alert("Responda corretamente");
        }
    }
    B1(resposta)
   }