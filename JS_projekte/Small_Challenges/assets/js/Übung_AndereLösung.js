// Die variable:
var messageElement = document.getElementById('message')
var isSubmited = false


function nameInputChange(ob) {
    document.getElementById('display-current-name').innerHTML = ob.value
}

document.getElementById('submit-btn').addEventListener('click', function () {
    if (!isSubmited) {
        isSubmited = true
        messageElement.removeChild(messageElement.firstChild)
        // oder: messageElement.innerHTML = ''
    }
    let elementValue = document.getElementById('name-input').value
    let textNode = document.createTextNode(elementValue)
    document.getElementById('message').appendChild(textNode)
    let brElement = document.createElement('br')
    document.getElementById('message').appendChild(brElement)


})


messageElement.addEventListener('mouseover', function () {
    isSubmited ? this.style.backgroundColor = 'green'
        : this.style.backgroundColor = 'red'
})
messageElement.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white'
})