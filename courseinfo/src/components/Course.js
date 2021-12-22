import React from 'react';

const Header = () => {
  return <h1>Web Development curriculum</h1>;
};

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Part = ({ parts }) => {
  const part = parts.map((el) => {
    return <li key={el.id}>{el.name + ' ' + el.exercises}</li>;
  });

  return (
    <>
      <ul>{part}</ul>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts} />
    </div>
  );
};

const Total = ({ parts }) => {
  const exercices = parts.map((el) => el.exercises);
  const total = exercices.reduce((prev, current) => prev + current);
  return <p>Number of exercises {total}</p>;
};

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <Header />
      <Title title={courses[0].name} />
      <Content parts={courses[0].parts} />
      <Total parts={courses[0].parts} />
      <Title title={courses[1].name} />
      <Content parts={courses[1].parts} />
      <Total parts={courses[1].parts} />
    </>
  );
};

export default Course;
