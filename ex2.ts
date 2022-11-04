class Aviao{

    nome: string;
    tempo: number;
    apto: boolean;

sinopse(){
console.log(`The model of the plane is ${Paulistinha.nome}
the plane has ${Paulistinha.tempo} years of use, is it fit for flight? ${Paulistinha.apto}` )

}
}
const Paulistinha = new Aviao();
Paulistinha.nome = " Paulistinha"
Paulistinha.tempo = 21;
Paulistinha.apto = true;

Paulistinha.sinopse()