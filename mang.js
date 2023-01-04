const nhahang ={
    name: 'Classico Italiaon',
    location: 'Hoa 23, frireze, italy',
    categories: ['Italian','pizzeria','vegetarian','organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const[x,y,z] =arr;
console.log(x,y,z);
console.log(arr);


const [main ,  secondary] = nhahang.categories;
console.log (main,secondary);
