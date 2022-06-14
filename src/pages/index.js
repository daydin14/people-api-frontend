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
    setNewForm({
      name: "",
      img: "",
      title: "",
    });
  };

  const loaded = () => {
    return props.people.map((person) => (
      <li key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.img} alt={person.name} />
        <h3>{person.title}</h3>
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
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.img}
          name="img"
          placeholder="img"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Person" />
      </form>
      {props.people ? <ol>{loaded()}</ol> : loading()}
    </section>
  );
};

export default Index;
