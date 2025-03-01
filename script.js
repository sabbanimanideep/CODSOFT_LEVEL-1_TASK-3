let display=document.querySelector(".display");

function appendTodisplay(value){
    display.value+=value;
}
function cleardisplay(){
    display.value="";
}
function calculateresult(){
    try {
        display.value=eval(display.value)
    } catch (e) {
        display.value="error"
    }
}
function deletevalue(){
    display.value=display.value.toString().slice(0,-1)
}