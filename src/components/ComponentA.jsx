import React from 'react';
import ComponentB from './ComponentB';
import { contact } from './models/contact.class';


const ComponentA = () => {

        const UsuarioContacto = new contact('Camilo' , 'Betancur' , 'Betancurcamilo50@gmail.com' , false);
        return (
                <div>
                        <ComponentB usuario={UsuarioContacto}/>
                </div>
        );
};



export default ComponentA;
