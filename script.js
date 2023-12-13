$('#hidden').hide();
$('#product_not_found').hide();






$("#foodInput").typePlaceholder({
  speed: 100,
  delay: 2000,
  keywords: [
    "Yesterday I ate 25g nutella and 400g pizza",
    "Doritos",
    "250g Beef",
    "1kg potatoes"
  ],
});

function updateTableOfContent(result){
        $('#result').empty()

        let totalGrams = 0;
        let totalCalories = 0;
        let totalFat = 0;
        let totalColesterol = 0;
        let totalSodium = 0;
        let totalCarbs = 0;
        let totalFiber = 0;
        let totalSugar = 0;
        let totalProtein = 0;
        
        result.items.forEach(element => {
            const servingSize = parseFloat(element.serving_size_g);
            const calories = parseFloat(element.calories);
            const fat = parseFloat(element.fat_total_g);
            const cholesterol = parseFloat(element.cholesterol_mg);
            const sodium = parseFloat(element.sodium_mg);
            const carbs = parseFloat(element.carbohydrates_total_g);
            const fiber = parseFloat(element.fiber_g);
            const sugar = parseFloat(element.sugar_g);
            const protein = parseFloat(element.protein_g);
        
            totalGrams += servingSize;
            totalCalories += calories;
            totalFat += fat;
            totalColesterol += cholesterol;
            totalSodium += sodium;
            totalCarbs += carbs;
            totalFiber += fiber;
            totalSugar += sugar;
            totalProtein += protein;
        });

        result.items.forEach(element => {
            $('#result').append(
                '<tr>' +
            '<td>' + element.name + '</td>' +
            '<td>' + element.serving_size_g + '</td>' +
            '<td>' + element.calories + '</td>' +
            '<td>' + element.fat_total_g + '</td>' +
            '<td>' + element.fat_saturated_g + '</td>' +
            '<td>' + element.cholesterol_mg + '</td>' +
            '<td>' + element.sodium_mg + '</td>' +
            '<td>' + element.carbohydrates_total_g + '</td>' +
            '<td>' + element.fiber_g + '</td>' +
            '<td>' + element.sugar_g + '</td>' +
            '<td>' + element.protein_g + '</td>' +
            '</tr>'
            );

            google.charts.load('current', {'packages':['corechart']});

            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
            
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Calories', totalCalories],
              ['Fat', totalFat],
              ['Cholesterol', totalColesterol],
              ['Sodium', totalSodium],
              ['Carbohydrates', totalCarbs],
              ['Fiber', totalFiber],
              ['Sugar', totalSugar],
              ['Protein', totalProtein],
            ]);
            
          var options = {};
            
            
          var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
          chart.draw(data, options)

          
          
        }
            
        });
    };
        









