import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuthContext } from '../Firebase/context'

const initialState = {
  username:'',
  email: '',
  passwordOne: '',
  passwordTwo:'',
  error:null
};

function SignUp({ location }) {
  const [user, setUser] = useState({...initialState})

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { signUp } = useAuthContext()

  const onChangeInput = evt => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    setError('')
    setLoading(true)
    signUp(user.email, user.passwordOne)
      .then( authUser => {
        setError('')
        setUser({...initialState})
        history.push('/checkout')
        console.log(authUser)

      }).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
              setError('Ya existe una cuenta asociada con ese email.')
              break;
          case 'auth/invalid-email':
              setError('Email no válido.')
              break;
          case 'auth/weak-password':
              setError('Su contraseña debe tener como mínimo 6 caracteres.')
              break;
          default:
              setError(error.message)
              break;
      }
      })
    setLoading(false)

    
  };
  const isInvalid = user.passwordOne !== user.passwordTwo || 
    user.passwordOne === '' || 
    user.email === '' || 
    user.username === ''
  return (
    <>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ marginRight: 4 }}>Nombre</label>
          <input
            name="username"
            type="text"
            value={user.usernombre}
            onChange={onChangeInput}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ marginRight: 4 }}>Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={onChangeInput}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ marginRight: 4 }}>Password</label>
          <input
            name="passwordOne"
            type="password"
            value={user.passwordOne}
            onChange={onChangeInput}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ marginRight: 4 }}>Password</label>
          <input
            name="passwordTwo"
            type="password"
            value={user.passwordTwo}
            onChange={onChangeInput}
          />
        </div>
        <button disabled={isInvalid} type="submit">Registrarse</button>
        {error && <p>{error.message}</p>}
        {loading && <p>cargando</p>}
      </form>
      <div className="w-100 text-center mt-2">
        ¿Tienes una cuenta? <Link to={{pathname: "/signin", state: { fromCart: location?.state?.fromCart ? true : false }}} style={{color: "blue"}}>Ingresar</Link>
      </div>
    </>
  );
}
export default SignUp
export const SignUpLink = () => (
  <p>¿No tienes una cuenta? <Link to="/signup">Sign Up</Link></p>
)
