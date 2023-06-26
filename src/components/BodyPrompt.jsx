import React from 'react'
import { table } from './Table'
import { showInfo } from './Table'
import Table from './Table'

const BodyPrompt = () => {
    
    const styles = {
        color: "#778FAB",
    }
    return (
       <div id='body-prompt' style={{display: " grid ", placeContent: " center ", height: " 70vh "}}>
            <div className='propmt-div'>
                <h1>What are you looking for?</h1>
                <span  style={styles}>Get ready by searching and filtering a few</span>
                <br />
                <button onClick={() => {table(); prompter()}} style={{border: "0px"}}>Fetch data</button>
                <br />
                <span style={styles} >or search for an Item</span>
            </div>
       </div>
    )
    
}

function prompter() {
    document.getElementById('body-prompt').style.display = "none"
}




export default BodyPrompt