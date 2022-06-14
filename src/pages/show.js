const Show = (props) => {
  const avatarUrl =
    "https://pixabay.com/vectors/avatar-icon-placeholder-facebook-1577909/";
  const id = props.match.params.id;
  const person = props.people.find(function (p) {
    return p._id === id;
  }); // Or ".find(p => p._id === id);

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>

      {person.img ? (
        <img src={person.img} alt={person.name} />
      ) : (
        <img src={avatarUrl} alt={"placeholder"} />
      )}
    </div>
  );
};

export default Show;
