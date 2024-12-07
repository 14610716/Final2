const getUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
  return response.json();
};

getUser()
  .then(handleResponse)
  .then(data => {
  const newUsers = data.map(user => user.name);
console.log(newUsers); })