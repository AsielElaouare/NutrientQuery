$(document).ready( function(){
    $('#getNutritionBtn').on('click', function(){
        function checkReturnedItems(result){
            if(Object.keys(result.items).length >= 1){
                $('#hidden').show();
                $('#product_not_found').hide();

            }else if(Object.keys(result.items).length == 0){
                $('#hidden').hide();
                $('#product_not_found').show();
            }
        }

        var query = $('#foodInput').val();
        $.ajax({
            method: 'GET',
            url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
            headers: { 'X-Api-Key': 'zBnrNwAwtR1CueuYa6UF1Q==dXYaMZjcNs2O9EQA'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                checkReturnedItems(result);
                updateTableOfContent(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });
});