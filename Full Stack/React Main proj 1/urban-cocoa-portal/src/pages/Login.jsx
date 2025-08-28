export default function Login() {
  return (
    <div style={{
        width: "400px",
        height: "400px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        textAlign: "center",
        border: "1px solid black",
        boxSizing: "border-box",
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}}>
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: "10px"}}>
          <input type="text" placeholder="Username" style={{ padding: "5px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="password" placeholder="Password" style={{ padding: "5px" }} />
        </div>
        <button style={{ background: "#5b3a29", color: "white", padding: "5px 10px", border: "none" }}>Login</button>
      </form>
    </div>
  );
}
