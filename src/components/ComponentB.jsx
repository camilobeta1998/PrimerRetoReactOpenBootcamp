import {React , useState} from 'react';
import PropTypes from 'prop-types';
import { contact } from './models/contact.class';


const ComponentB = ({usuario}) => {
        const [conected, setConected] = useState(usuario.conectado);
        const CambiarConectado= () =>{
                conected===false ? setConected(true)  : setConected(false);
        }

        return (
                <div>
                        <h1>El nombre del usuario es: {usuario.nombre}</h1>
                        <h2>El apellido del usuario es: {usuario.apellido}</h2>
                        <div>
                                {
                                        conected===false ? <p>Contacto No Disponible</p> : <p>Contacto en Linea</p>
                                }
                                <button onClick={CambiarConectado} >Login</button>
                        </div>
                </div>
        );
};


ComponentB.propTypes = {
        usuario : PropTypes.instanceOf(contact)
};


export default ComponentB;
