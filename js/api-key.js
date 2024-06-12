require('dotenv').config(); // Load dotenv if using Node.js and dotenv
const $ = require('jquery');
$(document).ready(function(){
    $('#getNutritionBtn').on('click', function(){
        var query = $('#foodInput').val();
        var apiKey = process.env.API_KEY; // Retrieve API key from environment variable

        // Construct the API URL properly
        var apiUrl = 'https://api.example.com/endpoint?key='+ query;

        $.ajax({
            method: 'GET',
            url: apiUrl,
            headers: {'X-Api-Key': apiKey },
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
