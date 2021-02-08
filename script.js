
let actressInfo1 = () => {
  document.getElementById("name1").innerText = "Lucy Choi, Class 2021"
}


let actressInfo2 = () => {
  document.getElementById("name2").innerText = "Noora Shuaib, Class 2022"
}

let actressInfo3 = () => {
  document.getElementById("name3").innerText = "Liyan Ibrahim, Class 2022"
}

let actressInfo4 = () => {
  document.getElementById("name4").innerText = "Maira Sheikh, Class 2021"
}

let detailsContainer = document.getElementById("button");

detailsContainer.addEventListener('click',actressInfo1)

detailsContainer.addEventListener('click',actressInfo2)

detailsContainer.addEventListener('click',actressInfo3)

detailsContainer.addEventListener('click',actressInfo4)
