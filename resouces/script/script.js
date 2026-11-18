let message = document.querySelector("#validate")
let email = "emanuel2@email.com"
let password = "emanuel123"

let form = document.querySelector("form")
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#pasword")
form.addEventListener("submit",(e) => {
e.preventDefault();
let email = inputEmail.ariaValue;
let password = inputPassword.Value;
console.log(email, password)
if (verifylogin(email, password)){
    message.innerText = "logado com sucesso"
}
else{
    console.log("erro")
}
});
function verifylogin(emailVerify, password){
    console.log(message)
    if (email === emailVerify && password){
        return true;
    }
    else if (emailVerify === undefined || emailVerify === undefined){
        message.innerTexto = "erro no email"
        return false;
    }
    else if (passwordVerify === undefined || passwordVerify === undefined) {
        message.innertext = "erro na senha"
        return false;
    }
    else if (passwordVerify === "" || emailVerify === ""){
        message.innerText = "Envio em branco"
        message.Style.color = "red"
        return false
    }
}