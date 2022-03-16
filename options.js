// retrival of the two inputs
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');

// trying to get saved data from local storage, if there is nothing we give a default value
const user = JSON.parse(localStorage.getItem('userData')) || {
  name: '',
  age: null,
};
// filling the inputs with values coming form localstorage
nameInput.value = user.name;
ageInput.value = user.age;

const saveUser = () => {
  localStorage.setItem('userData', JSON.stringify(user));
};

// every time the user types in the input, we update the object describing the user and save it in local storage
nameInput.addEventListener('change', (e) => {
  user.name = e.target.value;
  saveUser();
});

ageInput.addEventListener('change', (e) => {
  user.age = e.target.value;
  saveUser();
});
