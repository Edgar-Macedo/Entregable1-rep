import React, { useState } from 'react';
import Card from './Card';
import Text from './Text';
import quotes from "./quotes.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Quotebx = () => {

    const colors = ["red","lightblue","lightgreen","Lightcoral","orange","yellowgreen"]

    let randColor = Math.floor(Math.random()*colors.length)
    const [color, setColor] = useState(randColor)
    
    let randNumb = Math.floor(Math.random()*quotes.length) 
    const [index,setIndex] = useState(randNumb)

    document.body.style.background = `${colors[color]}`
    document.body.style.color = `${colors[color]}`


    const change = () => {
        randColor = Math.floor(Math.random()*colors.length)
        let indexColor = parseInt(randColor)

        setColor(indexColor)

       

        randNumb = Math.floor(Math.random()*quotes.length)

        let indexNumber = parseInt(randNumb)
        setIndex(indexNumber)
    }

    

    return (
        <Card>
            <div className="container">
                <h2> <i className="fa-solid fa-quote-left"></i> </h2>
                <Text text={quotes[index].quote}/>

            </div>
            <Text text= {quotes[index].author} id = "author"/>
            <button onClick={change} className = "nextRandQuote" style={{color :`${colors[color]}`}}> <i className="fas fa-greater-than"></i>  </button>
        </Card>
    );
};

export default Quotebx;