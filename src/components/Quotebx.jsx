import React, { useState } from 'react';
import Card from './Card';
import Text from './Text';
import quotes from "./quotes.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Quotebx = () => {

    const colors = ["red","lightblue","lightgreen","Lightcoral","orange","yellowgreen"]

    let randColor = Math.floor(Math.random()*colors.length)
    const [color, setColor] = useState(randColor)

    const changeColor = () => {
        let randColor = Math.floor(Math.random()*colors.length)
        let indexColor = parseInt(randColor)

        setColor(indexColor)

        document.body.style.background = `${colors[color]}`
        document.body.style.color = `${colors[color]}`

        document.getElementById("buttonColor").style.background = `${colors[color]}`
    }

    
    let randNumb = Math.floor(Math.random()*quotes.length)
    
    const [index,setIndex] = useState(randNumb)

    const changeQuote = () => {
        
        let indexNumber = parseInt(randNumb)
        setIndex(indexNumber)
    } 

    const handlerOnClick = () => {
        changeColor()
        changeQuote()
    }

    return (
        <Card>
            <div className="container">
                <h2> <i className="fa-solid fa-quote-left"></i> </h2>
                <Text text={quotes[index].quote}/>

            </div>
            <Text text= {quotes[index].author} id = "author"/>
            <button onClick={handlerOnClick} className = "nextRandQuote" id='buttonColor' > <i className="fas fa-greater-than"></i>  </button>
        </Card>
    );
};

export default Quotebx;