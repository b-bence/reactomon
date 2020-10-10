import React, {useState} from 'react'
import Catched from './Catched'
import "./Catched.css"


const CatchedDiv = () =>{

    const [currentClass, changeClass] = useState('card')

    const toggleClass = () =>{
        console.log('this')
        changeClass(currentClass === 'card' ? 'card expanded': 'card')
    }

    return (
            <div className={currentClass} onClick={toggleClass}>
                <img width="200" height="200" src="https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png" alt="new"></img>
                    <div className="text1">
                        <div className="text-content">
                            <h1 className="title">Catched'em</h1>
                            <Catched></Catched>
                        </div>
                     </div>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" strokeWidth="5"/></svg>
            </div>  
    )
}

export default CatchedDiv