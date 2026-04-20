import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Student Management System</h1>
      <p>Welcome to the Student Management System. This platform helps you manage student records easily.</p>
      
      <h2>Features</h2>
      <ul>
        <li>Register new students</li>
        <li>Manage student profiles</li>
        <li>Track attendance and grades</li>
      </ul>

      <br />
      <Link to="/register"><button>Get Started</button></Link>
    </div>
  );
};

export default Home;
