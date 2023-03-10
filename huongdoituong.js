const nhahang ={
    name: 'Classico Italiaon',
    location: 'Hoa 23, frireze, italy',
    categories: ['Italian','pizzeria','vegetarian','organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
        
    },
    order: function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
};

const { name, openingHours,categories}=nhahang;
console.log(name,openingHours,categories);
