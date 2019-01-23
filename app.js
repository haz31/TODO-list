var editSmall = document.querySelector("small");
var Textinput = document.querySelector("input");
var span = document.querySelectorAll("span");
var  input = document.querySelector("input[type='text']");
var ul = document.getElementById("text-holder");

editSmall.addEventListener("click", function() {
	Textinput.style.display="block";

}); 

input.onkeypress = ( function(evt) {
	if (evt.which == 13) {
		var Todo = document.createElement("LI");
		var textSubject = document.createElement("span");
		    textSubject.innerHTML = "&times;"
		    Todo.appendChild(textSubject);
		var TodoText = document.createTextNode(this.value);
		Todo.appendChild(TodoText);
		ul.appendChild(Todo);
		
	}
})

ul.addEventListener("click", function(e) {
	if(e.target.tagName === "SPAN"){
		e.target.parentElement.style.display = 'none';
    }
});
