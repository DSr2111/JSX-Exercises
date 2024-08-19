const MAX_NAME_LENGTH_SHOWN = 6;

function Person({ age, hobbies, name }) {
  const hobbiesLI = hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, MAX_NAME_LENGTH_SHOWN)}</li>
        <li>Age: {age}</li>
      </ul>
      <ul>
        Hobbies:
        {hobbiesLIs}
      </ul>
    </div>
  );
}
