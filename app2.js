const nomePetshop = "PETSHOP1";


// //arrays [] - sai conjuntos de dados ordenados por posição
// let arrays = ['oi', 5, true, false, nomePetshop];
// console.log(arrays[2])



// let batman = { 
// //  atributo(nome, idade, raca...): valor(molly2, 10, rusqui...), 
//     nome: 'molly2',
//     idade: 10,
//     raca: "rusqui",
//     tipo: "cachorro",
//     peso: 20,
//     cor: "preto/branco",
//     vacinado: false,
//     genero: "F",
//     servicos: ["banho", "tosa"]

// }







let pets = [{

    nome: 'molly',
    idade: 2,
    raca: "salsicha",
    tipo: "cachorro",
    peso: 9,
    cor: "preto",
    vacinado: true,
    genero: "F",
    servicos: ["banho", "tosa"],
    donos: {
        nome: 'henrique',
        idade: 26,
        telefone: '971861889'
    }

},

{

    nome: 'molly2',
    idade: 10,
    raca: "rusqui",
    tipo: "cachorro",
    peso: 20,
    cor: "preto/branco",
    vacinado: false,
    genero: "F",
    servicos: ["banho", "tosa"]

}, 

{

    nome: 'tinkertrain',
    idade: 4,
    raca: "pug",
    tipo: "gato",
    peso: 5,
    cor: "preto/azul",
    vacinado: true,
    genero: "M",
    servicos: ["banho", "tosa"]

},

];


// //arrow function
// const adicionarPet = (infoPet) => {

//     pets.push(infoPet);
// }


// adicionarPet({

// nome: "Rex",
// idade: 4,
// raca: "vira-lata",
// tipo: "cachorro",
// vacinado: true,
// genero: "M",
// servicos: ['banho']
// });

// const listaPet = (inforPet) => {


    

// }





// Crie uma função chamada listarPets que imprima a lista de pets de forma mais amigável, ou seja, sem imprimir a sintaxe de código.
// Exemplo:
// Bob, 2 anos, cachorro, Pug, vacinado
// Snoopy, 4 anos, cachorro, Beagle, vacinado
// Ravena, 5 anos, gato, Siberiano, vacinado

// declarando a funcao/
function listarPets(listaDePets) { 
    for (let i = 0; i <= listaDePets.length; i++) {
        console.log(listaDePets)
     return listaDePets[i].nome + ' ' + listaDePets[i].idade + ' ' + listaDePets[i].tipo;
        
    }

    
    }
    

    // executando a funcao
    // listarPets(pets[0])
    // versao return
    console.log(listarPets(pets))


    // console.log(pets[0].nome,pets[2].nome, pets[1].nome, donos.idade)
