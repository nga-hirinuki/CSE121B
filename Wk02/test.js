/** test file open integrated terminal    node filename.js *
*/
/*let scores = [100, 72, 83, 94, 88, 87];

let aScore = scores[0];
scores[0] = 99;
scores.push(120);
scores.pop();
scores.unshift(100);
scores.splice(2, 1);

console.log(scores)*/

/*scores.forEach(function(score) {
  console.log(score);
});
/*for (let i = 0; i < scores.length; i++) {
  console.log(scores[2]);
}
/*---------------------------------------------------
/*const items = [ 1, 2, 3, 4, 5]

const includesTwo = items.includes(3)

console.log(includesTwo)
---------------------------------------------------

/*const items = [
  { name: 'bike',     price:  100},
  { name: 'car',      price:  50},
  { name: 'computer', price:  6 },
  { name: 'keyboard', price:  30 },
  { name: 'mouse',    price:  23 },
  { name: 'pad',      price:  67 },
  { name: 'phone',    price:  18 },
]

const total =  items.reduce((currentTotal, item) => { return item.price + currentTotal }, 0)
console.log(total)

/*items.forEach((item => { console.log(item.name)}))*/

/*const foundItems =  items.find((item) => { return item.name === 'car' })
console.log(foundItems)*/
/*const itemNames =  items.map((item) => {return item.name})
console.log(itemNames)*/
/*const filteredItems =  items.filter((item) => { return item.price <= 30 })
console.log(filteredItems) *//*
---------------------------------------------------

const ward =  "<strong> ${Home Ward}: </strong> ${homeWard} ";

console.log(ward);*/

const ul = document.querySelector('ul');
       const input = document.querySelector('input');
       input.focus();
       const button0 = document.querySelector('button');
       button0.addEventListener('click',()=>{
        let inputedText = input.value;
        input.value="";
        let li = document.createElement('li');
        let span = document.createElement('span');
        const button1 = document.createElement('button');
       
        span.textContent=inputedText;
        span.style.fontSize="35px";
        span.style.color="Red";
        li.appendChild(span);
        button1.textContent="delete";
        li.appendChild(button1);
       
        ul.appendChild(li);
       });