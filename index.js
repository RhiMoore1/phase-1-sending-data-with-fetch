// Add your code here


function submitData(name, email){

    const formData = {
        name: `${name}`,
        email: `${email}`
    };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        const newId = document.createElement('p');
        document.querySelector('body').appendChild(newId);
        document.querySelector('p').innerHTML = data.id
    })
    .catch(function (error) {
        const errorMessage = document.createElement('p');
        document.querySelector('body').appendChild(errorMessage);
        document.querySelector('p').innerHTML = error
      
    });
}
