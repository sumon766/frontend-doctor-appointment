import React from "react";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={`${s["header-content"]} row`}>
        Logo
      </div>
    </header>
  );
}
