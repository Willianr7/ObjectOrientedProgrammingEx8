class Cliente{

    nome: string;
    idade: number;
    antigo: boolean;

sinopse(){
console.log(`O nome do cliente é ${Bernardo.nome}
ele tem ${Bernardo.idade} anos` )

}
}
const Bernardo = new Cliente();
Bernardo.nome = " Bernardo"
Bernardo.idade = 21;
Bernardo.antigo = true;

Bernardo.sinopse()