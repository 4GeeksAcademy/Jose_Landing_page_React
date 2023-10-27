import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className="card" style={{ width: '18rem' }}>
                <img src={props.item.image}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="card-text">{props.item.text}</p>
                    <button type="button" class="btn btn-warning">See more</button>
                </div>
            </div>
        </>
    );
}

export default Card;