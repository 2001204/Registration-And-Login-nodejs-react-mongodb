import React, { useEffect, useState } from 'react';
import { getUserData } from '../userservice'; // Assume you have a function to get user data
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const [userData, setUserData] = useState({}); 

  const { email } = useParams();
  const sidebarWidth = 200;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUserData(email);
        console.error(user);
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [email]); // Include email in the dependency array

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');

  };

  return (
    
  
    <div>
        
        <center>
      <h1>Welcome to the Dashboard</h1>
<hr />

<div class="d-grid gap-2 d-md-flex justify-content-md-center">
  <button class="btn btn-info me-md-2" type="button" onClick={handleLogout}>Logout</button>
</div>
      </center>
      {/* {userData && Object.keys(userData).length > 0 && ( // Check if userData is not empty
        <div>
          <p>User Information:</p>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
         
        </div>
      )} */}

<div>
    <center>
    <footer>
                 <hr /><p>Created by, Dipak Wani</p> 
<p>&copy; 2023 My Dashboard. All rights reserved.</p>
{/* Add any additional footer content */}
</footer>
</center>

    </div>
    </div>




  );
}
