let myLeads = []
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const txtInput = document.getElementById("input")
const ul_EL = document.getElementById("ulEl")

const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsLocalStorage){
  myLeads = leadsLocalStorage
  readerLeads()
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  readerLeads()
})

inputBtn.addEventListener("click", function(){
 myLeads.push(txtInput.value)
 txtInput.value = ""
 localStorage.setItem("myLeads", JSON.stringify(myLeads))
 readerLeads()
})

function readerLeads(){
 let listItmems = ""
 for (let i = 0; i < myLeads.length; i++){
   listItmems += `
     <li>

      <a a target='_blank 'href='${myLeads[i]}'>
        ${myLeads[i]}
      </a> 

     </li>`
}
   ul_EL.innerHTML = listItmems
}