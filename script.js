$(document).ready(function(){
    $("button").click(function(){
        const tr = $("#anotherElement").html()
        const it = 0
        if(it === 0){
        $("#anotherElement").html( `${tr} <h2>Here is the message</h2>`)
        }
    })
})