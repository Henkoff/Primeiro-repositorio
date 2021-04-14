const moment = require('moment');
const fs =  require('fs');
const { info } = require('console');
const nomeArquivo = 'pets.json';
const nomePetshop = "*** PETSHOP DH ***";

let petsJSON = fs.readFileSync(nomeArquivo); //le o conteudo do arquivo
let arquivoPets = JSON.parse(petsJSON); // converte para JS

// console.log(pets);

// let pets = [
//     {
//       nome: "Batman",
//       tipo: "cão",
//       raca: "labrador",
//       idade: 5,
//       genero: "M",
//       vacinado: false,
//       servicos: []
//     },
//     {
//       nome: "Costelinha",
//       tipo: "cão",
//       raca: "vira-lata",
//       idade: 10,
//       genero: "M",
//       vacinado: true,
//       servicos: []
//     },
//     {
//       nome: "Scooby Doo",
//       tipo: "cão",
//       raca: "Dogue Alemão",
//       idade: 51,
//       genero: "M",
//       vacinado: true,
//       servicos: []
//     },
//     {
//       nome: "Tom",
//       tipo: "gato",
//       raca: "poodle",
//       idade: 5,
//       genero: "M",
//       vacinado: false,
//       servicos: []
//     },
//     {
//       nome: "Ada",
//       tipo: "iguana",
//       raca: "albina",
//       idade: 5,
//       genero: "F",
//       vacinado: true,
//       servicos: []
//     }
  
// ];

const atualizarJson = () => {

  let listaJson = JSON.stringify(arquivoPets);
  fs.writeFileSync(nomeArquivo, listaJson, 'utf-8'); //caminho arquivo, conteudo novo, formato

}

const listarPets = (listaDePets) => {
    let vacinado
for (let i = 0; i < listaDePets.length; i++) {

    console.log(` ${listaDePets[i].tipo}, ${listaDePets[i].nome}, ${listaDePets[i].idade}, ${vacinado}`)
    
    for (let index = 0; index < listaDePets[i].servicos.length; index++ ){

        console.log(` ${listaDePets[i].i[index].data} - ${listaDePets[i].servicos[index].nome} `);

    }
}

};

listarPets(arquivoPets.pets);

const vacinaPet = (pet) => {

    if(!pet.vacinado){
      pet.vacinado = true;
      console.log(` ${pet.nome} foi vacinado com sucesso \n `);
  
    }else
      console.log(` Ops,  ${pet.nome} ja esta vacinado \n `);
  }
  
//   vacinaPet(pets[0]);
//   vacinaPet(pets[1]);
//   vacinaPet(pets[2]);
//   vacinaPet(pets[3]);

  const campanhaVacina = (pet) => {
        let totalVacinados = 0;
        for (let i = 0; i >= pet.length; i++) {
            if (!pet[i].vacinado){
                pet.vacinado = true;
                totalVacinados++;
            }
            
        }
        console.log(` Parabens, ${totalVacinados} pets foram vacinados nessa campanha `);
        
        
         
 }
//  campanhaVacina(pets[4]);


const adicionarPet = (infoPet) => {
    arquivoPets.pets.push(infoPet);
    atualizarJson();
    console.log(`${infoPet.nome} esta cadastrado no sistema!`)
};

adicionarPet({

    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: true,
    servicos: []

});


const darBanhoPet = (pet) => {

    pet.servicos.push({

        servicos: 'corte',
        data: moment().format('DD-MM-YYYY'),


    });
    
    console.log(` ${pet.nome} esta cheiroso  `);

}

// darBanhoPet(pets[4]);


const tosarPet = (pet) => { 
pet.servicos.push({

    nome: 'tosa',
    data: moment().format("DD-MM-YYYY")

})

console.log(` ${pet.nome} esta com cabelinho na regua `)

 }

//  tosarPet(pets[0]);


 const apararUnhasPet = (pet) => {


    pet.servicos.push({

        nome: 'corte de unha',
        data: moment().format("DD-MM-YYYY")
    })

    console.log(` ${pet.nome} esta com as unhas aparadas `);

 }

//  apararUnhasPet(pets[2]);