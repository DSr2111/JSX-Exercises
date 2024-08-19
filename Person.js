const MAX_NAME_LENGTH_SHOWN = 6;

const hobbiesLI = hobbies.map((hobby) => <li>{hobby}</li>);
function Person({ age, hobbies, name }) {
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
