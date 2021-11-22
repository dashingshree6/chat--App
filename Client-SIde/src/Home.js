import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/rooms">
        <h1>Go to Chat page</h1>
      </Link>
    </div>
  );
}
