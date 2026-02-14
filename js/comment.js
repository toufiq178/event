document.getElementById('btn-post-comment')
    .addEventListener('click', function(){ 
        
        
        const commentArea = document.getElementById('comment-area')
        const newComment = commentArea.value;
        // console.log(newComment);

        const commentBox = document.getElementById('comment-box');
        
        const commentEl = document.createElement('p');
        commentEl.classList.add('comment')
        commentBox.append(commentEl)

        commentEl.innerText = newComment;

        commentArea.value = '';
        
                
    })