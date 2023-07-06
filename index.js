class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.people = [];
    }
    
    addResident(person) {
        this.people.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('Максимальна кількость квартир досягнуто');
        }
    }
}

const person1 = new Human('Олег', 'чоловічий');
const person2 = new Human('Анна', 'жіночій');
const person3 = new Human('Андрiй', 'чоловічий');

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);