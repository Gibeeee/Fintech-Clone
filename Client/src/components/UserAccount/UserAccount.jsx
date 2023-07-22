import css from './User.module.css'

export const UserAccount = () => {
    return( 
        <>
            <div className={css.UserContainer}>
                <h1>User, Login, sing Up </h1>
                <div className={css.UserForms} >
                    <div className={css.SingUp}>
                        <h2>Hello</h2>
                        <form action="">
                            <label htmlFor="">
                                User Name:
                                <input type="text" />
                            </label>
                            <hr />
                            <label htmlFor="">
                                Email:
                                <input type="text" />
                            </label>
                            <hr />
                            <label htmlFor="">
                                Password:
                                <input type="password" />
                            </label>
                        </form>
                    </div>
                    <div className={css.LogIn}>
                        <h2>Hello</h2>
                    </div>
                    
                </div>
            </div>
        </>
    )
}