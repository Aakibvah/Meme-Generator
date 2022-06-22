import React from "react";
import Data from "../memesData.js"

export default function Meme(){
    // const[memeImage,setMemeImage] = React.useState("https://i.imgflip.com/3si4.jpg")
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/3si4.jpg"

    }) 

    const[allMemesImage,setAllMemesImage] = React.useState(Data)

    function getMemeImage(){
        const memesArray =allMemesImage[0].data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        const url = memesArray[randomNumber].url
        //setMemeImage(memesArray[randomNumber].url)
        setMeme(preveMeme => ({
            ...preveMeme,  randomImage: url
        }))

    }
    return(
        <main>
            <div className="form">
                <input
                    type="text" 
                    className="form-inputs" 
                    placeholder="Top Text">
                 </input>
                <input 
                    type="text" 
                    className="form-inputs" 
                    placeholder="Bottom Text">
                 </input>
                <button 
                    className="form-button"
                    onClick={getMemeImage}>
                    Get a new meme Image
                </button>
                </div>
                <img src={meme.randomImage} alt="images" className="meme-img"/>
        </main>
    )
}