function display(val){
    document.getElementById('result').value += va
    return val
}

function solve() {
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}
function clearScreen() {
    document.getElementById('result').value = ''
}