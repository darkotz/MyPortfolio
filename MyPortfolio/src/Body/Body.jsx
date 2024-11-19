import { useState } from "react";
import Header from "../Header/header";
import HomePage from "../HomePage/HomePage";
import SchedulePage from "../Schedule/SchedulePage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./Body.css";

export default function Body() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const theme = createTheme({
    colorSchemes: {
      light: true,
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <div className="body">
        <Header onPageChange={handlePageChange} />
        <div className="main">
          {currentPage === "home" && <HomePage />}
          {currentPage === "schedule" && <SchedulePage />}
        </div>
      </div>
    </ThemeProvider>
  );

  //1)доделать переключение между вкладками
  //2)разобраться с разрешением в фортнайте
}
