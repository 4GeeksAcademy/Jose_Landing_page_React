import React from 'react'

const Jumbotron = (props) => {
    return (
        <>
            <div className='row bg-light py-4'>
                <div className='col-12'>
                    <h1 className='display-4 text-success'>Cafetería JoseGeek!</h1>
                    <p>
                        La mejor cafetería online que le lleva sus desayunos y meriendas directamente a casa aún calientes y deliciosos.
                    </p>
                    <button className='btn btn-primary'>Aprovecha el descuento del 25%</button>
                </div>
            </div>
            
        </>
    );
}

export default Jumbotron;