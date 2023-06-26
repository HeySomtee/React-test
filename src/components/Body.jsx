import React, { Component } from 'react'
import BodyPrompt from './BodyPrompt';
import Table from './Table';


export class Body extends Component {
 
  render() {

    const btnStyle = {
        padding: '10px 15px', 
        border: "2px solid #c8d9f5"  
    };

    return (
      
      <div>
        <div className='main-body'>
            <header>
                <ul>
                    <li>Home </li>
                    {/* <li>OC </li>
                    <li>Item search</li> */}
                </ul>
                <div className='sub-header'>
                    <div className='menu-text'>
                        <h2>Item search</h2>
                        <span id='itemNumber'>0 items</span>
                    </div>

                    <div className='menu-icons'>
                        <input id='input-bar' type="text" placeholder='search by item#, order#' />
                        <div style={btnStyle}>+</div>
                        <div onClick={() => showw()} id='filter' style={btnStyle}>F</div>
                    </div>
                </div>
            </header>

            <Table/>
            <BodyPrompt/>
            
        </div>
      </div>
    )
  }
}

function showw(params) {
  document.getElementById('filterPanel').style.display = "block"
}

export default Body