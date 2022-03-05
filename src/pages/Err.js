import { useLocation, Link } from "react-router-dom";

// 404 error page for when invalid url is reached

const Err = () => {
  // const { state } = this.props.location
  const {state} = useLocation();
  const {id} = state;

  return (
    <div>
      <h1>404</h1>
      <div className = "title">
        <h1>Hello, Brock!</h1>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Err;