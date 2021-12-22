import React from 'react';

const Header = ({ courses }) => {
  console.log(courses);
  return <h1>{courses[0].name}</h1>;
};

// const Part = ({ courses }) => {
//   const arrayPart = courses.parts;

//   const parts = arrayPart.map((el) => {
//     return <li key={el.id}>{el.name + ' ' + el.exercises}</li>;
//   });

//   return (
//     <>
//       <ul>ok</ul>
//     </>
//   );
// };

// const Content = ({ courses }) => {
//   return (
//     <div>
//       <Part courses={courses} />
//     </div>
//   );
// };

// const Total = ({ courses }) => {
//   const exercices = courses.parts.map((el) => el.exercises);
//   const total = exercices.reduce((prev, current) => prev + current);
//   return <p>Number of exercises {total}</p>;
// };

const Course = ({ courses }) => {
  return (
    <>
      <Header courses={courses} />
      {/* <Content courses={courses} /> */}
      {/* <Total courses={courses} /> */}
    </>
  );
};

export default Course;
