const memo = {}

const dragStart = (e) => {
  memo.src = e.target.src.split('5500/').pop()
}

const dropZone = (e) => {
  console.log("Hello")
  console.log(e)
  const img = document.createElement('img')
  img.src = memo.src;
  e.target.appendChild(img)
}

const tds = document.querySelectorAll('td')

tds.forEach(tr => tr.addEventListener(
  "dragover",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
));
tds.forEach(tr => tr.addEventListener('drop', dropZone));














document.getElementById('start').addEventListener('dragstart', dragStart)