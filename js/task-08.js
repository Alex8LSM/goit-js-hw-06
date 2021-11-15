const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const myData = {}
    const myInput = event.currentTarget.elements;
    if (myInput.email.value === '' || myInput.password.value === '') {
      return alert('Please fill in all the fields!');
    }
  myData.email = myInput.email.value;
  myData.password = myInput.password.value;
  console.log(myData);
  event.currentTarget.reset();
}
