// Main structural outline with navigation
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Layout = () => {
  return (
    <>
      <div className="head">
      <Link to="/"><h1 className="nutrioHead">Nutrio</h1></Link>
      </div>
      <nav className="navigation">
        <div className="tabs">
          <Link to="/"><Button variant="contained" disableElevation className="navButton">Home</Button></Link>
          <Link to="/food"><Button variant="contained" disableElevation className="navButton">Food</Button></Link>
          <Link to="/user"><Button variant="contained" disableElevation className="navButton">User</Button></Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;