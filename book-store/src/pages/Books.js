import React from "react";

const books = [
  { 
    id: 1, 
    title: "The Great Gatsby", 
    price: "$10", 
    imageUrl: "https://covers.openlibrary.org/b/id/10585948-L.jpg" // Image URL for "The Great Gatsby"
  },
  { 
    id: 2, 
    title: "1984", 
    price: "$12", 
    imageUrl: "https://covers.openlibrary.org/b/id/15330268-L.jpg" // Image URL for "1984"
  },
  { 
    id: 3, 
    title: "To Kill a Mockingbird", 
    price: "$8", 
    imageUrl: "https://covers.openlibrary.org/b/id/9878887-L.jpg" // Image URL for "To Kill a Mockingbird"
  },
];

const Books = () => {
  const handleBuy = (book) => {
    alert(`You bought: ${book.title}`);
    // Add your buying functionality here, like sending the book info to a checkout page
  };

  return (
    <div style={styles.container}>
      <h2>Available Books</h2>
      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.item}>
            <img src={book.imageUrl} alt={book.title} style={styles.image} />
            <div style={styles.details}>
              <strong>{book.title}</strong> - {book.price}
            </div>
            <button onClick={() => handleBuy(book)} style={styles.buyButton}>
              Buy Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "20px",
    fontSize: "18px",
    borderBottom: "1px solid gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100px",  // Adjust the size as needed
    height: "150px", // Adjust the size as needed
    marginRight: "20px",
  },
  details: {
    flex: 1,
  },
  buyButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Books;
