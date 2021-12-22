import React from 'react';

const Header = () => {
  return <h1>Web Development curriculum</h1>;
};

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Part = ({ courses }) => {
  const arrayPart1 = courses[0].parts;
  const arrayPart2 = courses[1].parts;

  // const parts = arrayPart.map((el) => {
  //   return <li key={el.id}>{el.name + ' ' + el.exercises}</li>;
  // });

  return (
    <>
      <ul>ok</ul>
    </>
  );
};

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
  console.log(courses);
  return (
    <>
      <Header />
      <Title title={courses[0].name} />
      {/* <Content courses={courses} /> */}
      <Title title={courses[1].name} />
      {/* <Total courses={courses} /> */}
    </>
  );
};

export default Course;
