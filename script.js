//membuat JAM PASIR - from font-awesome
function hourglass() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf251;";
  setTimeout(function() {
    a.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function() {
    a.innerHTML = "&#xf253;";
  }, 2000);
}

var cekjam = setInterval(hourglass, 3000);


//<div class="column">
var clm = document.createElement('div')
clm.setAttribute('class', 'column')
document.body.appendChild(clm)

// element of jam pasir
var divjam = document.createElement('div')
divjam.setAttribute('id', 'div1')
divjam.setAttribute('class', 'fa')
clm.appendChild(divjam)



//h2 buat to do list
var h1 = document.createElement('h1')
var isih1 = document.createTextNode('to-do List Maker:')
h1.appendChild(isih1)
clm.appendChild(h1)
console.log(h1)


// <div class="buat">
var buat = document.createElement('div')
buat.setAttribute('class', 'buat')
clm.appendChild(buat)


// <input type="text" id="myInput" placeholder="what's on ur mind?...">
var input1 = document.createElement('input')
input1.setAttribute('id', 'myInput')
input1.setAttribute('type', 'text')
input1.setAttribute('placeholder', 'whats on ur mind ? ...')
buat.appendChild(input1)

// <span onclick="Tambahlist()" class="btn">Tambah</span>
var spanadd = document.createElement('span')
spanadd.setAttribute('class', 'btn')
var isispan = document.createTextNode('Tambah')
spanadd.appendChild(isispan);
buat.appendChild(spanadd)
spanadd.addEventListener("click", Tambahlist);



// <h2>Daftar to do List anda: </h2>
var h21 = document.createElement('h2')
var isih21 = document.createTextNode('Daftar to do List anda:')
h21.appendChild(isih21)
clm.appendChild(h21)

//
// <div class="items">
//   <ol id="daftarTODOlist">
//     <!-- isi to do list disini -->
//   </ol>
//
// </div>
var items = document.createElement('div')
items.setAttribute('class', 'items')
clm.appendChild(items)

//ol
var ols = document.createElement('ol')
ols.setAttribute('id', 'daftarTODOlist')
items.appendChild(ols)


// <div style='float: right;'><button class="red reds" onclick='del()'>RESET</button></div>

var deleti = document.createElement('div')
deleti.setAttribute('class', 'red')
var isidel = document.createTextNode('RESET')
deleti.appendChild(isidel)
deleti.addEventListener("click", del);
items.appendChild(deleti)





// LIST OF FUNCTION - CLICK addEventListener

//BUTTON RESET  untuk delete Ol > Li
function del() {
  var list = document.getElementById('daftarTODOlist')
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}




// MENAMBAH TO DO LIST
function Tambahlist() {

  // <input type="checkbox"
  var inputlist = document.createElement("input");
  inputlist.setAttribute("type", "checkbox");



  //isi dari text form (add list)
  var inputValue = document.getElementById("myInput").value;
  //kondisi jika data di input text is empty atau sebaliknya
  if (!inputValue) {
    alert("di isi dulu to-do LIST NYA !")
  } else {
    //adds li to UL element
    var li = document.createElement("li");
    document.getElementById("daftarTODOlist").appendChild(li);
  }


  //MEMBUAT ID UNIK TIAP LIST NYA -_-  (untuk checkbox and label)
  var con = Math.random(4) + inputValue
  // <input id = con / random number > checkbox with unique ID
  inputlist.setAttribute('id', con)

  // membuat label unik
  var label = document.createElement('label')
  label.setAttribute("for", con);
  li.appendChild(inputlist)
  li.appendChild(label)



  // MEMBUAT ISI DI LABEL -> isi dari to do list
  var t = document.createTextNode(inputValue);
  label.appendChild(t)



  //date time picker
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var xa = document.createElement("INPUT");
  xa.setAttribute("type", "date");
  xa.setAttribute("id", "waktu");
  xa.setAttribute("value", date);
  label.appendChild(xa)
  //end tgl


  // RESET TEXT FIELD
  document.getElementById("myInput").value = "";

  // var spac = document.createTextNode('  ');
  // label.appendChild(spac);


  //make icon hapus - for one per one
  var hapusku = document.createElement('i');
  hapusku.setAttribute('class', 'fa fa-trash');
  label.appendChild(hapusku);


  //HAPUS satu persatu todolist + make delete icon
  //action delete onclick
  var isi = document.getElementsByClassName("fa fa-trash");
  for (var i = 0; i < isi.length; i++) {
    isi[i].onclick = function() {
      var baris = this.parentElement.parentElement;
      baris.style.display = "none";

    }
  }



}
