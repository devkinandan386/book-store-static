import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>Email: support@bookstore.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
};

export default Contact;
