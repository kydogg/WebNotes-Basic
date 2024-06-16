const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");

function showNotes() {
	notesContainer.innerHTML = localStorage.getItem("notes") || "";
	attachDeleteEvent();
}

function updateStorage() {
	localStorage.setItem("notes", notesContainer.innerHTML);
}

function attachDeleteEvent() {
	const deleteButtons = notesContainer.querySelectorAll(".input-box img");
	deleteButtons.forEach((deleteBtn) => {
		deleteBtn.addEventListener("click", (e) => {
			e.target.parentElement.remove();
			updateStorage();
		});
	});
}

createButton.addEventListener("click", () => {
	createNote();
});

function createNote() {
	let inputBox = document.createElement("p");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");

	let deleteImg = document.createElement("img");
	deleteImg.src = "images/delete.png";
	deleteImg.alt = "Delete";
	deleteImg.addEventListener("click", (e) => {
		e.target.parentElement.remove();
		updateStorage();
	});

	inputBox.appendChild(deleteImg);
	notesContainer.appendChild(inputBox);
	updateStorage(); // Update storage after adding a new note
}

notesContainer.addEventListener("keyup", function (e) {
	if (e.target.classList.contains("input-box")) {
		updateStorage();
	}
});

showNotes();
