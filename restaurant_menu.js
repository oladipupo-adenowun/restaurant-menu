const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index)=>`<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;
document.getElementById("breakfastTotalItems").innerHTML = `${breakfastMenu.length} items`;

/* iterate with forEach which does not return output*/
let mainCourseMenuItemsHTML = '';
mainCourseMenu.forEach((item,index)=>{
    mainCourseMenuItemsHTML += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseMenuItemsHTML;
document.getElementById("maincourseTotalItems").innerHTML = `${mainCourseMenu.length} items`;


/* iterate with for loop */
let desertMenuItemsHTML = '';
for(let index=0; index<dessertMenu.length; index++){
    desertMenuItemsHTML += `<p>Item ${index+1}: ${dessertMenu[index]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = desertMenuItemsHTML;
document.getElementById("dessertTotalItems").innerHTML = `${dessertMenu.length} items`;