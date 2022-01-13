function btnClique(){
    var resposta = prompt("Escolha a opção 1 ou 2!");


    function B2 (resposta){
        if(resposta == 2 ){
        alert ("Andando pelas ruas mais desertas diminuíram suas possibilidades de ser atacado até chegar ao hospital e suas chances de chegar seguro aumentaram.");
        location.replace("Brunofase3.html")
        
        }
         else if(resposta==1){
        alert("Bruno com sua sagacidade consegue desviar dos zumbis sem chamar atenção ele desvia dos carros, buracos e dos corpos espalhados pelo chão das ruas, mas por um azar do destino ao se desviar de alguns zumbis ele cai e se corta com um pedaço de viga de ferro chamando atenção de todos os zumbis que estavam perto dali infelizmente não conseguiu escapar. FIM")
        location.replace("escolhapersonagem.html")
        

        }
        else{
        alert("Responda corretamente");
        }
    }
    B2(resposta)
   }