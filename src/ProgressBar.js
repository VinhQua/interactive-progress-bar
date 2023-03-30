import { useRef } from "react"

const ProgressBar =(props)=>{
        const bar = document.querySelector('.progress-bar');
        const percentageWidth = (bar.clientWidth/100)*props.userInput
        const value = props.userInput || 0;
    return(
        <div  className="progress-bar">
            <div className="progress-fill" style={{width:percentageWidth}}>
                <span className="progress-text">{value}%</span>
            </div>
        </div>
    )
} 
export default ProgressBar