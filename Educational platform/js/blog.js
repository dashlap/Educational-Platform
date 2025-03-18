document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const addCommentBtns = document.querySelectorAll('.add-comment-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const blogContent = btn.parentElement.querySelector('.full-text');
            if (blogContent.style.display === 'none' || blogContent.style.display === '') {
                blogContent.style.display = 'block';
                btn.textContent = 'Скрыть';
            } else {
                blogContent.style.display = 'none';
                btn.textContent = 'Читать далее';
            }
        });
    });

    commentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const commentsSection = btn.parentElement.nextElementSibling;
            if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
                commentsSection.style.display = 'block';
            } else {
                commentsSection.style.display = 'none';
            }
        });
    });

    addCommentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const commentInput = btn.previousElementSibling;
            const commentsList = commentInput.nextElementSibling;
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentItem = document.createElement('div');
                commentItem.className = 'comment-item';
                commentItem.textContent = commentText;
                commentsList.appendChild(commentItem);
                commentInput.value = '';
            }
        });
    });

    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const likeCount = btn.querySelector('.like-count');
            let count = parseInt(likeCount.textContent);
            likeCount.textContent = count + 1;
        });
    });
});