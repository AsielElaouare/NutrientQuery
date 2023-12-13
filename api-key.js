$(document).ready( function(){
    $('#getNutritionBtn').on('click', function(){

        var query = $('#foodInput').val();
        $.ajax({
            method: 'GET',
            url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
            headers: { 'X-Api-Key': 'zBnrNwAwtR1CueuYa6UF1Q==dXYaMZjcNs2O9EQA'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                updateTableOfContent(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });
});