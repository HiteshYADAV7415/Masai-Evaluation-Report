// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",display)

function display(){

    event.preventDefault()
   var image = document.querySelector("#image").value
   var student_name = document.querySelector("#name").value
   var batch = document.querySelector("#batch").value
   var dsa_scor = document.querySelector("#dsa").value
   var skillathon = document.querySelector("#cs").value
   var coding =  document.querySelector("#coding").value


    var table_row = document.createElement("tr")
    var td1 = document.createElement("td")
    var put_imag = document.createElement("img")
    put_imag.setAttribute("src",image)
    td1.append(put_imag)
    var td2 = document.createElement("td")
    td2.innerText = student_name
    var td3 = document.createElement("td")
    td3.innerText = batch
    var td4 = document.createElement("td")
    td4.innerText = dsa_scor
    var td5 = document.createElement("td")
    td5.innerText = skillathon
    var td6 = document.createElement("td")
    td6.innerText = coding
    var td7 = document.createElement("td")
     
    var percent = (Number(dsa_scor)+Number(skillathon)+Number(coding))/30*100

    td7.innerText = percent

    var td8 = document.createElement("td")

    if(percent>50)
    {
        td8.innerText = "Regular"
        td8.style.backgroundColor = "green"
    }
    else
    {
        td8.innerText = "Async"
        td8.style.backgroundColor = "red"
        
    }

    var td9 = document.createElement("td")
    td9.innerText = "Delete"
    td9.style.backgroundColor = "red"
    td9.style.cursor = "pointer"
    td9.addEventListener("click",removerow)
    
    table_row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    var tbody = document.querySelector("tbody")
    tbody.append(table_row)



}

function removerow()
{
    event.target.parentNode.remove()
}