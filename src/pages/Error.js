import React from "react";
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>This page has left the building... sorry.</h1>
        <Link to="/" className="btn btn-primary">Try Here</Link>
      </div>
    </section>
  );
}
