import React, {useState} from 'react';
import  ReactDOM  from 'react';

const MenuItem = (props)=>{


    return(
        <div className = "main-container">
            <div className='food-image' >
               <img src={props.img}></img>
            </div>
            <div className='food-description'>
                <div>
                    <h3>{props.title}</h3>
                    <h3>${props.price}</h3>
                </div>
                <hr/>
                <div>
                    <p>{props.desc}</p>
                </div>

            </div>

        </div>
    )

}

export default MenuItem