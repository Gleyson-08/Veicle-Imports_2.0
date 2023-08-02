let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#Senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar(){
let usuario = document.querySelector('#usuario')
let userLabel = document.querySelector('#userLabel')

let Senha = document.querySelector('#Senha')
let senhaLabel = document.querySelector('#senhaLabel')

let msgError = document.querySelector('#msgError')
let listUser = []

let userValid = {
nome: '',
user: '',
senha: ''
}

listUser = JSON.parse(localStorage.getItem('listUser'))

listUser.forEach((item) => {
if(usuario.value == item.userCad && Senha.value == item.senhaCad){

userValid = {
nome: item.nomeCad,
user: item.userCad,
senha: item.senhaCad,
}

}
})

if(usuario.value == userValid.user && Senha.value == userValid.senha){
window.location.href = 'file:///D:/Gleyson/Soul%20Code/Desenvolvimento%20web%20III/Projeto/inner.html'
} else {
userLabel.setAttribute('style', 'color: red')
usuario.setAttribute('style', 'border-color: red')
senhaLabel.setAttribute('style', 'color: red')
Senha.setAttribute('style', 'border-color: red')
msgError.setAttribute('style', 'display: block')
msgError.innerHTML = 'Usuário ou senha incorretos'
usuario.focus()
}

}
  