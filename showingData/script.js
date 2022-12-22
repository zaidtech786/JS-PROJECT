let imageData = [
    {
        image:"img/img1.jpg",
        heading:"heading",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
        id:"All"
    },
    {
        image:"img/img2.jpg",
        heading:"heading2",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
        id:"All"
    },
    {
        image:"img/img3.jpg",
        heading:"heading3",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
        id:"head2"
    },
    {
        image:"img/img3.jpg",
        heading:"heading3",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
        id:"head2"
    },
    {
        image:"img/img3.jpg",
        heading:"heading3",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
        id:"head1"
    },
    {
        image:"img/img3.jpg",
        heading:"heading3",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
        id:"head1"
    },
];

let img = document.querySelector(".img");
let heading = document.querySelector(".heading");
let para = document.querySelector(".para");
let container = document.querySelector(".container");
let btn = document.querySelectorAll(".btn");

// const DisplayData = (datas) => {
//     let data = datas.map(item => {
//         const {image,heading,para,id} = item;
//         return `
//         <div class="box">
//         <img src=${image} class="img" alt=""> 
//         <div class="content">
//             <h2 class="heading">${heading} </h2>
//             <p class="para">${para}</p>
//         </div> 
//    </div>  
//         `
        
//     })
//     container.innerHTML = data;
// }

// DisplayData(imageData)

// btn.forEach(btn => {
//     btn.addEventListener("click" , () => {
//         let filterData = imageData.filter(item => {
//            if(item.id == btn.id){
//            return item;
//            }
//         })
//         if(btn.id == "All"){
//             DisplayData(imageData);
//         }
//         else{
//             DisplayData(filterData)
//         }
//     })
// })


const DisplayData = (data) => {
    let AllData = data.map(item => {
        console.log(item)
        const {image,heading,para} = item;
        return (
          `
          <div class="box">
          <img src=${image} class="img" alt=""> 
          <div class="content">
              <h2 class="heading">${heading} </h2>
              <p class="para">${para}</p>
          </div> 
     </div>  
          
          `
        )
    });
    container.innerHTML = AllData;

}
DisplayData(imageData);

btn.forEach( btn => {
   btn.addEventListener("click" , (e) => {
    let id =  btn.id;
    let filterData = imageData.filter( item => {
        if(id == item.id){
           return item;
        }
    });
    if(id=="All"){
        DisplayData(imageData)
    }
    else{
       DisplayData(filterData)
    }
   })

})