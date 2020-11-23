import React from 'react'

export const LoginScreen = ( { history } ) => {


    const handleClick = () => {
        history.replace('/');
    }
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h1>Inicia Sesión</h1>
                        </div>
                        <div className="card-body">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={ handleClick }
                            >
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
