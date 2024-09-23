// arr = []
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    var image = document.getElementById("im").value;
    var title = document.getElementById("ti").value;
    var sub = document.getElementById("sub").value;
    var price = document.getElementById("pr").value;

    var obj = {
        i: image,
        t: title,
        s: sub,
        p: price,
    }

    // arr.push(obj)
    // console.log(arr);

    fetch(`http://localhost:3000/product`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res)
            as(obj)
        })
        .catch((err) => {
            console.log(err)
        })

    function as(obj) {
    var a= `<div>
        <p><strong>Title:</strong> ${obj.t}</p>
        <p><strong>Subtitle:</strong> ${obj.s}</p>
        <p><strong>Price:</strong> $${obj.p}</p>
        <img src="${obj.i}" alt="Product Image" width="100" />
     </div>`

     document.getElementById("print").innerHTML=a



    }

})



