
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuário = document.querySelector('#Usuário')
let labelUsuário = document.querySelector('#labelUsuário')
let validUsuário = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
if(nome.value.length <= 2){
labelNome.setAttribute('style', 'color: red')
labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
nome.setAttribute('style', 'border-color: red')
validNome = false
} else {
labelNome.setAttribute('style', 'color: green')
labelNome.innerHTML = 'Nome'
nome.setAttribute('style', 'border-color: green')
validNome = true
}
})

Usuário.addEventListener('keyup', () => {
if(Usuário.value.length <= 4){
labelUsuário.setAttribute('style', 'color: red')
labelUsuário.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
Usuário.setAttribute('style', 'border-color: red')
validUsuário = false
} else {
labelUsuário.setAttribute('style', 'color: green')
labelUsuário.innerHTML = 'Usuário'
Usuário.setAttribute('style', 'border-color: green')
validUsuário = true
}
})

senha.addEventListener('keyup', () => {
if(senha.value.length <= 5){
labelSenha.setAttribute('style', 'color: red')
labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
senha.setAttribute('style', 'border-color: red')
validSenha = false
} else {
labelSenha.setAttribute('style', 'color: green')
labelSenha.innerHTML = 'Senha'
senha.setAttribute('style', 'border-color: green')
validSenha = true
}
})

confirmSenha.addEventListener('keyup', () => {
if(senha.value != confirmSenha.value){
labelConfirmSenha.setAttribute('style', 'color: red')
labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
confirmSenha.setAttribute('style', 'border-color: red')
validConfirmSenha = false
} else {
labelConfirmSenha.setAttribute('style', 'color: green')
labelConfirmSenha.innerHTML = 'Confirmar Senha'
confirmSenha.setAttribute('style', 'border-color: green')
validConfirmSenha = true
}
})

function cadastrar(){
if(validNome && validUsuário && validSenha && validConfirmSenha){
let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

listUser.push(
{
nomeCad: nome.value,
userCad: usuário.value,
senhaCad: senha.value
}
)

localStorage.setItem('listUser', JSON.stringify(listUser))

msgSuccess.setAttribute('style', 'display : block')
msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
msgError.setAttribute('style', 'display : none')
msgError.innerHTML = ''

setTimeout(()=>{
window.location.href = 'file:///d%3A/Gleyson/Soul%20Code/Desenvolvimento%20web%20III/Projeto/in%C3%ADcio.html'
}, 3000)

} else {
msgError.setAttribute('style', 'display : block')
msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
msgSuccess.innerHTML = ''
msgSuccess.setAttribute('style', 'display : none')
}

}

btn.addEventListener('click', ()=>{
let inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
inputSenha.setAttribute('type', 'text')
} else {
inputSenha.setAttribute('type', 'password')
}
})

btnConfirm.addEventListener('click', ()=>{
let inputConfirmSenha = document.querySelector('#confirmSenha')

if(inputConfirmSenha.getAttribute('type') == 'password'){
inputConfirmSenha.setAttribute('type', 'text')
} else {
inputConfirmSenha.setAttribute('type', 'password')
}
})