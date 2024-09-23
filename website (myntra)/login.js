document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault()

  

  let email = document.getElementById("email").value
  let pass = document.getElementById("password").value


  let obj = {
    ema: email,
    password: pass,
  }



  // aa check kare che if email present che ke ny 
  fetch(`http://localhost:3000/users?ema=${obj.ema}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      if (res.length > 0) {
        document.querySelector(".already").innerText = "Email already present"
        document.querySelector(".already").style.color = "red"
      }
      else {
        console.log(obj)
        add(obj)
      }

    })
    .catch((err) => {
      console.log(err)
    })


  function add(obj) {
    // aa data lai ne store kare che debugger.json ma
    fetch('http://localhost:3000/users', {
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
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    window.location.href="home.html"

  }
 
})



// document.getElementById("logo").addEventListener("click",()=>{
//    window.location.href="home.html"
// })


document.getElementById("log").addEventListener("click", () => {
  document.getElementById("s").style.display = "none"
  document.getElementById("l").style.display = "block"
})


document.getElementById("form1").addEventListener("submit", (e) => {
  e.preventDefault()
  var email1 = document.getElementById("em").value;
  var pass1 = document.getElementById("p").value;
  console.log(email1)
  
  fetch(`http://localhost:3000/users?ema=${email1}`)
  .then((res)=>{
    return res.json()
  })
  .then((res)=>{
    if(res[0].password==pass1)
    {
      window.location.href="home.html"
    }
    else
    {
      document.querySelector(".e1").innerText="Please enter the email"

      
    }
  })

})



