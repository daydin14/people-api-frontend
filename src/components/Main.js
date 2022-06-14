import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
  const [people, setPeople] = useState(null);
  const URL = "http://localhost:4000/people/";

  const getPeople = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPeople(data);
  };

  const createPeople = async (person) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const updatePeople = async (updatedPerson, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "x-www-form-urlencoded",
      },
    });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main>
      <Route exact path="/">
        <Index people={people} createPeople={createPeople} />
      </Route>
      <Route
        path="/people/:id"
        render={(renderProps) => <Show {...renderProps} />}
      />
    </main>
  );
};

export default Main;
