import React,{useState, Fragment} from 'react';

const Contador = () => {

    const[numero, setNumero] = useState(0);
    const aumentar =() => {
        setNumero(numero+1)
    }

    return (
        <Fragment>
            <h3 className="bg-primary d-block ">Mi primer component {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment> 
     );
}
 
export default Contador;

