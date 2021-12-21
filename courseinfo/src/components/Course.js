import React from 'react';

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

// arrayPart : catch the array parts in the props object
// parts : map to arrayPart each element name and exercices in a list
const Part = ({ course }) => {
  const arrayPart = course.parts;

  // const parts = arrayPart.map((el) => {
  //   return <li key={el.id}>{el.name + ' ' + el.exercises}</li>;
  // });

  return (
    <>
      <p>ok</p>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part course={course} />
    </div>
  );
};

// exercices : catch all exercices properties from array parts in props object
// [first, second, third] : take each exercices number values individualy
// const Total = (props) => {
//   const exercices = props.parts.map((el) => el.exercises);
//   const [first, second, third] = exercices;
//   const sum = first + second + third;
//   return <p>Number of exercises {sum}</p>;
// };

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

export default Course;
