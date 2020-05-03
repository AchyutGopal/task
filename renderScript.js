const REPORT = (() => {
  let userData = {
    userDetails: [],
  }; // userData is to store the JSON data

  //Rendering Starts where the data gets displayed by getting JSON data

  const render = () => {
    const { userDetails } = userData;
    let {
      userDetails: [{ skills }],
    } = userData; // Destructuring Skills from userData to access easily
    let {
      userDetails: [{ comment: comment1 }],
    } = userData;
    console.log(comment1); // Destructuring and aliasing the comment from userData

    //Storing profile Data in htmlString with id profile
    var htmlString = `

${userDetails
  .map(({ name, location, profession, websiteLink, imgLink }) => {
    return `  



<div>
<img class="mb-2"
  src="${imgLink}"
  width="220px"
  height="220px"
/>
<div class="name changeSize">
  <h4><strong>${name}</strong></h4>
</div>
<div class="details changeSize">
  <div class="location">
      <i class="large material-icons size">add_location</i> ${location}
  </div>
  <div class="profession changeSize"><i class="large material-icons size">work</i> ${profession}
  </div>
  <div class="contact-details">
    <i class="large material-icons size">launch</i
    ><a href="#"> ${websiteLink}</a>
  </div>
</div>
<div class="edit-profile mt-2">

  <button class="btn btn-success commonBackgroundColour" id="editColor">
    <i class="large material-icons size">edit</i>Edit Profile
  </button>
</div>

<div class="skill">
    <strong>Skills</strong>
    <div class="skills">

      ${skills
        .map(({ skillName, percent }) => {
          return `<small><strong>${skillName}</strong></small>
        <div class="progress" id="progressStylesAbove">
  <div class="progress-bar commonBackgroundColour"  role="progressbar"  style="width:${percent}%;" ></div>
</div>
`;
        })
        .join("")}

      </div>
      </div>

</div>




`;
  })
  .join("")}




`;

    var count = 0;
    var htmlString1 = `
${comment1
  .map((item) => {
    // count++;
    // console.log(count);
    //   var greenX =`style="#2ABB9B;"`;
    //   var grayX =`style="#2ABB9B;"`;
    //   let dateColour = (count%2==0)? greenX : grayX;
    var x = '<i style="font-size:15px" class="fa">&#xf0c6;</i>';
    return `   
<div class="row mt-2">
                  <div class="col-0.5 mt-2 ml-auto ">
               <img 
                         class="imgBorder" src="${item.img}"
                          alt="img" width="30px" height="30px">
                  </div>
                       <div class="col-9 m-auto">
                       <b>${item.name}</b>
                      <p class="lineChanges"><i style="font-size:24px;" class="fa fa-rotate-90">&#xf068;</i>${
                        item.line1
                      }</p>
                       ${item.attachment ? x : ""}  <a href="#">${
      item.line2
    }</a>
                       </div>
                       <div class="col-2 mt-4 mr-auto" >
                          <h3 style="color:#3b5998;">${item.date}</h3>
                          <p class = "text-secondary">${item.month}</p>
                       </div>
              </div>
              <hr>`;
  })
  .join("")}     
  `;
    document.getElementById("comment").innerHTML = htmlString1;

    document.getElementById("profile").innerHTML = htmlString;
  };

  //init part where the json data is collected

  const init = () => {
    fetch("https://jsonblob.com/api/8460e716-8ba1-11ea-b153-c94960cbb1fa")
      .then((response) => response.json())

      .then((json) => {
        userData = { ...userData, userDetails: [...json] };
        console.log(userData);
        render();
      });
  };

  return {
    init,
  };
})();

REPORT.init();
