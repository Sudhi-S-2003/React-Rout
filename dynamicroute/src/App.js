import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './userlist';
import UserProfile from './Userprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
