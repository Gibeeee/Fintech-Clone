import { useEffect } from 'react'
import { useAuthStore, useForm } from '../../hooks'
import css from './User.module.css'
import Swal from 'sweetalert2'

const logInFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const singUpFormFields = {
    singUpName: '',
    singUpEmail: '',
    singUpPassword: '',
    singUpPassword2: '',
}

export const UserAccount = () => {

    const { startLogin, errorMessage, startSingUp } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange:onLogInInputChange } = useForm( logInFormFields );
    const { singUpEmail, singUpName, singUpPassword, singUpPassword2, onInputChange:onSingUpInputChange } = useForm( singUpFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();

        startLogin({ email: loginEmail, password: loginPassword })
    }

    const singUpSubmit = ( event ) => {
        event.preventDefault();

        if ( singUpPassword !== singUpPassword2 ) {
            Swal.fire('Error in register', 'Paswords are not the same', 'error' );
            return;
        }
        startSingUp({ name: singUpName, email: singUpEmail, password: singUpPassword })
    }

    useEffect(() => {
      if( errorMessage !== undefined ) {
        Swal.fire('Credentials Error', errorMessage, 'error')
      }
    
    }, [errorMessage])
    

    return( 
        <>
            <div className={css.UserContainer}>
                <h1>User, Login, sing Up </h1>
                <div className={css.UserForms} >
                    <div className={css.SingUp}>
                        <h2>let's Sing Up</h2>
                        <form onSubmit={ singUpSubmit } >
                            <label >
                                User:
                                <input 
                                    type="text" 
                                    name='singUpName'
                                    value={ singUpName }
                                    onChange={ onSingUpInputChange }
                                />
                            </label>
                            <hr />
                            <label >
                                Email:
                                <input 
                                    type="text" 
                                    name='singUpEmail'
                                    value={ singUpEmail }
                                    onChange={ onSingUpInputChange }
                                />
                            </label>
                            <hr />
                            <label >
                                Password:
                                <input 
                                    type="password" 
                                    name='singUpPassword'
                                    value={ singUpPassword }
                                    onChange={ onSingUpInputChange }
                                />
                            </label>
                            <hr />
                            <label >
                                Password:
                                <input 
                                    type="password"
                                    name='singUpPassword2'
                                    value={ singUpPassword2 }
                                    onChange={ onSingUpInputChange }
                                />
                            </label>
                            <button type="submit" >Sing Up</button>
                        </form>
                    </div>
                    <div className={css.LogIn}>
                        <h2>Hello, Log In</h2>
                        <form onSubmit={ loginSubmit } >
                            <label >
                                Email:
                                <input 
                                    type="text"
                                    name='loginEmail'
                                    value={ loginEmail }
                                    onChange={ onLogInInputChange }
                                    />
                            </label>
                            <hr />
                            <label >
                                Password:
                                <input 
                                    type="password" 
                                    name='loginPassword'
                                    value={ loginPassword }
                                    onChange={ onLogInInputChange }
                                />
                            </label>
                            <button type="submit" >Log in</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}