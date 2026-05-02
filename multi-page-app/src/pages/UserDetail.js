import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Ranjith Kumar", email: "ranjith@example.com" },
  { id: 2, name: "Vinoth Kumar", email: "vinoth@example.com" },
  { id: 3, name: "Eshanth", email: "eshanth@example.com" }
];

function UserDetail() {
  const { id } = useParams();          
  const navigate = useNavigate();      

  const user = users.find(
    (u) => u.id === parseInt(id)
  );

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <button 
        onClick={() => navigate("/users")}
        style={{ marginTop: "10px" }}
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;