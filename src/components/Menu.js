import React,{useState, useEffect} from 'react';
import {
    Link, useHistory
} from 'react-router-dom';
import { auth } from '../FirebaseConfig';

const Menu = () => {
    
    const [user, setUser] = useState(null);
    const historial = useHistory();

    useEffect ( () => {
        auth.onAuthStateChanged( user => {
            if(user){
                setUser(user.email);
            }
        })
    },[]);

    //functions
    const logOut = () => {
        auth.signOut();
        setUser(null);
        historial.push('/login')
    }


    //return
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-3">
                        <Link 
                            className="nav-link"
                            to="/">Home</Link>
                    </li>

                    <li className="nav-item mr-3">
                        {
                            (user)?
                            (
                            <Link 
                                className="nav-link"
                                to="/admin">Admin</Link>
                            ):
                            (<span></span>)
                        }
                        
                    </li>

                    <li className="nav-item mr-3">
                        {
                            (!user)?
                            (
                            <Link 
                                className="nav-link"
                                to="/login">Login</Link>
                            ):(<span></span>)
                        }
                    </li>
                </ul>

                {
                    (user)?
                    (
                        <button 
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={logOut}
                        >Cerrar Sesión</button>
                    ):
                    (<span></span>)
                }

            </nav>

        </div >
    )
}

export default Menu
