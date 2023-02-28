
const asd=document.querySelector(".create")
const dsa=asd.getAttribute("data-bb")
asd.addEventListener("click",(eo) => {
    fetch(`/asd/${dsa}`,{method:"DELETE"})
    .then((res) => res.json())
    .then((data) => window.location.href=data.mayname)
    .catch((err) => {
        console.log(err);
    })
})



