let sliderElement = document.querySelector("#slider"); let button Element = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");

let password = document.querySelector("#password"); let containerPassword document.querySelector("#container-password"); =

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891";

sizePassword.innerHTML = sliderElement.value; slider.oninput = function() {

sizePassword.innerHTML = this.value;

}

scrip.js

let novaSenha = ";

function generatePassword(){

let pass = ";

for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ pass += charset.charAt(Math.floor(Math.random() * n));

}

containerPassword.classList.remove("hide"); password.innerHTML = pass;

console.log(pass)

novaSenha = pass;

}

function copyPassword(
  
  {alert("Senha copiada com sucesso!") navigator.clipboard.writeText(novaSenha);

                       }
