const adviceContainer = document.querySelector('.advice');
const btn = document.querySelector('button');


async function getAdvice(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.slip)
  showAdvice(data.slip)
}

function showAdvice(data){
   let {id,advice} = data
   console.log(id,advice)
  adviceContainer.innerHTML = `
      <small>Advice # ${id}</small>
      <h3>${advice}</h3>
    `
}

getAdvice('https://api.adviceslip.com/advice/33')
btn.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() *100)
  console.log(randomNum)
  const url = `https://api.adviceslip.com/advice/${randomNum}`
  getAdvice(url);
  console.log("c")
});

const darkBtn = document.querySelector('.dark');
const lightBtn = document.querySelector('.light');
const pText = document.querySelector('.pText');
const body = document.querySelector('body');

darkBtn.addEventListener('click', () => {
  darkBtn.style.display="none"
  lightBtn.style.display="block"
  pText.innerHTML = "Light Mode"
  body.style.background = "hsl(193, 38%, 86%)"
  body.style.color = "black"
})
lightBtn.addEventListener('click', () => {
  darkBtn.style.display="block"
  lightBtn.style.display="none"
  pText.innerHTML = "Dark Mode"
  body.style.background = "hsl(218, 23%, 16%)"
  body.style.color = "hsl(193, 38%, 86%)"
})
