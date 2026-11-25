const books = [
    {title: 'Её ужасная нечисть', genre: 'Фэнтэзи'},
    {title: 'Сильное звено Академии Драконов', genre: 'Любовная фантастика'},
    {title: 'Госпожа портниха', genre: 'Попаданцы'},
    {title: 'Осколки вечности в Академии Судьбы', genre: 'Любовная фантастика'},
    {title: 'Красная зима', genre: 'Фэнтэзи'},
    {title: 'Ведьма и князь', genre: 'Фэнтэзи'},
    {title: 'Между роком и судьбой', genre: 'Фэнтэзи'},
    {title: 'Твоё имя после дождя', genre: 'Любовная фантастика'},
    {title: 'Радуга на запястье', genre: 'Научная фантастика'},
    {title: 'Благотворительница', genre: 'Попаданцы'},
    {title: 'Тяжелый случай', genre: 'Попаданцы'},
    {title: 'Падший и святая', genre: 'Фэнтэзи'},
    {title: 'Скромница и сердцеед', genre: 'Любовная фантастика'},
];

const genres = [];
let lovely_fiction = [];
let science_fiction = [];
let fantasy = [];
let popadanchi = [];

for (let i = 0; i < books.length; i++) {
    console.log(books[i].genre);

    if (!genres.includes(books[i].genre)) {
        genres.push(books[i].genre);
    }
}

console.log(genres);