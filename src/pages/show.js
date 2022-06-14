import { useState } from "react";
const Show = (props) => {
  const avatarUrl =
    "https://pixabay.com/vectors/avatar-icon-placeholder-facebook-1577909/";
  const id = props.match.params.id;
  const person = props.people.find(function (p) {
    return p._id === id;
  });
  // const person = props.people.find(p => p._id === id);
  const { editForm, setEditForm } = useState(person);

  const handleChange = (event) => {};
  const handleSubmit = (event) => {};
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>

      {person.img ? (
        <img src={person.img} alt={person.name} />
      ) : (
        <img src={avatarUrl} alt={"placeholder"} />
      )}

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
