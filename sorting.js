<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Sorting</title>
</head>
<body>

    <script>
        // Function to sort an array of numbers
        function sortNumbers(numbers) {
            // Use the Array.sort() method with a compare function
            numbers.sort(function(a, b) {
                return a - b;
            });

            // Log the sorted array to the console
            console.log('Sorted Numbers:', numbers);

            // Display the sorted numbers in an alert
            alert('Sorted Numbers: ' + numbers.join(', '));
        }

        // Example usage
        const numbersToSort = [5, 2, 8, 1, 3];
        sortNumbers(numbersToSort);
    </script>

</body>
</html>
