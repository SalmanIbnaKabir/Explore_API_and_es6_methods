const loadData = () => {
  // Fetch..pass an url 
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = (person) => {
  // console.log(person);
  const { picture, name, email, location } = person;
  const { street } = location;
  const userContainer = document.getElementById("user-container")
  userContainer.innerHTML = `
      <div class="card mb-3" style="width: 480px;">
          <div class="row g-0">
            <div class="col-md-4 h-100 ">
              <img src="${picture.large}" class="w-100 rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Name: ${name.title} ${name.first} ${name.last}</h5>
                <p class="card-text">Location: ${street.number}, ${street.name}</p>
                <p class="card-text"><small class="text-muted">Email: ${email}</small></p>
              </div>
            </div>
          </div>
        </div>
      `
      userContainer.appendChild
}
  // loadData()