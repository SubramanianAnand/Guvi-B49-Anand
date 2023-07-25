var data=[]
function formSubmit(event){
    event.preventDefault();
    var form=document.getElementById("form")

    var details={}
    
    var firstName=document.getElementById("firstName")
    details.firstName=firstName.value
    
    var lastName=document.getElementById("lastName")
    details.lastName=lastName.value
    
    var address=document.getElementById("address")
    details.address=address.value
    
    var pincode=document.getElementById("pincode")
    details.pincode=pincode.value
    
    var ele = document.getElementsByName('gender');
    var gender="";        
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            gender=ele[i].value;
            break
        }
    }
    details.gender=gender
    
    ele = document.getElementsByName('food');
    var food=[]
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            food.push(ele[i].value);
        }
    }
    details.food=food.join()
    
    var state=document.getElementById("state")
    details.state=state.value

    var country=document.getElementById("country")
    details.country=country.value
    
    data.push(details)
    console.log(data)
    
    var tableDiv=document.getElementById("tableDiv");
    tableDiv.innerHTML='';
    var table = document.createElement("table");
    table.classList.add("table","table-striped");

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th1 = createNewElement("th", "FirstName");
    var th2 = createNewElement("th", "LastName");
    var th3 = createNewElement("th", "Address");
    var th4 = createNewElement("th", "Pincode");
    var th5 = createNewElement("th", "Gender");
    var th6 = createNewElement("th", "Food");
    var th7 = createNewElement("th", "State");
    var th8 = createNewElement("th", "Country");

    tr.append(th1, th2, th3,th4,th5,th6,th7,th8);
    thead.append(tr);
    console.log(data)
    var tbody=document.createElement("tbody");

    data.map((element) => {
        var tr1 = document.createElement("tr");
        var td1 = createNewElement("td", element.firstName);
        var td2 = createNewElement("td", element.lastName);
        var td3 = createNewElement("td", element.address);
        var td4 = createNewElement("td", element.pincode);
        var td5 = createNewElement("td", element.gender);
        var td6 = createNewElement("td", element.food);
        var td7 = createNewElement("td", element.state);
        var td8 = createNewElement("td", element.country);
        tr1.append(td1, td2, td3,td4,td5,td6,td7,td8);
        tbody.append(tr1)
        });
    table.append(thead,tbody)
    tableDiv.append(table)
    console.log(data.length);
    form.reset()

}

function createNewElement(tag, value = " ") {
    var ele = document.createElement(tag);
    ele.innerHTML = value;
    return ele;
  }
