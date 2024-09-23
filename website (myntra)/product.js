fetch("http://localhost:3000/product")
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        
        document.getElementById("mainbox").innerHTML = add(res)
    })
    .catch((err) => {
        console.log(err);

    })

function add(add) {
    return add.map((el, i) => {
        return `   
    <div class="box mt-3 d-flex  align-items-start justify-content-evenly flex-wrap " style="width: 18%; height:%">
        <div  class=" w-100 d-flex  align-items-center justify-content-center" style="height=200px" >
            <img src="${el.i}" alt="${el.i}" class="w-100" h-100/> 
        </div>
        <div>
             <spam class="fw-bold">${el.t}</spam><br>
             <spam class="text-secondary" style="font-size: 14px;">Category :- ${el.s}</spam><br>
             <spam style="font-size: 14px;" class="fw-bold">Price :- ${el.p} </spam><spam style="font-size: 14px; text-decoration:line-through; " class="text-secondary" >Rs.3997</spam>

        </div>
        <button onclick="addto(${el.id})" class="w-100 mt-4" style=" background:none;"><i class="bi bi-heart"></i> Add to Cart</button>
     </div>`    

    }).join("")
}

// product mathi data lidho ne tya thi add to ma store kariyo jena mate product mathi card ma post karvu padse ne card ma fetch karavu padse 
function addto(s) {
    fetch(`http://localhost:3000/product/${s}`)
        .then((res) => {
            return res.json()
        })
        .then((res)=>{
            cd(res)  
        })
        .catch((err)=>{
            console.log(err)
        })
}

function cd(we)
{
    console.log(we);
    
    fetch('http://localhost:3000/card',{
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(we)
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    
}

