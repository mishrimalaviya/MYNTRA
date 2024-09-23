fetch("https://fakestoreapi.com/products")  // promise
.then((res)=>{
   return res.json()
})
.then((res)=>{
    document.querySelector(".productBox").innerHTML=view(res)
})
.catch((err)=>{
   console.log(err)
})




function view(arr){

   return arr.map((el,i)=>{
        return `
          <div class="box">
             <div>
                 <img src="${el.image}" alt="${el.title}" width="150px" height="150px"/> 
             </div>
             <div>
                  <p>${el.title}</p>
                  <p>Price :- ${el.price}</p>
                  <p>Category :- ${el.category}</p>
             </div>
             <button onclick="add(${el.id})">Add to Cart</button>
          </div>  
        
        `
    }).join("")

}

function add(id){
   fetch(`https://fakestoreapi.com/products/${id}`) 
.then((res)=>{
   return res.json()
})
.then((res)=>{
    
    posting(res)
})
.catch((err)=>{
   console.log(err)
})
}


function posting(obj){
  fetch("http://localhost:3000/product",{
   method : "POST",
   headers : {
       "Content-Type" : "application/json"
   },
   body : JSON.stringify(obj)
  })
  .then((Res)=>Res.json())
  .then((Res)=>{
   console.log(Res)
  })
  .catch((err)=>{
   console.log(err)
  })
}