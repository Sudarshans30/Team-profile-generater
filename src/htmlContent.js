const fs = require("fs");
function generateTeam(team) {
  function generateManager(manager) {
    return `
           
        <div class="card m-4 " style="width: 18rem;">
            <div class="card-header text-bg-primary fs-3 p-2 ">
            <p> ${manager.getName()} </p>
            <p> ${manager.getRole()} </p>            
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span>ID:  </span>${manager.getId()} </li>
              <li class="list-group-item"><span>Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item"><span>Office Number: </span>${
                manager.officeNumber
              } </li>
            </ul>
         </div>    
    
        `;
  }
  function generateEngineer(engineer) {
    return `
           
        <div class="card m-4 " style="width: 18rem;">
            <div class="card-header text-bg-primary fs-3 p-2 ">
            <p> ${engineer.getName()} </p>
            <p> ${engineer.getRole()} </p>            
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span>ID:  </span>${engineer.getId()} </li>
              <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>  </li>
              <li class="list-group-item"><span>Github username: </span>${engineer.getGithub()} </li>
            </ul>
         </div>    
    
        `;
  }
  function generateIntern(intern) {
    return `
           
        <div class="card m-4 " style="width: 18rem;">
            <div class="card-header text-bg-primary fs-3 p-2 ">
            <p> ${intern.getName()} </p>
            <p> ${intern.getRole()} </p>            
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span>ID:  </span>${intern.getId()} </li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
              <li class="list-group-item"><span>School Name: </span>${intern.getSchool()} </li>
            </ul>
         </div>    
    
        `;
  }

  const htmlData = [];

  htmlData.push(
    team.filter((e) => e.getRole() === "Manager").map((m) => generateManager(m))
  );
  htmlData.push(
    team
      .filter((e) => e.getRole() === "Engineer")
      .map((m) => generateEngineer(m))
  );
  htmlData.push(
    team.filter((e) => e.getRole() === "Intern").map((m) => generateIntern(m))
  );

  return htmlData.join("");
}

module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

        <title>Team-G</title>
    </head>
    <body>
    <header  class="text-center text-bg-danger fs-1  p-4">My Team</header>
    <main class=" container  row  d-flex m-5">

        <div class="row justify-content-center">
         
          ${generateTeam(addedMembers)}
         
        </div>
    </main>
        
    </body>
    </html>
    `;
};
