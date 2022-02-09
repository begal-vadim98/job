const changeDocument = function() {
  const books = document.querySelector('.books'),
    book = document.querySelectorAll('.book'),
    bookTitle = document.querySelectorAll('.book a');
    contentBook = document.querySelectorAll(".book li")
    fun = document.querySelectorAll('.boock')
    adv = document.querySelector('.adv');
    book[1].after(book[0]);
    book[0].after(book[4]);
    book[4].after(book[3]);
    book[3].after(book[5]);

   
    document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

    bookTitle[4].textContent = "Книга 3. this и Прототипы Объектов";

    adv.remove();

    //  2 книга

    contentBook[3].after(contentBook[6]);
    contentBook[6].after(contentBook[8]);
    contentBook[5].after(contentBook[2]);

    //  5 книга
    contentBook[47].after(contentBook[55]);
    contentBook[55].after(contentBook[49]);
    contentBook[48].before(contentBook[50]);
    contentBook[53].after(contentBook[51]);

    // 6 книга
    contentBook[25].insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>")
    console.log(contentBook)



}

changeDocument();