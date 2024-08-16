const accordian=document.querySelectorAll(".accordian")
accordian.forEach(accordian=>{
  const ans=accordian.querySelector(".answer")
  const icon=accordian.querySelector(".icon")

  accordian.addEventListener("click",()=>{
    ans.classList.toggle("active")
    icon.classList.toggle("active")
  })
})
