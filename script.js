async function getUser() {
  let users;
  debugger;
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json");
    //alert(data)
    users = await data.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return users;
}



async function displayUser(user) {
  let users = await getUser();
  
  // console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  
  
  for(var j = 0; j < 100; j++) {
  
  //users.forEach((user) => {
  //console.log(user.name);
    userList.innerHTML += `
    <div class="user-container">
    <img  class="user-avatar" src="${users[j].image_link}" alt="${users[j].name}">
    <div>
    
    <h2>Brand : ${users[j].brand}</h2>
    <h2>Name : ${users[j].name}</h2>
    <h3>Price : ${users[j].price}</h3>
    <p>Description : ${users[j].description}</p>
 
    <button onClick="deleteUser(${users[j].id})">Delete</button>
    </div> 
    </div>
    `;
   
        
  //});
}  
}

displayUser();

/*
async function deleteUser(id) {
  try {
    const data = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json
/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const users = await data.json();
    console.log(users);
    displayUser();
  } catch (error) {
    console.log(error);
  }
}

async function addUser() {
  const userName = document.querySelector(".add-user-name").value;
  const userAvatar = document.querySelector(".add-user-avatar").value;
  const userPrice = document.querySelector(".add-user-price").value;
  const userDescription = document.querySelector(".add-user-Description").value;

  const data = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json",
    {
      method: "POST",
      body: JSON.stringify({
        brand: userName,
        name: userDescription,
        image_link: userAvatar,
        price: userPrice,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  displayUser();
} */

//     async function editUser() {
//     const userName = document.querySelector(".add-user-name").value;
//     const userAvatar = document.querySelector(".add-user-avatar").value;
//      const data= await fetch(`https://61ee6e58d593d20017dbae13.mockapi.io/project1/${id}`,
//      {
//        method: "PUT",
//        body:JSON.stringify({
//         Brandname: userName,
//         Description: userDescription,
//         avatar: userAvatar,
//         price: userPrice,
//         }),
//          headers: {
//            "Content-Type": "application/json",
//          },
       
//        })
//        console.log(data);
//        document.querySelector(".add-user-name").value="";
//        document.querySelector(".add-user-avatar").value="";
//     displayUser();

//   }