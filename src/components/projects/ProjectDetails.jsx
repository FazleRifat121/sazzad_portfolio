import React from "react";
import { Link, useParams } from "react-router"; // Corrected the import for `useParams`

const projectData = [
  {
    id: "1",
    title: "Dice Roller App ",
    description:
      "A simple mobile app that simulates rolling a dice, displaying a random dice side when a button is pressed.",
    details:
      "The Dice Roller App is a lightweight mobile application developed using Flutter and Dart, designed for entertainment and simplicity. The core functionality involves generating a random number between 1 and 6 whenever the user presses the roll button, simulating the rolling of a standard dice. The app dynamically updates the displayed dice image to correspond with the generated number, providing a realistic dice-rolling experience. Built with Flutter's intuitive UI components, this app delivers a responsive and visually appealing interface. Its clean and efficient code structure ensures smooth performance across various mobile devices. The Dice Roller App serves as an excellent showcase of Flutter's capabilities for creating engaging mobile applications with minimal resources.",
    imgs: [
      "https://i.ibb.co.com/1MxSScD/Whats-App-Image-2024-12-07-at-12-00-22-PM-2.jpg",
      "https://i.ibb.co.com/T4swFB8/Whats-App-Image-2024-12-07-at-12-00-22-PM-1.jpg",
      "https://i.ibb.co.com/Yt8Zcbj/Whats-App-Image-2024-12-07-at-12-00-23-PM.jpg",
      "https://i.ibb.co.com/WyxknYL/Whats-App-Image-2024-12-07-at-12-00-22-PM.jpg",
      "https://i.ibb.co.com/hdBgQ2m/Whats-App-Image-2024-12-07-at-12-00-23-PM-2.jpg",
      "https://i.ibb.co.com/s9Y1K4Y/Whats-App-Image-2024-12-07-at-12-00-23-PM-1.jpg",
    ],
  },
  {
    id: "2",
    title: "UniGuide ",
    description:
      "An app designed to help students select suitable universities, currently focused on universities in Bangladesh.",
    details:
      "UniGuide is a Java-based application tailored to assist students in making informed decisions about their higher education. This application provides a curated list of universities in Bangladesh, along with detailed information such as courses offered, admission requirements, and rankings. It uses a structured data handling approach to manage large volumes of university data efficiently. The user-friendly interface allows students to search and filter universities based on specific criteria, such as location, field of study, or academic scores. Future updates aim to expand its scope to include universities from other countries, transforming it into a global university recommendation tool. UniGuide demonstrates the effective use of Java for managing data-heavy applications and highlights my commitment to addressing real-world challenges faced by students.",
    imgs: [
      "https://i.ibb.co.com/p0wvKbT/7872e67f-a32b-4993-b367-0b7703b1a749.jpg",
      "https://i.ibb.co.com/gM2YGsC/f3e96807-e299-46ca-bdce-1f166fb37037.jpg",
      "https://i.ibb.co.com/QKV16dx/7636b477-a74c-45f3-a619-5666f06623c9.jpg",
      "https://i.ibb.co.com/JHm01P7/03894f18-67cb-45fd-8606-370489285729.jpg",
      "https://i.ibb.co.com/9T3m488/811d8561-6d41-4d07-a474-388e470742b4.jpg",
      "https://i.ibb.co.com/z6zbxx1/588bc5fe-5b92-4656-8afa-ba70828d3bff.jpg",
    ],
  },
  {
    id: "3",
    title: "Inventory Management System ",
    description:
      "A C# application for managing store inventories, supporting CRUD operations for tracking products efficiently.",
    details:
      "The Inventory Management System is a robust application developed in C# to simplify store management tasks. It enables users to perform essential operations, including creating, reading, updating, and deleting product records. Each product is assigned a unique ID, ensuring accurate tracking and management. The system allows store owners to monitor stock levels, organize product details, and streamline inventory processes effectively. With a focus on ease of use, the application features a clean interface that minimizes the learning curve for non-technical users. It incorporates error-handling mechanisms to prevent data inconsistencies and ensure reliability. The project is an excellent example of how C# can be utilized to build practical solutions for small to medium-sized businesses, highlighting my ability to develop applications that address real-world business needs",
    imgs: [
      "https://i.ibb.co.com/DYFL8L7/e4d8ea0a-6068-48b1-888e-3e464ab44169.jpg",
      "https://i.ibb.co.com/QQj6yNF/deef9fee-7ea9-46ba-9240-688d8b6398ce.jpg",
      "https://i.ibb.co.com/CBYjj5m/d24a6d29-ba96-4f3a-b2ef-e8a2c9882359.jpg",
      "https://i.ibb.co.com/QHhVmv4/b6bd50fd-ac70-4976-ad75-7c8b1aa67950.jpg",
      "https://i.ibb.co.com/kcsrPcs/9755312e-08ad-45fd-ad3d-919e220122f8.jpg",
      "https://i.ibb.co.com/7GP9L0b/6912b356-7ca1-4d5d-8e50-e23aeb90dbd2.jpg",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id); // Find the project by id

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {project.imgs.length > 0 ? (
          project.imgs.map((img, index) => (
            <img key={index} src={img} alt={project.title} />
          ))
        ) : (
          <p>No images available for this project.</p>
        )}
      </div>
      <div className="text">
        <h1 className="font-bold text-2xl">{project.title}</h1>
        <p className="py-6 font-semibold text-xl">{project.description}</p>
        <p>{project.details}</p>
        <Link to="/projects">
          <button className="btn mt-5">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
