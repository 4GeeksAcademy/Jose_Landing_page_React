import React from 'react'

const Jumbotron = (props) => {
    return (
        <>
            <div className='row bg-light py-4'>
                <div className='col-12'>
                    <h1 className='display-4 text-warning'>20% descount on pizza!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                    </p>
                    <button className='btn btn-warning'>Get discount</button>
                </div>
            </div>
            
        </>
    );
}

export default Jumbotron;