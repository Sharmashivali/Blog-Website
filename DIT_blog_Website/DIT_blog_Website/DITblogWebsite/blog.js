// Function to add a comment
function addComment(commentInput, commentList) {
    const commentText = commentInput.value;

    if (commentText) {
        const listItem = document.createElement("li");
        listItem.textContent = commentText;
        commentList.appendChild(listItem);
        commentInput.value = ""; // Clear the input field
    }
}

// Event listeners for the comment forms and like buttons
const commentForm1 = document.getElementById("commentForm1");
const commentInput1 = document.getElementById("commentInput1");
const commentList1 = document.getElementById("commentList1");
const likeButton1 = document.getElementById("likeButton1");

commentForm1.addEventListener("submit", function (event) {
    event.preventDefault();
    addComment(commentInput1, commentList1);
});

let likes1 = 0;
likeButton1.addEventListener("click", function () {
    likes1++;
    likeButton1.textContent = `Like (${likes1})`;
});

const commentForm2 = document.getElementById("commentForm2");
const commentInput2 = document.getElementById("commentInput2");
const commentList2 = document.getElementById("commentList2");
const likeButton2 = document.getElementById("likeButton2");

commentForm2.addEventListener("submit", function (event) {
    event.preventDefault();
    addComment(commentInput2, commentList2);
});

let likes2 = 0;
likeButton2.addEventListener("click", function () {
    likes2++;
    likeButton2.textContent = `Like (${likes2})`;
});
