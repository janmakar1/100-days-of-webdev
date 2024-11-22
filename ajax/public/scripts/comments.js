const loadCommentsBtnEleent = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");

function createCommentList(comments) {
  const commentListEleement = document.createElement("ol");

  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
    <article class="comment-item">
      <h2>${comment.title}</h2>
      <p>${comment.text}</p>
    </article>
    `;
    commentListEleement.appendChild(commentElement);
  }

  return commentListEleement;
}

async function fetchCommentsForPost(event) {
  const postId = loadCommentsBtnEleent.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();
  console.log(responseData);

  const commentsListElement = createCommentList(responseData);
  commentsSectionElement.innerHTML = "";
  commentsSectionElement.appendChild(commentsListElement);
}

loadCommentsBtnEleent.addEventListener("click", fetchCommentsForPost);
