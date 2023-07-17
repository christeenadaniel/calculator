function displayData(n){
    result.value += n; 
}
function displayAnswer() {
    result.value = eval(result.value);
}
function allClear(){
    result.value = " "
}
function removeOne() {
    result.value = result.value.slice(0,-1);
}