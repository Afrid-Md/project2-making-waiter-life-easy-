function savetoServer(event){
    event.preventDefault();

    const price =document.getElementById("price").value;
    const dish = document.getElementById("dish").value;
    const table = document.getElementById("table").value;

    const order ={
        expenseamount:price,
        description:dish,
        category:table
    }

    axios.post("https://crudcrud.com/api/4d644f31668d423f826fcda274545260/orders",order)
    .then((response) =>{
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })
    showOrderOnscreen(order);
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/4d644f31668d423f826fcda274545260/orders")
    .then((response)=>{

        
        for(var i=0;i<response.data.length;i++){
            showOrderOnscreen(response.data[i]);
        }
    })
    .catch((error) =>{
        console.log(error);
    })
})

function showOrderOnscreen(order){

    if(order.category === 'Table_1'){
        const parentNode=document.getElementById("table1");
        const childHTML=`<li id=${order._id}> ${order.expenseamount}-${order.description}-${order.category}
                            <button onClick=deleteOrder('${order._id}')>Delete</button>
                        </li>`

                parentNode.innerHTML=parentNode.innerHTML+childHTML;
         

    }
    if(order.category === 'Table_2'){
        const parentNode=document.getElementById("table2");
        const childHTML=`<li id=${order._id}> ${order.expenseamount}-${order.description}-${order.category}
                            <button onClick=deleteOrder('${order._id}')>Delete</button>
                        </li>`

                parentNode.innerHTML=parentNode.innerHTML+childHTML;
              
    }

    if(order.category === 'Table_3'){
        const parentNode=document.getElementById("table3");
        const childHTML=`<li id=${order._id}> ${order.expenseamount}-${order.description}-${order.category}
                            <button onClick=deleteOrder('${order._id}')>Delete</button>
                        </li>`

                parentNode.innerHTML=parentNode.innerHTML+childHTML;
            
    }
       
}




function deleteOrder(orderId){
        axios.delete(`https://crudcrud.com/api/4d644f31668d423f826fcda274545260/orders/${orderId}`)
        .then((response)=>{
           console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
}


