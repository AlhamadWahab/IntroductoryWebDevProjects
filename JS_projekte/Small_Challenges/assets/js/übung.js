// Function to print input value in an h1 element from HTML attribute
function printInputInTitle(ob, id) {
    let inpValue = ob.value
    createOb(id).innerHTML = inpValue
}

// Event listener for button click
var count = 0
createOb('Btn-send').addEventListener('click', function () {
    if (count == 0) {
        printInputInTitleSecondVariante('text-inpt', 'display-addedInput')
        mouseOVER('R', 'green') // R is id of display input container
    }
    else {
        createAnElement()
        mouseOVER('R', 'green') // R is id of display input container
    }
    count++
})

mouseOVER('R', 'red') // R is id of display input container
mouseOUT('R', 'white') // R is id of display input container

// Function to add a new child element
function createAnElement() {

    let h1Element = document.createElement('h1')
    let h1Child = document.createTextNode(createOb('text-inpt').value)
    h1Element.appendChild(h1Child)
    createOb('R').appendChild(h1Element) // R is id of display input container
}

// Function to create an element by ID
function createOb(id) {
    let ob = document.getElementById(id)
    return ob
}

// Function to print input value in an h1 element from JavaScript
function printInputInTitleSecondVariante(id, id2) {
    createOb(id2).innerHTML = createOb(id).value
}

// change the background color: 
function changeColor(color, id) {
    createOb(id).style.backgroundColor = color
}

// Function to handle mouseover events
function mouseOVER(id, color) {
    createOb(id).addEventListener('mouseover', function () {
        changeColor(color, id)
    })
}
// Function to handle mouseout events
function mouseOUT(id, color) {
    createOb(id).addEventListener('mouseout', function () {
        changeColor(color, id)
    })
}
