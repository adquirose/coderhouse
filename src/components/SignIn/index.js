// Inicio del código
import React, { useState } from 'react';
import { useAuthContext } from '../Firebase/context'
import { useHistory } from 'react-router-dom'
import { SignUpLink } from '../SignUp'

function SignIn({ location }) {
  const initialState = {
    email: '',
    password: ''
  };
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState(initialState);
  const { signIn } = useAuthContext()
  const history = useHistory()

  const onChangeInput = evt => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const onSubmit = evt => {
    evt.preventDefault()
    evt.stopPropagation()
    setError('')
    setLoading(true)
    signIn(user.email, user.password)
      .then(() => {
        setUser(initialState)
        location?.state?.fromCart ? history.push('/checkout') : history.push('/')
      }).catch( error => {
        switch (error.code) {
          case 'auth/invalid-email':
              setError("Email no válido.")    
              break;
          case 'auth/user-disabled':
              setError('Su usuario ha sido inhabilitado.')
              break;
          case 'auth/user-not-found':
              setError('El usuario no existe.')
              break;
          case 'auth/wrong-password':
              setError('Contraseña incorrecta.')
              break;
          default:
              setError(error.message)
              break;
        }
      })
    setLoading(false)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
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
            name="password"
            type="password"
            value={user.password}
            onChange={onChangeInput}
          />
        </div>
        <button type="submit">Iniciar</button>
      </form>
      {loading && <p>enviando...</p>}
      {error && <p>ha ocurrido un error {error}</p>}
      <SignUpLink />
    </>
  );
}
export default SignIn