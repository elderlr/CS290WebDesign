//Laura Elder's attempt at Assignment 4
/*
 * A 4x4 table (including the header row)
The top row should be a header row with header cells
The 4 header cells, from left to right should say "Header 1", "Header 2" ... "Header 4
The non header cells should contain their position. The upper left cell should contain
the text "1, 1", the cell to its right "1, 2", the cell below it "2, 1" and so on.
4 directional buttons (up, down, left right)
A button labeled "Mark Cell"
When the page is loaded, the upper-left non-header cell of the table should be 
'selected'. This is denoted by it having a thicker border than the other cells. 
If you push the directional buttons, other cells should be selected instead. 
So if you press the right button, cell 1,1 should no longer be selected and 1, 2 should be selected instead.

If you are already on the top row and hit 'up' nothing should happen (you 
should not be able to move into the header cells). Likewise if you are all
the way right and hit right or all the way at the bottom and hit down.

Hitting the "Mark Cell" button should permanently change the background of 
the selected cell to yellow. This should persist even after other cells are selected or marked.
 */
function table() {
    //setting variables
    var body = document.body;
    var table = document.createElement('table');
    table.setAttribute("id", "table");
    var i = 1;
    var k = 1;
    var j = 1;
    var row = table.insertRow();
    var rowIndex = 1;//start
    var cellIndex = 0;
    //creating values
    for (i = 1; i < 5; i++) {
        // Inserting header
        var header = document.createElement("th");
        header.appendChild(document.createTextNode("Header " + i));
        row.appendChild(header);
    }
    // Inserting other cells
    for (k = 1; k < 4; k++) {
        var row = table.insertRow();
        for (j = 1; j < 5; j++) {
            var td = row.insertCell();
            td.appendChild(document.createTextNode(j + ', ' + k));
        }
    }
    //connect rows and columns to tree
    body.appendChild(table);

    //Up
    var up = document.createElement("input");
    up.type = "button";
    up.value = "Up";
    up.onclick = function () {
        var current = table.rows[rowIndex].cells[cellIndex];
        //if not out of bounds
        if (rowIndex != 1) {
            table.rows[rowIndex].cells[cellIndex].style.border = 'none';
            rowIndex = rowIndex - 1;
            current = table.rows[rowIndex].cells[cellIndex];
            current.style.border = '3px solid black';
        }
    };
    //send button to tree
    body.appendChild(up);

    //Down
    var down = document.createElement("input");
    down.type = "button";
    down.value = "Down";
    down.name = "Down";
    down.onclick = function () {
        var current = table.rows[rowIndex].cells[cellIndex];

        if (rowIndex != 3) {
            table.rows[rowIndex].cells[cellIndex].style.border = 'none';
            rowIndex = rowIndex + 1;
            current = table.rows[rowIndex].cells[cellIndex];
            current.style.border = '3px solid black';
        }
    };
    body.appendChild(down);

    //Left
    var left = document.createElement("input");
    left.type = "button";
    left.value = "Left";
    left.name = "Left";
    left.onclick = function () {
        var current = table.rows[rowIndex].cells[cellIndex];

        if (cellIndex != 0) {
            table.rows[rowIndex].cells[cellIndex].style.border = 'none';
            cellIndex = cellIndex - 1;
            current = table.rows[rowIndex].cells[cellIndex];
            current.style.border = '3px solid black';
        }
    };
    body.appendChild(left);

    //Right
    var right = document.createElement("input");
    right.type = "button";
    right.value = "Right";
    right.name = "Right";
    right.onclick = function () {
        var current = table.rows[rowIndex].cells[cellIndex];

        if (cellIndex != 3) {
            table.rows[rowIndex].cells[cellIndex].style.border = 'none';
            cellIndex = cellIndex + 1;
            current = table.rows[rowIndex].cells[cellIndex];
            current.style.border = '3px solid black';
        }
    };
    body.appendChild(right);

    // Yellow
    var yellow = document.createElement("input");
    yellow.type = "button";
    yellow.value = "Mark Cell";
    yellow.name = "Mark Cell";
    yellow.onclick = function () {
        table.rows[rowIndex].cells[cellIndex].style.backgroundColor = 'yellow';
    };
    body.appendChild(yellow);


    //set mouse
    var table = document.getElementById("table");
    table.rows[1].cells[0].style.border = '3px solid black';
}
// on loading call the function
window.onload = table();
