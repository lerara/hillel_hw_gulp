$('form').on('submit',function(e) {

    $.ajax('art.html',{
        success: function(response) {
            console.log(response);
        }

    });
});
