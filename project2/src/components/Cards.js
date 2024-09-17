import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  if (!courses) {
    return <div>Loading courses...</div>;
  }

  // Filter courses based on selected category
  const filteredCourses = () => {
    // Ensure we are filtering based on valid category
    const categoryCourses = courses[category] || []; // Use empty array if category not found

    console.log("Selected category:", category);
    console.log("Courses for category:", categoryCourses);

    if (category === "All") {
      // Flatten all categories into a single array
      return Object.values(courses).flat();
    }

    return categoryCourses;
  };

  const displayedCourses = filteredCourses();

  if (displayedCourses.length === 0) {
    return <div>No courses found for this category.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {displayedCourses.map((course, index) => (
        <Card key={index} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
      ))}
    </div>
  );
};

export default Cards;
