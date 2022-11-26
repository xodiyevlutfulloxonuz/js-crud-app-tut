
const userName=document.querySelector('#userName')
const userEmail=document.querySelector('#userEmail')
const userJob=document.querySelector('#userJob')
const tbody=document.querySelector('#tbody')
const submitForm=document.querySelector('#submitForm')

let isUserUpdated=false 
let updatedUserId=undefined

let users=[]
function addUser(e){
   e.preventDefault()

   if(isUserUpdated==false){
      let name = userName.value 
   let email=userEmail.value 
   let  job=userJob.value 

   if(name==="" || email===""  || job===""){
      alert("Iltimos inputlarni toliq toldiring.")
      return 0 

   }
   let newUser={
      id:users.length+1,
      name:name,
      email:email,
      job:job

   }

     users.push(newUser)

     tbody.innerHTML=""
   
     users.forEach(user=>{
        tbody.innerHTML+=`
        
        <tr>
        <td scope="row"> ${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.job}</td>
        <td> <button class="btn btn-info" onClick=updateUser(${user.id})> edit</button></td>
        <td> <button class="btn btn-danger" onClick="deleteUser(${user.id})"> delete</button></td>
      </tr>
             `

     })

   submitForm.reset()
   }
   if(isUserUpdated==true){
      let findUpdatedUserId=users.find(user=>user.id==updatedUserId)
      findUpdatedUserId.name=userName.value
      findUpdatedUserId.email=userEmail.value 
      findUpdatedUserId.job=userJob.value 


      tbody.innerHTML=""
   
   users.forEach(user=>{
      tbody.innerHTML+=`
      
      <tr>
      <td scope="row"> ${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.job}</td>
      <td> <button class="btn btn-info" onClick=updateUser(${user.id})> edit</button></td>
      <td> <button class="btn btn-danger" onClick="deleteUser(${user.id})"> delete</button></td>
    </tr>
           `

   })

         isUserUpdated=false
         updatedUserId=undefined
         submitForm.reset()

   }
   
}

submitForm.addEventListener('submit', addUser)

function deleteUser(id){

   ///let findUser=users.find(user=>user.id==id)
   
   users=users.filter(user=>user.id!==id)

   tbody.innerHTML=""
   
   users.forEach(user=>{
      tbody.innerHTML+=`
      
      <tr>
      <td scope="row"> ${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.job}</td>
      <td> <button class="btn btn-info" > edit</button></td>
      <td> <button class="btn btn-danger" onClick="deleteUser(${user.id})"> delete</button></td>
    </tr>
           `

   })

}

function updateUser(id){
   const findUser=users.find(user=>user.id==id)
   userName.value=findUser.name 
   userEmail.value=findUser.email
   userJob.value=findUser.job
   isUserUpdated=true 
   updatedUserId=findUser.id 
   
   
   
}






