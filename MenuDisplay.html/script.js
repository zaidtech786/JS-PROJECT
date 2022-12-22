let menuData=[
    {
    image:"images/item-1.jpeg",
    menuName:"Cake",
    price:"$40",
    category:"breakfast",
    about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-2.jpeg",
        menuName:"Zinger Burger",
        price:"$40",
        category:"lunch",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-3.jpeg",
        menuName:"Ice-cream",
        price:"$40",
        category:"shakes",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-4.jpeg",
        menuName:"Omlete",
        price:"$40",
        category:"breakfast",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-5.jpeg",
        menuName:"Burger",
        price:"$40",
        category:"lunch",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-6.jpeg",
        menuName:"MilkShake",
        price:"$40",
        category:"shakes",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-7.jpeg",
        menuName:"Egg-bun",
        price:"$40",
        category:"breakfast",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-8.jpeg",
        menuName:"Tikki Burger",
        price:"$40",
        category:"lunch",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-9.jpeg",
        menuName:"Combo Meal",
        price:"$40",
        category:"lunch",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
    {
        image:"images/item-10.jpeg",
        menuName:"Combo Meal",
        price:"$40",
        category:"breakfast",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sequi eius minima consequatur veritatis recusandae,",
    },
];

// variable initialization
let menuContainer=document.querySelector('.section-center');
let btnContainer=document.querySelector('.btn-container')
let filterBtn=btnContainer.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menuData)
});


const displayMenuItems = (menuItemsdata) =>{
    let displayMenu=menuItemsdata.map(function(item){
           console.log(item);
        return `     <article class="menu-item">
        <img src="${item.image}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.menuName}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.about}
          </p>
        </div>
      </article>`
       });
       displayMenu=displayMenu.join(" ");
       menuContainer.innerHTML=displayMenu;
  
}

filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menuData.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
        console.log(menuItem);
      });
      if (category === "all") {
        displayMenuItems(menuData);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
