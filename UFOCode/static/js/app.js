// Variables for table, filter, reset and tbody
let tableData = data;
let filter = d3.select("#filter-btn");
let reset = d3.select("#reset-btn");
let tbody = d3.select("tbody");

//Funtion to populate the table
function renderTable(ufoDatas) {
	ufoDatas.forEach(datas => {
		let row = tbody.append("tr");
		Object.values(datas).forEach(value =>{
        let cell = row.append("td");
        cell.text(value);
	});
	});	
}

// Function for Filter the table
function filterTableBotton() {
	
	d3.event.preventDefault();
	// set input variables
	let searchDate = d3.select("#datetime").property("value");
	let searchCity = d3.select("#city").property("value");
	let searchState = d3.select("#state").property("value");
	let searchCountry = d3.select("#country").property("value");
	let searchShape = d3.select("#shape").property("value");

	let filteredDatas = data;
  // filter searches matching input value variables
	if (searchDate != ""){
    	filteredDatas = filteredDatas.filter(filterdata => filterdata.datetime === searchDate);
    }
    // city, state, country and shape have to be lower case
    if (searchCity !=""){
    	filteredDatas = filteredDatas.filter(filterdata => filterdata.city.toLowerCase() === searchCity.toLowerCase());
    }
    if (searchState !=""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.state.toLowerCase() === searchState.toLowerCase());
        }
    if (searchCountry !=""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.country.toLowerCase() === searchCountry.toLowerCase());
        }
    if (searchShape !=""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.shape.toLowerCase() === searchShape.toLowerCase());
        }
    //add filtered sighting
    tbody.html(" ");
    renderTable(filteredDatas);
}

//Reset button
function resetTableBotton() {
	tbody.html(" ");
	renderTable(tableData);
}

//Get filtered Table
renderTable(tableData);
filter.on("click", filterTableBotton );
reset.on("click", resetTableBotton );