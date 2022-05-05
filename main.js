var palavras = ['batman', 'superman', 'wonderwoman', 'arlequina', 'joker'];
var palavra_sorteada = ''
var imprimir = []
var vida = 6
var resp_usuario = ''
var corpo = ''

var inicio = confirm('Deseja iniciar o jogo?')

if (inicio == true) {
    sortear()
} 

function sortear() {
    var num = Math.floor(Math.random() * 5)

    palavra_sorteada = palavras[num]

    tamanho(palavra_sorteada)
}

function tamanho(palavra) {
    alert(`Seu personagem tem ${palavra.length} letras`)

    numero_de_interrogacao(palavra.length, palavra);
}

function numero_de_interrogacao(num, palavra) {
    for (var i = 0; i < num; i++) {
        imprimir.push('?')
    }
    alert(imprimir.join(""));

    tentativa(imprimir, palavra);
}

var validador = ''
var letra_repetida = ''

function tentativa(imprimir, palavra) {
    
    
    while (imprimir.includes('?') == true && vida != 0) {

        resp_usuario = prompt('Digite uma letra');

        for(var i = 0; i < palavra.length; i++) {
            if(palavra.charAt(i) == resp_usuario) {
                validador = true
                imprimir[i] = resp_usuario;
            }
        }
        
        if(validador == true && resp_usuario.length == 1 && letra_repetida != resp_usuario) {
            letra_repetida = resp_usuario
            alert(imprimir.join(""));
        } else {
            alert('letra não encontrada');
            vida--
            switch(vida) {
                case 5:
                    corpo = 'O'
                    alert(corpo)
                break
                case 4:
                    corpo = 'O\n|'
                    alert(corpo)
                break
                case 3:
                    corpo = 'O\n/|'
                    alert(corpo)
                break
                case 2:
                    corpo = 'O\n/|\\'
                    alert(corpo)
                break
                case 1:
                    corpo = 'O\n/|\\\n/'
                    alert(corpo)
                break
                case 0:
                    corpo = 'O\n/|\\\n/\\'
                break
            } 
        }

        validador = false
        
    }
        if (vida > 1) {
            alert('Parabéns, você ganhou')
            location.reload()
        } else {
            alert(corpo)
            alert('Não foi dessa vez')
            location.reload()
        }
        
}