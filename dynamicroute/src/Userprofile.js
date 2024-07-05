import React from 'react';
import { useParams ,Link } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  // Simulated user data
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  // Find the user by userId
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <br/>
      <Link to={'/'}>Back</Link>
    </div>
  );
}

export default UserProfile;
