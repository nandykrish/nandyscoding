//Defining variables with const and let by selecting the DOM elements
//Define your JavaScript variables for the DOM elements that the user will interact with.

let height;
let width;
let color;

// Select color input
// Select size input
//https://api.jquery.com/submit-selector/#submit1 - reference by Udacity

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').submit(function(click) {
  click.preventDefault();
  height = $("#input_height").val();
  width = $("#input_width").val();
  makeGrid(height, width);
})
//Feature1

function makeGrid(i, j) {
    $('tr').remove();

    //Your code goes here!
    for (let x = 0; x <= i; x++) {
        $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
        for (let y = 0; y <= j; y++)
            $('#table' +x).append('<td></td>');
    }
}
