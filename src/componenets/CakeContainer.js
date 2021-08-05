import React from "react";
// import { buyCake } from "./../redux/index";
import { buyCake } from "./../redux/index";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>No of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
