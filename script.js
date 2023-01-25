let myLeads = []
const inputBtn = document.getElementById("input-btn")
const txtInput = document.getElementById("input")
const ul_EL = document.getElementById("ulEl")

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsLocalStorage){
  myLeads = leadsLocalStorage
  readerLeads()
}

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