const objs = [
    {
    name: "Jao",
    idade: 27,
    endereço: "Rua Lima Peligrino Odon",
    esperienciaProfissional: {
        cargo: "Programador",
        empresa: "Google",
        tempo: 7,
        salario: 4670,
        cidade: "São Paulo",
    }
},
{
    name: "Carlo",
    idade: 20,
    endereço: "Rua José Cardo Morfo Freitas",
    esperienciaProfissional: {
        cargo: "React",
        empresa: "FireFox",
        tempo: 4,
        salario: 2120,
        cidade: "Maranhão",
    }
}
]

const convertJson = JSON.stringify(objs)
const convertJsonInObjectJs = JSON.parse(convertJson)

console.log(convertJson)
console.log(convertJsonInObjectJs)