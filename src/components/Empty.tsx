import React from "react";
import emptyWhite from "../assets/empty-white.png";
import emptyDark from "../assets/empty-dark.png";

type Props = { theme: "dark" | "white" };

export default function Empty({ theme }: Props) {
  return (
    <div className="empty">
      {theme === "white" ? (
        <img src={emptyWhite} alt="" />
      ) : (
        <img src={emptyDark} alt="" />
      )}
      <p className="empty__text">Empty...</p>
    </div>
  );
}
