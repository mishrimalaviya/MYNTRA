fetch(`http://localhost:3000/card`)
    .then((res) => {
        console.log(res.status)
        console.log(res.ok)
        return res.json()
    })
    .then((res) => {
        t(res)
       document.getElementById("cardadd").innerHTML=card(res)
    })
    .catch((err) => {
        console.log(err)
    })

    function t(a){
        
        sum=0
        console.log(a)
        a.forEach((el,i)=>{
            sum=sum+ +el.p;
        })
        // console.log(sum);
        document.getElementById("to").innerHTML=sum
     
    
    }

function card(res) {
    
    return res.map((el, i) => {
   
        return ` <div class="w-100 p-2 d-flex justify-content-between align-items-center border border-1" style="height: 43% ">
            <div class="w-25 h-100 border border-1">
                <img src="${el.i}"  class="w-100 h-100">
            </div>
            <div class="w-75 border border-1 h-100 p-2">
                    <h5 style="font-size: 14px;" class=" fw-bold pt-2">${el.t}</h5>
                    <p class="text-secondary" style="font-size: 12px;">${el.s}</p>
                    <p class="text-secondary fw-bold" style="font-size: 12px;">$ ${el.p}</p>
            </div>
     </div>`
}).join("")



}