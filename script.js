let quote=''

const myFunc = ()=>{
    fetch('https://mysterious-basin-66083.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    .then(a=>{
        return a.json();
    })
    .then(a=>{
        if(a.quoteText.split(' ').length>14){
            document.querySelector('#the_quote').style.fontSize = 14
        }else{
            document.querySelector('#the_quote').style.fontSize = 20
            console.log(a.quoteText.split(' ').length)
        }
        console.log(a.quoteText);
        if(quote === a.quoteText){
            myFunc();
            console.log('SAME TEXT. REDO !')
            return
        }
        quote = a.quoteText;
        generate_text(a.quoteText, a.quoteAuthor)
    })
    .catch(err=>{
        myFunc();
        console.log(err)
    })
}

myFunc();

document.getElementById('new_quote').addEventListener('click',()=>{
    myFunc();
})

const generate_text=(quote, author)=>{
    if(quote === ''){
        document.getElementById('the_quote').textContent = `${quote}`
        document.getElementById('the_author').textContent = `unknown`
    }else{
        document.getElementById('the_quote').textContent = `${quote}`
        document.getElementById('the_author').textContent = `${author}`
    }
}

document.getElementById('twitter_img').addEventListener('click',()=>{
    const quote = document.getElementById('the_quote').textContent
    const author = document.getElementById('the_author').textContent
    window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`, '_blank');
})