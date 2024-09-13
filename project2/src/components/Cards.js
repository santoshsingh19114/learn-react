import React from 'react';
import Card from './Card';

const Cards = ({ courses }) => {
  if (!courses) {
    // Render loading or a message when courses are null
    return <div>Loading courses...</div>;
  }

  // Combine all courses into one array
  const getCourses = () => {
    return Object.values(courses).flat();
  };

  return (
    <div>
      {getCourses().map((course, index) => (
        <Card key={index} course={course} />
      ))}
    </div>
  );
};

export default Cards;
