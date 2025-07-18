let input_cep = document.getElementById("input_cep")
let btn_cep = document.getElementById("btn-cep")
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let regiao = document.getElementById("regiao")
let estado = document.getElementById("estado")
const buscarCep = (cep) =>{
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res)=> res.json())
        .then((data) => {
            console.log(data)

            logradouro.innerText=data.logradouro
            bairro.innerText=data.bairro
            regiao.innerText=data.regiao
            estado.innerText=data.estado
        })
        .catch((err)=>{
            alert("Foi informado um CEP errado e/ou inexistente.")
            logradouro.innerText="CEP não localizado."
            bairro.innerText="CEP não localizado."
            regiao.innerText="CEP não localizado."
            estado.innerText="CEP não localizado."
        })
}
btn_cep.addEventListener("click", function(event){
    buscarCep(input_cep.value)
    event.preventDefault()
})