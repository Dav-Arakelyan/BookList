const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');
const addBtn = document.querySelector('#add-book');
const bookLit = document.querySelector('.book-list');

addBtn.addEventListener('click', function(){
    if(titleInput.value == '' || authorInput.value == '' || isbnInput.value == ''){
        alert('write something')
    } else{
        const bookListChild = document.createElement('div')
        bookListChild.className = 'book-list-child'
        
        const newTitle = document.createElement('div')
        bookListChild.appendChild(newTitle)
        newTitle.innerHTML = titleInput.value
 

        const newAuthor = document.createElement('div')
        bookListChild.appendChild(newAuthor)
        newAuthor.innerHTML = authorInput.value

        const newIsbn = document.createElement('div')
        bookListChild.appendChild(newIsbn)
        newIsbn.innerHTML = isbnInput.value


        bookLit.appendChild(bookListChild)
        
    }
})
