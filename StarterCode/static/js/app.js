// from data.js
//var tableData = data;

//Sample Data from Data.js
//data = [{
//    datetime: "1/1/2010",
//    city: "benton",
//    state: "ar",
//    country: "us",
//    shape: "circle",
//    durationMinutes: "5 mins.",
//    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//  },
//-----------------------------------------------------
// YOUR CODE HERE!
// CODE PLANNING

// 1. Use given HTML page
// 2. Import Data from data.js
// 3. Create table according to ReadMe
//     a. date/time
//     b. city
//     c. state
//     d. country
//     e. shape
//     f. comment
// 4. Use Date form ,Based on imputs, search through data
//-------------------------------------------------------

// 1. Use given HTML page
// 2. Import Data from data.js
// Given in ReadMe
var tableData = data;

//check import
console.log(tableData);
// 3. Create table according to ReadMe
//     a. date/time
//     b. city
//     c. state
//     d. country
//     e. shape
//     f. comment

//This is similar to Day 3 Activity 2 of ItJ
// Select Table [html L 52]
var ufoTable = d3.select("table");
var ufotbody = d3.select("tbody");

// L14 D3 A03

data.forEach((ufo) => {
    // Update cells text with values from array
    var row = ufotbody.append("tr");
    Object.entries(ufo).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });



});

//console.log(tableData);
// 4. Use Date form ,Based on imputs, search through data
//Create button function L 14 D3 A 8|9 
// button name on L44 in html. Fixed
var button = d3.select("#filter-btn");
button.on("click", function() {
    
    //need to clear table body data
    ufotbody.html("");
    //Selecting input element  L 40 HTML
    // class form-control id datetime
    var inputElement = d3.select("#datetime");

    //Get the value property of the input element 
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(input => input.datetime === inputValue);
    console.log(filteredData);
    
    //Repeat Initial stage for the filteredData
    filteredData.forEach((fd) => {
        // Update cells text with values from array
        var row = ufotbody.append("tr");
        Object.entries(fd).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    
    
    
    });


});