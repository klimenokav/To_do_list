// Создайте кнопку "Закрыть" и добавьте ее к каждому элементу списка
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
 var txt = document.createTextNode("");
  span.className = "close";
 span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Добавить "checked" символ при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);
// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement(a) {
  var li = document.createElement("li");
  var inputValue;
  if(a) {
    inputValue = a.name;
  } else {
    inputValue = document.getElementById("myInput").value;
  }
  
 var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
   document.getElementById("myUL").appendChild(li);
  }
 document.getElementById("myInput").value = "";

 if(a.isChecked) {
    li.classList.toggle('checked');
 }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
 span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const arr = [
  {
    id: 1,
    name: "Покушать",
    date: "19-12-21",
    isChecked: false,
  },
  {
    id: 2,
    name: "Зал ",
    date: "19-12-21",
    isChecked: true,
  },
  {
    id: 3,
    name: "Выгулять собаку",
    date: "19-12-21",
    isChecked: false,
  },
  {
    id: 4,
    name: "Сходить в магазин",
    date: "19-12-21",
    isChecked: true,
  }
];

for(let i=0; i< arr.length; i++) {
  newElement(arr[i]);
}
