import { connect } from "react-redux";
import NavBar from "./NavBar";

let mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
  };
};

export default connect(mapStateToProps)(NavBar);
