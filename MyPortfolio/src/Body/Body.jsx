import { useState } from "react";
import Header from "../Header/header";
import HomePage from "../HomePage/HomePage";
import SchedulePage from "../Schedule/SchedulePage";
import "./Body.css";

export default function Body() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="body">
      <Header onPageChange={handlePageChange} />
      <div className="main">
        {currentPage === "home" && <HomePage />}
        {currentPage === "schedule" && <SchedulePage />}
      </div>
    </div>
  );

  //1)доделать переключение между вкладками
  //2)разобраться с разрешением в фортнайте
}
