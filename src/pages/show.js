import { useState } from "react";
const Show = (props) => {
  const avatarUrl =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  const id = props.match.params.id;
  // console.log(id);
  // console.log(props.people);
  // console.table(props);

  // const person = props.people.find( function (p) {
  //   return (p._id === id);
  // });
  const person = props.people.find((p) => p._id === id);

  const { editForm, setEditForm } = useState(person);

  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, img, title, _id } = editForm;
    props.updatePeople({ name, img, title }, _id);
  };

  const handleRemovePerson = (id) => {
    props.deletePeople(id);
    props.history.push("/");
  };

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      {person.img ? (
        <img src={person.img} alt={person.name} />
      ) : (
        <img src={avatarUrl} alt="placeholder" />
      )}
      <button onClick={() => handleRemovePerson()}>Delete this Person</button>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={editForm.name}
          onChange={handleChange}
          type="text"
        />

        <input
          name="img"
          value={editForm.img}
          onChange={handleChange}
          type="text"
        />

        <input
          name="title"
          value={editForm.title}
          onChange={handleChange}
          type="text"
        />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Show;
