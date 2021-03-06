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
    console.log("data:" + data);
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
        "Content-type": "Application/json",
      },
      body: JSON.stringify(updatedPerson),
    });
    getPeople();
  };

  const deletePeople = async (id) => {
    await fetch(URL + id, { method: "DELETE" });
    getPeople();
  };

  useEffect(() => {
    getPeople();
  }, []);

  console.log({ people });

  return (
    <main>
      <Route exact path="/people">
        <Index people={people} createPeople={createPeople} />
      </Route>

      <Route
        path="/people/:id"
        render={(rp) => (
          <Show
            {...rp}
            people={people}
            updatePeople={updatePeople}
            deletePeople={deletePeople}
          />
        )}
      />
    </main>
  );
};

export default Main;
