/**
 * myTable is constant for the pixelCanvas grid
 * @type
 */

const myTable = document.getElementById('pixelCanvas');

/**
 * This function defines the event that happens in reponse on clicking any table cell
 * @param  {click} evt [target is the td node Element]
 * @return background color for myTable TD.
 */

function respondToTheClick(evt) {
    let backgroundcolor = document.getElementById('colorPicker').value;
    if (evt.target.nodeName === 'TD') {
      evt.target.style.backgroundColor = backgroundcolor;
      //console.log('A par: ' + evt.target.innerHTML);
    }

}


/**This function cleans the table for new input
 *
 */
function cleanTable(event) {
    myTable.innerHTML = '';
}

/**
 * makeGrid This function create the grid pixelCanvas
 * @param  {height and width Variable}
 * @return {event}  appends tr to myTable
 * and appends td to tr element
 */
function makeGrid(event) {
    cleanTable();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    for (let i = 1; i <= height; i++) {
        let newTr = document.createElement('tr');
        for (let j = 1; j <= width; j++) {
            let newTd = document.createElement('td');
            //newTd.textContent = j;
            newTr.appendChild(newTd);

        }
        myTable.appendChild(newTr);
    }
    event.preventDefault();
}

document.body.appendChild(myTable);

/**
 * Variable that identifies form where the submit button is present]
 * sizePicker is the form id, where our submit button is called
 *  Function call for myTable addEventListener.
 *  */
let sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid, true);
myTable.addEventListener('click', respondToTheClick);
