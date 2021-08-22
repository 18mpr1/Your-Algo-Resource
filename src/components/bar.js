// Generates bars for the sorter
import './styling/bar.css';
import {useState} from "react";

function Bar({index,length,colour}){
    const [len,setLen] = useState(length);
    const barStyle = {
        height: length,
    };
    const inputStyle = {
        position: 'relative',
        top: Math.floor(length/2)-10,
        width: length,
        left: -Math.floor(length/2)+10,
        border: 'none',
    }
    const colours = [
        ['rgba(61,98,241,0.5)','rgba(61,98,241,0.2)'],
        ['rgba(255,48,79,1)','rgba(255,48,79,0.5)'],
        ['rgba(131,232,98,0.5)','rgba(131,232,90,0.2)'],
    ];
    const front_bottom ={
        transform: `translateY(${200-length}px rotateX(-90deg)`,
        backgroundColour: `${colours[colour[0]]}`, // blue
        boxShadow: `$5px 5px 50px 5px ${colours[colour[1]]}`, // darker blue
        transition: '0.3s',
    }
    const right_left = {
        height: `${length}px`,
        transform: `translateY(${200-length}px`,
        backgroundColour: `${colours[colour][0]}`,
        boxShadow: `5px 5px 50px 5px ${colours[1]}`,
        transition: '0.3s',
    }

    const handleChange = (e) =>{
        let val = e.target.value;
        if (val === ''){
            setLen(0);
        }else{
            val = parseInt(val);
            if (val > 200){
                setLen(200);
            }else{
                setLen(val);
            }
        }
        setLen(parseInt(e.target.value));
    }

    return(
        <>
            <div className="bar" style={barStyle}>
                <div className="side-top">

                </div>
                <div className="side-bottom" style={front_bottom}>

                </div>
                <div className="side-right" style={right_left}>
                    <div className="colour-bar-right-colour-bar" style={right_left}>

                    </div>
                </div>
                <div className="side-left" style={right_left}>
                    <div className="colour-bar-left-colour-bar" style={right_left}>

                    </div>
                </div>
                <div className="side-front" style={front_bottom}>
                    <input
                        type="number"
                        length={length}
                        style={inputStyle}
                        value={len}
                        onChange= {handleChange}
                    />
                </div>
            </div>
        </>

    );
}

export default Bar;