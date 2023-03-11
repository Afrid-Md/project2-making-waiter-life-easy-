
function savetoServer(event){

    const price = event.target.price.value
    const dish = event.target.dish.value
    const table = event.target.table.value

    const obj ={
        price,
        dish,
        table
    }
    axios.post("https://crudcrud.com/api/34a9703f9426453e82b8d82e64d4d667/Orders",obj)
    .then((response) => {
        showItemOnScreen(response.data)
        //console.log(response)
    }).catch(err => {
        document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
    })
}

// dom load
window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/34a9703f9426453e82b8d82e64d4d667/Orders")
    .then((response) =>{
      console.log(response)

      for(var i =0; i< response.data.length;i++){
       showItemOnScreen(response.data[i])
      }
    }).catch((err) => console.log(err))

  })

  
  
function showItemOnScreen(obj){

  if(obj.table == document.getElementById('table1').id){
    var parentElement = document.getElementById('listofitems1')
       var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteItem1('${obj._id}')>Delete</button></li>` 


    parentElement.innerHTML = parentElement.innerHTML +childElement

  }
  else if(obj.table == document.getElementById('table2').id){
    var parentElement = document.getElementById('listofitems2')
    var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteItem2('${obj._id}')>Delete</button></li>` 


    parentElement.innerHTML = parentElement.innerHTML +childElement

  }  
  else{
    var parentElement = document.getElementById('listofitems3')
    var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteItem3('${obj._id}')>Delete</button></li>` 


    parentElement.innerHTML = parentElement.innerHTML +childElement

    }
}


function deleteItem1 (objId){
    axios.delete(`https://crudcrud.com/api/34a9703f9426453e82b8d82e64d4d667/Orders/${objId}`)
    .then((response)=>{
      removeItemfromScreen1(objId)
    }).catch((err) => {   
                  console.log(err)
   })
}

function deleteItem2 (objId){
  axios.delete(`https://crudcrud.com/api/34a9703f9426453e82b8d82e64d4d667/Orders/${objId}`)
  .then((response)=>{
    removeItemfromScreen2(objId)
  }).catch((err) => {   
                console.log(err)
 })
}

function deleteItem3 (objId){
  axios.delete(`https://crudcrud.com/api/34a9703f9426453e82b8d82e64d4d667/Orders/${objId}`)
  .then((response)=>{
    removeItemfromScreen3(objId)
  }).catch((err) => {   
                console.log(err)
 })
}


function removeItemfromScreen1(objId){
    const parentElement= document.getElementById('listofitems1')
    const childNodeTobeDeleted = document.getElementById(objId)
  if(childNodeTobeDeleted){
        parentElement.removeChild(childNodeTobeDeleted)
    }  
    
}

function removeItemfromScreen2(objId){
    const parentElement= document.getElementById('listofitems2')
    const childNodeTobeDeleted = document.getElementById(objId)
    if(childNodeTobeDeleted){
          parentElement.removeChild(childNodeTobeDeleted)
        }  
      
}

function removeItemfromScreen3(objId){
        const parentElement= document.getElementById('listofitems3')
        const childNodeTobeDeleted = document.getElementById(objId)
        if(childNodeTobeDeleted){
            parentElement.removeChild(childNodeTobeDeleted)
          }  
        
        }




