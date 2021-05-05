import { useSelector, useDispatch } from "react-redux";

import Main from "../../helper/main/main";
import { authActions } from "../../store/reducers/authSlice";

const Home = (props) => {

  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  const username = useSelector((state) => state.authReducer.username);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login({ username: "Jagdish Chandra Basu" }));
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Main miniMode={props.miniMode}>
      {isAuthenticated ? (
        <p>I am Home....Hi {username}</p>
      ) : (
        <h1>Please sign in</h1>
      )}
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </Main>
  );
};

export default Home;
