import React, { useState } from "react";
// import { buyCake } from "./../redux/index";
import { buyCake } from "./../redux/index";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNummber] = useState(1);
  return (
    <div>
      <h2>No of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNummber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
