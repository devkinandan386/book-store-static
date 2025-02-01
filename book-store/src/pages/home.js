import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to Our Book Store 📚</h2>
      <p>Find the best books at affordable prices!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  }
};

export default Home;
