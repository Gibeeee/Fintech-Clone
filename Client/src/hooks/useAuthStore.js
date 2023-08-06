import { useDispatch, useSelector } from "react-redux"
import { UsersApi } from "../api";
import { clearErrorMessage, onChecking, onLogIn, onLogOut } from "../store";


export const useAuthStore = ( ) => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {   
            const { data } = await UsersApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogIn({ name: data.name, uid: data.uid }) );
        } catch (error) {
            dispatch( onLogOut('Credentials don`t match') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startSingUp = async({ name, email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await UsersApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogIn({ name: data.name, uid: data.uid }) )
            console.log({ data })
        } catch (error) {
            dispatch( onLogOut( error.response.data?.msg || 'error') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10)
        }
    }


    return {
        status,
        user,
        errorMessage,

        // Methods

        startLogin,
        startSingUp,
    }
}