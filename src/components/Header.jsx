import React from "react";

export default function Header(){
    return(   
        <header className="header">
            <img className="header-img" src={'./images/troll-face.png'} alt="Troll face"></img>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-aside">React Course - Small Project</h4>
        </header>
    )
}