const myFunc = ()=>{
    fetch('https://mysterious-basin-66083.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    .then(a=>{
        return a.json();
    })
    .then(a=>{
        console.log(a.quoteAuthor)
        console.log(a.quoteText)
        console.log(a.quoteAuthor)
        display_quote(a.quoteText,a.quoteAuthor)
    })
    .catch(err=>{
        myFunc();
        console.log(err)
    })
}

myFunc();

const display_quote=(quote, author)=>{
    const p = document.createElement('p');
    p.innerHTML = `<p>${quote}</p><br /><p><i>${author}</i></p>`
    document.getElementById('output').appendChild(p)
}

document.getElementById('new_quote').addEventListener('click',()=>{
    document.getElementById('output').textContent = '';
    myFunc();
})