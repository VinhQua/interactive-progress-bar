import { useRef } from "react"

const ProgressBar =(props)=>{
        const value = props.userInput || 0;
    return(
        <div  className="progress-bar">
            <div className="progress-fill" style={{width:`${value}%`}}>
                <span className="progress-text">{value}%</span>
            </div>
        </div>
    )
} 
export default ProgressBar