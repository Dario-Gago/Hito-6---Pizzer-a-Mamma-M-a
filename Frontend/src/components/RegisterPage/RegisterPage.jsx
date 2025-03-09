import { useState } from "react";

const RegisterPage = ()=>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email || !pass || !cpass) {
            alert(' Todos los campos son obligatorios (no pueden estar vacíos).');
            return;
        }
        if (pass.length < 6 ) {
            alert('El password debe tener al menos 6 caracteres.');
            return;
        }
        if (pass != cpass) {
            alert('El password y la confirmación del password deben ser iguales.');
            return
        }
        alert('Registro completo')
    }
    return(
        <form className="d-flex flex-column w-50 m-auto my-5" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label className="form-label">Email</label>
            <br />
            <input name="Email" placeholder="Ingresa tu email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
            <br />
            <label className="">Password</label>
            <br />

            <input type="password" name="pass" placeholder="Ingresa la contraseña" value={pass}  onChange={(e)=>{setPass(e.target.value)}}/> <br />
            <label >Confirm Pass</label> <br />
            <input type="password" name="pass" placeholder="Confirma la contraseña" value={cpass} onChange={(e)=>{setCpass(e.target.value)}}/> <br />

            <button className="btn btn-primary w-25" type="submit">Enviar</button>
        </form>
    )
}

export default RegisterPage;