
function table(){
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value

    // console.log(num1.value)
    // console.log(num2.value)

    for (var i = 1 ;i<= num2;i++){
        console.log(num1 + " * " + i + " = " + i*num2)

}
}