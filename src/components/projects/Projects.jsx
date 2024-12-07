import { useEffect, useState } from "react";
import Project from "./Project";
import axios from "axios";

const Projects = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("projects.json")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="border-b border-neutral-500 pb-4">
      <h1 className="text-4xl text-center my-20">Projects</h1>
      <div>
        {items.map((item) => (
          <Project key={item.id} item={item}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
