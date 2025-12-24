import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#fff",
  },
  title: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "32px",
  },
  link: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#5845A4",
    color: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, box-shadow 0.3s",
    textDecoration: "underline",
  },
};

export default NotFoundPage;
