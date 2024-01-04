const buildPerson = ({ name, birthdate }) => {
  return {
    id: new Date().getTime(),
    name: name,
    birthdate: birthdate,
    age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
  };
};

const obj = { name: "John", birthdate: "1985/10/21" }; // Object literal
const John = buildPerson(obj);

console.log(John);
