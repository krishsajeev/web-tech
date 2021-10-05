var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["year"] = document.getElementById("year").value;
    formData["dept"] = document.getElementById("dept").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("playerlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.rollNo;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.year;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.dept;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('year').value = '';
    document.getElementById('dept').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('rollNo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('year').value = selectedRow.cells[2].innerHTML;
    document.getElementById('dept').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.year;
    selectedRow.cells[3].innerHTML = formData.dept;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('playerlist').deleteRow(row.rowIndex);
        resetForm();
    }    
}