const apiUrl = `https://demo-api.siit.ro/api`;


function getBooksList(){
    const requestUrl = `${apiUrl}/books`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}


function getBook(bookId){
    const requestUrl = `${apiUrl}/books/${bookId}`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}


function addBook(book) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify(book)
    }

    const requestUrl = `${apiUrl}/books`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function updateBook(bookId, book) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'PUT',
        body: JSON.stringify(book),
    }

    const requestUrl = `${apiUrl}/books/${bookId}`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function deleteBook(bookId){
    const requestOptions = {
        method: 'DELETE'
    }

    const requestUrl = `${apiUrl}/books/${bookId}`
    fetch(requestUrl, requestOptions)  
}

