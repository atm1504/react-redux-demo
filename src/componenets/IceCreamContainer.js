import React from "react";
// import { buyCake } from "./../redux/index";
import { buyIceCream } from "./../redux/index";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>No of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
