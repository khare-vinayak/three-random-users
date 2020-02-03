//let usersList=document.querySelector("ul");

window.addEventListener('hashchange',(ev)=>{
    console.log(window.location.hash);
    const id= window.location.hash.slice(1)
    console.log(id);
    console.log(document.querySelector("div"));
    console.log(document.getElementById(`#${id}`));
    document.getElementById(`#${id}`).style.display = "none";
   //document.getElementById(`#${id}`).style.display="block";

})
function renderUsers(user){
    console.log('User1');
    console.log(user);
    user.forEach(u=>{
       let num=1;
        console.log((u.fullName));
        console.log(u.email);
        num++;
    }); 
    let num=1;

    const html=user.map(ul=>{
        return `
            <div id="nav">
            <a href="#${ul.id}">${num++} </a>
            </div>
            <div id="#${ul.id}">
            ${ul.fullName}
             ${ul.email} 
            <img src=${ul.avatar} ></img>
           </div> 
           ` 
         /* 
         <tr>
            <td><a href="#${ul.id}">${num++} </a></td>
            <td> ${ul.fullName} </td>
            <td> ${ul.email} </td>
            <td><img src=${ul.avatar}></img></td>
        </tr>
         
         <li><a href="#${ul.id}">${num++} </a> </li>
            <li>${ul.fullName} </li>
            <li> ${ul.email} <li>
            <img src=${ul.avatar}></img>
        */
    });
    console.log(html);
   // console.log(document.querySelector('#ul'));
    //console.log(document.querySelector('#userList'));
    const usersList=document.querySelector('#main');
    //console.log(usersList);
    
    //ul.innerHTML=html;
    usersList.innerHTML=html;
}


function getData(){
    const user1= fetch('https://acme-users-api-rev.herokuapp.com/api/users/random');
    const user2= fetch('https://acme-users-api-rev.herokuapp.com/api/users/random');
    const user3= fetch('https://acme-users-api-rev.herokuapp.com/api/users/random');

    Promise.all([user1,user2,user3])
        .then (response=>Promise.all(response.map(r=>r.json())))
        .then (result=> renderUsers(result));
        
}


getData();
