"use client";
import { useState } from "react";
import { ThemeContext } from "./context/themecontext";
import "./globals.css";
export default function RootLayout({ children }) {
const [mode,setMode]=useState("light")

  return (
    <html>
      <body className={""}>
        <button onClick={()=>{setMode("light")}}>Light</button>
        <button onClick={()=>{setMode("dark")}}>Dark</button>
        <ThemeContext.Provider value={mode}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
