import { useState } from 'react'
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !pass) {
      alert('Todos los campos son obligatorios')
      return
    }
    if (pass.length < 6) {
      alert('Debe tener al menos 6 caracteres la contraseña')
      return
    }
    alert('Haz iniciado sesión')
  }
  return (
    <>
      <form className='d-flex flex-column w-50 m-auto my-5' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label className='form-label'>Email</label>
        <br />
        <input name='Email' placeholder='Ingresa tu email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <br />
        <label className=''>Password</label>
        <br />

        <input type='password' name='pass' value={pass} placeholder='Ingresa la contraseña' onChange={(e) => { setPass(e.target.value) }} /> <br />
        <button className='btn btn-primary w-25' type='submit'>Enviar</button>
      </form>
    </>
  )
}
export default LoginPage
