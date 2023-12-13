function updateTableOfContent(result){
        // Clear existing table rows
        $('#result').empty()
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
              ['Calories', element.calories],
              ['Total Fat', element.fat_total_g],
              ['Cholesterol', element.cholesterol_mg],
              ['Sodium', element.sodium_mg],
              ['Carbohydrates', element.carbohydrates_total_g],
              ['Fiber', element.fiber_g],
              ['Sugar', element.sugar_g],
              ['Protein', element.protein_g],
            ]);
            
          var options = {'title':'Amount of nutrients in '+ element.name, 'width':1000,'height':500};
            
            
          var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
          chart.draw(data, options)

          
          
        }
            
        });
    };
        









