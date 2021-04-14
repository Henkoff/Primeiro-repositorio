const nomePetshop = "*** PETSHOP DH ***";

let pets = [
    {
      nome: "Batman",
      tipo: "cão",
      raca: "labrador",
      idade: 5,
      genero: "M",
      vacinado: false,
      servicos: ["banho", "tosa"]
    },
    {
      nome: "Costelinha",
      tipo: "cão",
      raca: "vira-lata",
      idade: 10,
      genero: "M",
      vacinado: true,
      servicos: ["banho"]
    },
    {
      nome: "Scooby Doo",
      tipo: "cão",
      raca: "Dogue Alemão",
      idade: 51,
      genero: "M",
      vacinado: false,
      servicos: ["banho", "tosa"]
    },
    {
      nome: "Tom",
      tipo: "gato",
      raca: "poodle",
      idade: 5,
      genero: "M",
      vacinado: false,
      servicos: ["corte de unha"]
    },
    {
      nome: "Ada",
      tipo: "iguana",
      raca: "albina",
      idade: 5,
      genero: "F",
      vacinado: true,
      servicos: ["banho"]
    }
  
];
  function listarPets(listaDePets) {
            let vacinado
        for (let i = 0; i < listaDePets.length; i++) {
            if(listaDePets[i].vacinado == true){
                vacinado = 'vacinado'
            }else{
                vacinado = 'nao vacinado'
            }
            console.log(` ${listaDePets[i].tipo}, ${listaDePets[i].nome}, ${listaDePets[i].idade}, ${vacinado}`)
            
        }

  };

listarPets(pets)

const vacinaPet = (pet) => {

  if(!pet.vacinado){
    pet.vacinado = true;
    console.log(` ${pet.nome} foi vacinado com sucesso \n `);

  }else
    console.log(` ${pet.nome} ja esta vacinado \n `);
}

vacinaPet(pets[0]);
vacinaPet(pets[1]);
vacinaPet(pets[2]);
vacinaPet(pets[3]);


// template string

// let nome = 'henriqu'
// let cidade = 'sao paulo'
// let pais = 'brasel'
// console.log("o meu nome é " + nome + " moro em " + cidade + " no " + pais);
// // TEMPLATE STRING:
// console.log(`o meu nome é ${nome} moro em ${cidade} no ${pais}`);
