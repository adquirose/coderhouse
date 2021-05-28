import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../Firebase/context'

const CurrentUser = () => {
  //Auth
  const {currentUser, signOut} = useAuthContext()

  //Location
  const history = useHistory()

  //Helpers
  const handleLogout = async () => {
      try{
        await signOut()
        history.push("/signin")
      }  catch {
        console.log("User could not log out.")
      }

  }

  return (
      <div className="text-center">
            <h5>Actualmente estás logueada/o como 
                <b>{currentUser.email}</b> 
                <Button variant="link" className="ml-3" onClick={handleLogout}>
                    Salir
                </Button> 
            </h5>
      </div>  
  )
}

export default CurrentUser