
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const result = document.getElementById('result');
const count = document.getElementById('count');
const lodaer_start = document.querySelector('.loder-item');


let counter_value;

let counter;

start.addEventListener('click', function(){

  counter_value = count.value;



  counter = setInterval(() => {
    
    result.innerHTML = counter_value;

 let width = lodaer(count.value, counter_value);

 lodaer_start.style.width = `${width}%`


 if (width >= 70 && width <= 100){
  lodaer_start.style.backgroundColor = 'green';
 }else  if (width >= 50 && width <= 70){
  lodaer_start.style.backgroundColor = 'orange';
 }else  if (width >= 40 && width <= 50){
  lodaer_start.style.backgroundColor = 'blue';
 }else  if (width < 40){
  lodaer_start.style.backgroundColor = 'red';
 }


    if(counter_value == 0){
      clearInterval(counter)
    }

    counter_value--;

  },1000);




});





stop.addEventListener('click', function(){

  clearInterval(counter);

  
});



/**
 * To Do List
 */


const todo = document.getElementById('todo');
const add = document.getElementById('add');
const list = document.getElementById('list');


add.addEventListener('click', () => {


  let list_item = document.createElement('li')

  list_item.innerText = todo.value;
  list_item.className = 'list-group-item';
  list.appendChild(list_item);

  todo.value = '';

});
