let myBooks = []

let visited = new Set()

let addBook =  document.querySelector('.add_book')

addBook.addEventListener('click',turnOnForm)

let form_cont = document.querySelector('.form-container')



document.querySelector(".form-submit").addEventListener("click", function(event){
    event.preventDefault()
  });



function turnOnForm(){

    

    form_cont.style.display = 'flex';

}

let form_submit_btn = document.querySelector('.form-submit')

form_submit_btn.addEventListener('click',addBookToLibrary)


function Book(author,title,pages,read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read

    
}


function addBookToLibrary(e){
   let author = document.querySelector('.author')
   let title = document.querySelector('.title')

   let pages = document.querySelector('.pages')
   let read = document.querySelector('.read')


//    console()

   if(author.value==='' || title.value==='' || pages.value===''){
    alert('Please enter all fields!')
   }
   else{


   b = new Book(author.value,title.value,pages.value,read.checked)

   myBooks.push(b)

   displayBook(b)

   form_cont.style.display = 'none';

   }


}

function displayBook(book){

    area_content = document.querySelector('.content-area')

    // myBooks.forEach(element => {

    console.log(visited)

        if(!visited.has(book.title) ){

            let author_div = document.createElement('div')
            let title_div = document.createElement('div')
            let pages_div = document.createElement('div')
            let read_toggle = document.createElement('checkbox')

            let del_btn = document.createElement('button')

            author_div.textContent = `Author  :  ${book.author}`
            title_div.textContent = `Title  :  ${book.title}`
            pages_div.textContent = `Pages  :  ${book.pages}`
            let read_btn = document.createElement('button')

            read_btn.addEventListener('click',changeRead)

            

            if (book.read){



                                
                read_btn.textContent = 'Read'
                read_btn.style.backgroundColor='rgb(186, 247, 188)'
                read_btn.style.color='rgb(18, 65, 19)'




            }
            else{
                read_btn.textContent = 'Not Read'
                read_btn.style.backgroundColor='rgb(255, 185, 185)'

                read_btn.style.color='rgb(134, 0, 56)';

            }

            del_btn.textContent = 'Delete'

            del_btn.className = 'delete-book'


            // let del_book = document.querySelector('.delete-book')

            // console.log(del_book)
        
            del_btn.addEventListener('click',removeBook)
            del_btn.title = book.title


            read_toggle.appendChild(read_btn)

            let main_div = document.createElement('div')

            main_div.appendChild(author_div)
            main_div.appendChild(title_div)
            main_div.appendChild(pages_div)
            main_div.appendChild(read_toggle)
            main_div.appendChild(del_btn)


            main_div.className = 'card-content'





            visited.add(book.title)

            area_content.appendChild(main_div)

            // console.log(area_content)

        }
        else{
            alert('Book Already Present')
        }
        
    // });
    }





    function removeBook(e){

        // console.log(e.parentElement)
        // console.log(e.parentElement)
        console.log(e.srcElement.title)
// 
        e.srcElement.parentElement.remove()

        visited.delete(e.srcElement.title)
        // console.log(visited)

    }

    function changeRead(e){
        if(e.srcElement.textContent==='Read'){
            e.srcElement.textContent='Not Read'
            e.srcElement.style.backgroundColor='rgb(255, 185, 185)'

            e.srcElement.style.color='rgb(134, 0, 56)';

    }
    else{
        e.srcElement.textContent='Read'
        e.srcElement.style.backgroundColor='rgb(186, 247, 188)'

        e.srcElement.style.color='rgb(18, 65, 19)'
    }





    }
