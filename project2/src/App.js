import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (courses) {
      console.log(courses);
    }
  }, [courses]);

  return (
    <div className="min-h-screen flex flex-col bg-blue-300">
      <Navbar />

      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          <Cards courses={courses} category={category} />
        </div>
      </div>
    </div>
  );
}

export default App;
