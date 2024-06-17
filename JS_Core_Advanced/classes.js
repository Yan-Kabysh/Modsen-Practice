class Book {
    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year
    }
    showData(){
        return (`Name: ${this.name} author: ${this.author} year: ${this.year}`)
    }
}

class Ebook extends Book {
    constructor(name, author, year, price){
        super(name, author, year);
        this.price = price
    }
    showData(){
        return (`Name: ${this.name} author: ${this.author} year: ${this.year} price: ${this.price}`)
    }
}

const ebook = new Ebook ("Harry Potter", "J. K. Rowling", 1997, 100)

console.log(ebook.showData())