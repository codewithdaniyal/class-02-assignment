import About from "@/components/About";  // Import About component
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "40px",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#1a202c",
          color: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <Header />
      </header>
      <main
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#333333",
            fontSize: "2rem",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          I Created the components
        </h1>
        <p
          style={{
            color: "#666666",
            fontSize: "1.1rem",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Welcome to the Home page, where I showcase my components.
        </p>

        {/* Include About Component here */}
      </main>
    </div>
  );
}
