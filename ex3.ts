class Eletronico{

    produto: string;
    garantia: number;
    estoque: boolean;

sinopse(){
console.log(`The chosen electronic is a ${IPhone.produto}, 
with garantie ${IPhone.garantia} months warranty for replacement, do we have in stock? ${IPhone.estoque}` )

}
}
const IPhone = new Eletronico();
IPhone.produto = " IPhone 12 plus"
IPhone.garantia = 6;
IPhone.estoque = true;

IPhone.sinopse()