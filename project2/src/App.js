import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output.data);

        // console.log(courses);
      } catch (error) {
        toast.error("something went wrong");
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    // Log when courses state is updated
    if (courses) {
      console.log(courses);
    }
  }, [courses]);

  return (
    <div className="App">
      <Navbar />

      <Filter filterData={filterData} />

      <Cards courses={courses} />
    </div>
  );
}

export default App;
