function Person({ age, hobbies, name }) {
  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0)}</li>
        <li>Age: {age}</li>
      </ul>
      <ul>Hobbies:</ul>
    </div>
  );
}
