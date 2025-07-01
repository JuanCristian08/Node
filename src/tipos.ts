let nome: String = "alexandre" //tipo string
let numero: number = 10 //tipn number
let numeroDecimal: number = 100.50
let booleano: boolean = true

//arrays
let tipoArray: number[] = [1,2,3]
let arrayString: String[] = ["A", "B", "C"]

//tuplas - arrays com quantidade e tipos fixos no elemento
let tupla1: [String, number] = ["alexandre", 40];

//enum - conjunto de valores nomeados
enum Status {
    Ativo,
    Inativo,
    Pendente
}

let s: Status = Status.Ativo

enum Pedido {
    Pendente = 1,
    Recebido = 2,
    Cancelado = 9
}

let valor:any = "string" //desativa a verificação de tipo
valor = 100

let outroValor: unknown = "mensagem" //tipo de segurança que precisa ser validade antes de usar

if(typeof outroValor === "string"){
    console.log(outroValor.toUpperCase());
}

//tipo void para funções
function log(): void {
    console.log("ola mundo");
}

let arrowFunction = ():void => {

}

//funções com tipos definidos
let soma = (v1:number, v2:number): number => {
    return v1 + v2
}

soma(10, 10)

//objetos tipados
let pessoa: {nome:String; idade:number} = {
    nome: "alexandre",
    idade: 24
}
//intersection types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor: number | String){
    console.log(valor)
}

//intersection types - permite combinar tipos diferentes
type individuo = {nome: String}
type funcionario = {salario:  number}

type empregado = individuo & funcionario

let emp: empregado = {
    nome: "alexandre",
    salario : 50000
}

//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com diferentes tipos

function identidade<T>(valor: T): T {
    return valor;
}

let chamandoString = identidade<String>("teste de chamada")
let chamadoNumerio = identidade<number>(100)

//classes com tipagem
class Carro{
    modelo: String
    constructor(modelo:String){
        this.modelo = modelo
    }

    businar():void{
        console.log("bi bi");
    }
}



//instanciado o objeto
let fusca = new Carro("fusca")
fusca.businar()