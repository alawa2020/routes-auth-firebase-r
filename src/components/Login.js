import React, { useState } from 'react';
import {auth} from '../FirebaseConfig'
import { useHistory } from 'react-router';

const Login = () => {
    //useState
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgError, setMsgError] = useState(null);

    //
    const historial = useHistory();

    //onChange forms
    const handlerInputEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlerInputPass = (e) => {
        setPass(e.target.value);
    }

    //onClick buttons
    const registerUser = (e) => {
        if(email.trim().length === 0){
            setMsgError('Ningún email ingresado.');
            return;
        }
        if(pass.trim().length === 0){
            setMsgError('Ninguna contraseña ingresada.');
            return;
        }

        auth.createUserWithEmailAndPassword(email, pass)
            .then( res => {
                setMsgError(null)
                alert('¡Registro exitoso! \n Ya puede iniciar sesión.')
            })
            .catch( err => {
                console.log(err);
                if(err.code == 'auth/invalid-email') setMsgError('Email inválido.');
                if(err.code == 'auth/weak-password') setMsgError('Contraseña débil.');
                if(err.code == 'auth/email-already-in-use') setMsgError('Email ya registrado.');
                
            })
    }

    const loginUser = (e) => {
        if(email.trim().length === 0){
            setMsgError('Ningún email ingresado.');
            return;
        }
        if(pass.trim().length === 0){
            setMsgError('Ninguna contraseña ingresada.');
            return;
        }

        auth.signInWithEmailAndPassword(email, pass)
            .then( res => {
                alert('¡Inicio de sesión exitoso!');
                historial.push('/');
            })
            .catch(err => {
                if(err.code=='auth/invalid-email'){
                    setMsgError('email inválido.')
                }
                if(err.code=='auth/user-not-found'){
                    setMsgError('Usuario no registrado.')
                }
                if(err.code=='auth/wrong-password'){
                    setMsgError('Contraseña incorrecta.')
                }
            })

        console.log('Iniciado sesion')
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-2"></div>
                    <div className="col-8 ">

                        <form>
                            <input
                                className="form-control mt-3"
                                type="email"
                                placeholder="Ingrese su correo"
                                value={email}
                                onChange={ handlerInputEmail}
                            />

                            <input
                                className="form-control mt-3"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={pass}
                                onChange={handlerInputPass}
                            />

                            <div className="d-grid gap-2">

                                <button
                                    className="btn btn-success mt-3"
                                    type="button"
                                    onClick={loginUser}
                                >
                                    Iniciar Sesión
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={registerUser}
                                >
                                    Registrar
                                </button>
                            </div>

                            {
                                (msgError != null) ?
                                (
                                    <div className="alert alert-success text-center" role="alert">
                                        {msgError}
                                    </div>
                                ) : ( <span></span>)
                            }


                        </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Login
