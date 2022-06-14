import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    name: "",
    img: "",
    title: "",
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPeople(newForm);
  };

  const loaded = () => {
    return props.people.map((person) => (
      <li key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
      </li>
    ));
  };

  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          value={newForm.name}
          onChange={handleChange}
          name="name"
          placeholder="name"
          type="text"
        />
        <input
          value={newForm.img}
          onChange={handleChange}
          name="img"
          placeholder="img"
          type="text"
        />
        <input
          value={newForm.title}
          onChange={handleChange}
          name="title"
          placeholder="title"
          type="text"
        />
        <input type="submit" value="Create Person" />
      </form>
      {props.people ? (
        <ol style={{ textAlign: "left" }}>{loaded()}</ol>
      ) : (
        loading()
      )}
    </section>
  );
};

export default Index;
