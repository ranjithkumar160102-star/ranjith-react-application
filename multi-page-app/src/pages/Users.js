import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Ranjith Kumar", email: "ranjith@example.com" },
  { id: 2, name: "Vinoth Kumar", email: "vinoth@example.com" },
  { id: 3, name: "Eshanth", email: "eshanth@example.com" }
];

function Users() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;