const Header = (props) => {
  return <h1>{props.course}</h1>;
};

// arrayPart : catch the array parts in the props object
// parts : map to arrayPart each element name and exercices in a list
const Part = (props) => {
  const arrayPart = props.parts;

  const parts = arrayPart.map((el) => {
    return <li key={el.name}>{el.name + ' ' + el.exercises}</li>;
  });

  return <>{parts}</>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        <Part parts={props.parts} />
      </p>
    </div>
  );
};

// exercices : catch all exercices properties from array parts in props object
// [first, second, third] : take each exercices number values individualy
const Total = (props) => {
  const exercices = props.parts.map((el) => el.exercises);
  const [first, second, third] = exercices;
  const sum = first + second + third;
  return <p>Number of exercises {sum}</p>;
};
