const Usuarios = [
    {
        "Username" : "admin",
        "Password" : "admin"
    },
    {
        "Username" : "vendedor",
        "Password" : "123456"
    },
    {
        "Username" : "asistente",
        "Password" : "asd"
    }
]

let username = "asistente"
let pass = "123"

const existeUser = Usuarios.find(x=> {
    if(x.Username == username){
        return x
    }
})

if(existeUser != undefined){
    //Comparar Password
    existeUser.Password == pass ? console.log("Inicio de Sesion Exitoso")
    : console.log("Password Incorrecto")
}else{
    console.log("Usuario NO Existe")
}





