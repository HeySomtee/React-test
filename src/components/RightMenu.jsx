import React from "react";

const RightMenu = () => {
    return(
        <div id="filterPanel" className="right-main">
            <h4 onClick={() => showLess()}>close</h4>
            <br /> <br />

            <div className="item-div">
                <span>Item</span> 
                <br />
                <input id="filter-search-panel" placeholder="search by Item ID eg: 08100041" type="text" />
            </div>

            <div className="right-sub">
                <div>Type <span></span>
                    <div><input type="checkbox" id="selectAll" /> Select All</div>
                    <div><input type="checkbox" id="cao-items" /> CAO</div>
                    <div><input type="checkbox" id="edf-items" /> EDF</div>
                    <div><input type="checkbox" id="" /> SFO</div>
                </div>
<br />
                <div>Category <span></span>
                    {/* <div><input type="checkbox" id="" /> 12-fruit</div> */}
                </div>
            </div>
        </div>
    )
}

function showLess(params) {
    document.getElementById('filterPanel').style.display = "none"
}

export default RightMenu