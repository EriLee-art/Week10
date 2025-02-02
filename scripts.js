/**
 * Week 10 Coding Assignment
 * 
 * ----------------------------------------------------------
 * 
 * Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
 * A Bootstrap styled table representing your choice of data.
 * A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
 * 
 */


/**
 *      Need to create a Form
 * 
 *  1. When user clicks submit, add a new row to the table.
 *  2. Form will create a new table row with new Table Data to coincide with it.
 *  3. Append to the table when submit button is pressed.
 */


const formButton = document.getElementById("formSubmit");

let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault();
    // variables to hold form values

    let gameName = document.getElementById("gameName").value
    let gameScore = document.getElementById("gameScore").value
    let gameDesc = document.getElementById("gameDesc").value

    // create a tr node to append to form

    let newTr = document.createElement("tr");

    let gameNameCol = document.createElement("td");
    let gameScoreCol = document.createElement("td");
    let gameDescCol = document.createElement("td");

    // create variable for number

    let gameRank = document.createElement(`td`);
    
        gameRank.innerHTML = number + 1;

        gameNameCol.innerHTML = gameName;
        gameScoreCol.innerHTML = gameScore;
        gameDescCol.innerHTML = gameDesc;


    // Appending table datas to table row
    newTr.append(gameRank);
    newTr.append(gameNameCol);
    newTr.append(gameScoreCol);
    newTr.append(gameDescCol);

    number++

    document.getElementById("tBody").appendChild(newTr);

    document.getElementById(`gameName`).value = ``;
    document.getElementById(`gameScore`).value = ``;
    document.getElementById(`gameDesc`).value = ``;
})