let myLeads = []
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const txtInput = document.getElementById("input")
const ul_EL = document.getElementById("ulEl")
const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if(leadsLocalStorage){
  myLeads = leadsLocalStorage
  render(myLeads)
}

function render(leads){
 let listItmems = ""
 for (let i = 0; i < leads.length; i++){
   listItmems += `
     <li>

      <a a target='_blank 'href='${leads[i]}'>
        ${leads[i]}
      </a> 

     </li>`
}
   ul_EL.innerHTML = listItmems
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function(){
 myLeads.push(txtInput.value)
 txtInput.value = ""
 localStorage.setItem("myLeads", JSON.stringify(myLeads))
 render(myLeads)
})

tabBtn.addEventListener('click', function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

  })
})