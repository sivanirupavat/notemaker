console.log("hello world");
showNotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtitle=document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    let myobj ={
        title:addTitle.value ,
        text:addTxt.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="card  notecard container mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>

          <p class="card-text">${element.text}</p>
          <button class="btn-secondary" id="${index}" onclick="deletenote(this.id)">delete</button>
          
        </div>
      </div>
   	 
       `;
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `No notes found.You can "add notes" by above section.`
    }
}

function deletenote(index) {
    console.log('iam deleting', index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
  
}

let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    console.log('input event fired!',inputval);
    let notecard=document.getElementsByClassName('notecard');
     Array.from(notecard).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
      if(cardtxt.includes(inputval)){
          element.style.display="block";
      }
      else{
          element.style.display="none";
      }
        //  console.log(cardtxt);
     })
})

$(document).ready(function(){
    console.log($)
$('p').click(function(){
    console.log('clicked!!');
    $('p').hide(1000);
    $('p').show(1000);

})
})