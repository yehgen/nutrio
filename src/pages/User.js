import TextField from '@mui/material/Button';
import Button from '@mui/material/Button'
import '../User.css';

// For user information input and editing
const User = () => {
  return (
    <>
      <div className = "header">
        <h1>User Information</h1>
      </div>
      <div className = "container">
        <h3>Name</h3>
        <form noValidate autoComplete = 'off'>
          <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" />
        </form>
      </div>
      <div className = "container">
        <h3>Age</h3>
        <form noValidate autoComplete = 'off'>
          <TextField 
          id="outlined-basic" 
          label="Age" 
          variant="outlined"
          />
        </form>
      </div>
      <div className = "container">
        <h3>Gender</h3>
        <form noValidate autoComplete = 'off'>
          <TextField 
          id="outlined-basic" 
          label="Age" 
          variant="outlined"
          />
        </form>
      </div>
      <div className = "container">
        <h3>Height</h3>
        <form noValidate autoComplete = 'off'>
          <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" />
        </form>
      </div>
      <div className = "container">
        <h3>Weight</h3>
        <form noValidate autoComplete = 'off'>
          <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" />
        </form>
      </div>
      <div className = "submit">
        <Button variant="contained">submit</Button>
      </div>
    </>
  );
  };
  
  export default User;