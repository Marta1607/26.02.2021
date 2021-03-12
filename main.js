const liczby = [1, 2, 3, 4, 5]

//MAP
//Metoda map() tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy.
const razyDwa = liczby.map(function(x) {   
    return x * 2;
});
liczby.pop(razyDwa)
console.log(liczby, razyDwa,)


const tablica = new Array
for(let i = 1; i < 26; i++){

    //PUSH
//Dodaje jeden lub więcej elementów na koniec tablicy i zwraca jej nową długość. Metoda ta zmienia długość tablicy.
    tablica.push(i) 
}
//POP
//usuwa ostatni indeks
tablica.pop()  

//REVERSE
//Odwraca kolejność elementów w tablicy: pierwszy staje się ostatnim, ostatni pierwszym
tablica.reverse()  
console.log(tablica)

function isBigEnough(value) {
    return value >= 10;
  }
  
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

//FILTER 
//Metoda filter() tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.

console.log(filtered)

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

//FOUND 
//Metoda find() zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji testującej.
console.log(found);

tablica.forEach(item => { //Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.
console.log("tsuki", item)
item = item + 2
console.log("katsuki", item)
})

//SOME
//Sprawdza, czy jakikolwiek element tablicy zalicza test zaimplementowany przez dostarczoną funkcję 
const sprawdzenie = tablica.some(item => item > 5)  
console.log(sprawdzenie)


const tablica1 = new Array(1, 15, 150, 1500)
tablica1.forEach(teb => {
    console.log(teb)
})
//LENGTH
//sprawdza długość
console.log(tablica1.length, "sprawdza długość")

tablica1.forEach(teb =>{
    if(teb === 150){
        console.log(teb)
    }
})

//UNSHIFT
//Dodaje jeden lub więcej elementów na początek tablicy i zwraca jej nową długość.
tablica1.unshift(6)
console.log(tablica1)