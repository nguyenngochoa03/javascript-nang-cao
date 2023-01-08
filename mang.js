const nhahang ={
    name: 'Classico Italiaon',
    location: 'Hoa 23, frireze, italy',
    categories: ['Italian','pizzeria','vegetarian','organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const[x,y,z] =arr;
console.log(x,y,z);
console.log(arr);


let [main ,  secondary] = nhahang.categories;
console.log (main,secondary);


[main,secondary]=[secondary,main];
console.log(main,secondary);

// hai giá trị trả về từ một hàm 
const[starter,mainCourse]= nhahang.order(2,0);
console.log(starter,mainCourse);

//mảng lồng nhau 
// khi mảng lồng nhau thì mảng đó sẽ là một mảng 
const manglongnhau = [2,4,[5,6]];
// const [i, ,j] =manglongnhau;
// console.log(i, j);
const [i, ,[j,k]] =manglongnhau;
console.log(i, j,k);
 

// chúng ta cos thể gán giá trị mặc định cho chúng k cần nhất thiết 
// phải có phép gán 
const [p,q,r=1]=[8,9];
console.log(q,p,r)