let grey = true;
let yellow = false;
let  red= false;

$('#grey').click(function(){
    grey = true
  yellow = false
   red= false
})
$('#yellow').click(function(){
    grey = false
    yellow = true
    red = false
})
$('#red').click(function(){
    grey = false
    yellow = false
    red = true
})

$('#add').click(function () {
    let task = $('#task').val();

    if (task) {
        if (grey == true) {
            $('.taskContainer').prepend(`<div class='taskItem' style='background-color: grey;'>${task}</div>`);
        } else if (yellow == true){
            $('.taskContainer').prepend(`<div class='taskItem' style='background-color: yellow;'>${task}</div>`);
        } else if (red == true){
            $('.taskContainer').prepend(`<div class='taskItem' style='background-color: red;'>${task}</div>`);
        } else{
            alert('error')
        }
        $('#task').val('');
    }

    
    $('.taskItem').click(function () {
        $(this).css('display', 'none')
    
    })
 



})



