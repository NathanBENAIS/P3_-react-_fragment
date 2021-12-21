import React from 'react'
import './Modal.css'
export default function Modal(props) {
    return (
        <div className='Modal'
            style={{
                tranform: props.visilbe ? 'translateY(0vh' : 'translateY(-100vh)',    
                opacity: props.visible  ?'1' : '0'     

        }}

        >
            <button onClick={props.cache}>X</button>
            <p>Un raté peut dépasser un génie par un entraînement acharné !</p>
        </div>
    )
}
