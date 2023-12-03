$.ajax({
    url:'https://api.github.com/repos/bacteria700/MyFirstRepo',
    success: function(response){
        console.log(response);
    }
})