import React, { useEffect, useState } from "react"
import Body from "./Body"
// import RightMenu from "./RightMenu"

const Table = () => {

    return(
        <div>
            <table id="mainTable">
                <thead id="tableHeader">
                   
                </thead>

                <tbody id="theTable">

                </tbody>
            </table>

        </div>
    )
}


export const table = () => {

    fetch("test.json")
    .then(response => response.json())
    .then(data => showInfo(data));
  
}

export const showInfo = (data) => {
    let info = data.Items
    // console.table(info[0]);
    let orderInfo = info.map(
        (obj) => (obj.order)
    )
        
    let typeInfo = info.map(
        (obj) => (obj.type)
    )

    let itemInfo = info.map(
        (obj) => (obj.item)
    )

    let categoryInfo = info.map(
        (obj) => (obj.category)
    )

    let descriptionInfo = info.map(
        (obj) => (obj.description)
    )
    var theTable = document.getElementById("theTable");
    var itemNumber = document.getElementById("itemNumber");
    var inputBar = document.getElementById("input-bar");
    var tableHead = document.getElementById("tableHeader");
    var filterSearchItem = document.getElementById("filter-search-panel") 
    var mesgIndex
    var caoItems = document.getElementById('cao-items')
    // var  


    var container = []
    var contCounter = 0;
    caoItems.onclick = () => {
        if (caoItems.checked === true) {
            for (let i = 0; i < info.length; i++) {
                contCounter++
                if (typeInfo[i] !== 'CAO') {
                    container.push(info[contCounter-1])
                    theTable.deleteRow(i);
                    // mesgIndex = mesgIndex-1 
                    console.log(container);
                } 
            }
        } else {
            theTable.insertRow(contCounter-1);
        }
    }

    tableHead.innerHTML = ` <tr>
                        <th>index</th>
                        <th>Order#</th>
                        <th>Type</th>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>`

    for (let i = 0; i < info.length; i++) {
        var mesg1 = orderInfo[i]
        var mesg2 = typeInfo[i]
        var mesg3 = itemInfo[i] 
        var mesg4 = descriptionInfo[i] 
        var mesg5 = categoryInfo[i] 
        var row = ""
        var row =   `<tr>
                        <td>${i+1}</td>
                        <td><a href="#">${mesg1}</a></td>
                        <td>${mesg2}</td>
                        <td>${mesg3}</td>
                        <td>${mesg4}</td>
                        <td>${mesg5}</td>
                    </tr>`           
        theTable.innerHTML += row
        itemNumber.innerHTML = `${i+1} items`;
        
    }
    
   

    inputBar.oninput = () => {
        triggerSearch();
    }

    filterSearchItem.oninput = () => {
        inputBar.value = filterSearchItem.value
        triggerSearch();
    }

    var selectAll = document.getElementById("selectAll")
    selectAll.onclick = () => {
        triggerSearch();
    }
    
    

    function triggerSearch() {
        var userSearch_1 = inputBar.value;
        var userSearch_2 = inputBar.value;
        var searchValue = inputBar.value.split("");
        var separatorIndex = searchValue.indexOf(",")
        var firstSearchParam = ""
        var secondSearchParam = ""

        if ( separatorIndex != -1 ) {
            firstSearchParam = searchValue.slice(0, separatorIndex).join("")
            secondSearchParam = searchValue.slice(separatorIndex+1).join("")
            console.log(secondSearchParam);
            userSearch_1 = firstSearchParam;
            userSearch_2 = secondSearchParam;
        }
        


        var filteredData = [];
        theTable.innerHTML = "";
        

        for (let f = 0; f < info.length; f++) {

            if ( itemInfo[f].includes(userSearch_1) || itemInfo[f].includes(userSearch_2) ) {
                filteredData.push(info[f])
                let orderInfoFil = filteredData.map(
                    (obj) => (obj.order)
                )
                let typeInfoFil = filteredData.map(
                    (obj) => (obj.type)
                )
                let itemInfoFil = filteredData.map(
                    (obj) => (obj.item)
                )

                let categoryInfoFil = filteredData.map(
                    (obj) => (obj.category)
                )

                let descriptionInfoFil = filteredData.map(
                    (obj) => (obj.description)
                )
            //    console.log(`fil Len: ${filteredData.length}`);
                var mesg11 = orderInfoFil[f]
                var mesg21 = typeInfoFil[f]
                var mesg31 = itemInfoFil[f] 
                var mesg41 =  categoryInfoFil[f]
                var mesg51 =  descriptionInfoFil[f]
                if (filteredData.length <= f) {
                    for (let fdl = 0; fdl < filteredData.length; fdl++) {
                        mesgIndex = fdl+1
                        var mesg11 = orderInfoFil[fdl]
                        var mesg21 = typeInfoFil[fdl]
                        var mesg31 = itemInfoFil[fdl] 
                        var mesg41 =  categoryInfoFil[fdl]
                        var mesg51 =  descriptionInfoFil[fdl]
                    } 
                
                } else {
                    mesgIndex = f+1
                    var mesg11 = orderInfoFil[f]
                    var mesg21 = typeInfoFil[f]
                    var mesg31 = itemInfoFil[f] 
                    var mesg41 =  categoryInfoFil[f]
                    var mesg51 =  descriptionInfoFil[f]
                }
                    

                var filteredRow =   `<tr>
                                        <td>${mesgIndex}</td>
                                        <td><a href="#">${mesg11}</a></td>
                                        <td>${mesg21}</td>
                                        <td>${mesg31}</td>
                                        <td>${mesg41}</td>
                                        <td>${mesg51}</td>
                                    </tr>`
                theTable.innerHTML += filteredRow;
                
            }

            
           

        }
    }
}



export default Table