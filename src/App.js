import React from 'react';
import './App.css';
import ReadContainer from './containers/Read';
import Header from './components/Header';
import NavContainer from './containers/Nav';
import ControlContainer from './containers/Control';
import CreateContainer from './containers/Create';
import { connect } from 'react-redux';
import UpdateContainer from './containers/Update';

function App(props) {
  let article = null;
  if (props.mode === 'READ' || props.mode === 'WELCOME') {
    article = <ReadContainer></ReadContainer>;
  } else if (props.mode === 'CREATE') {
    article = <CreateContainer></CreateContainer>;
  } else if (props.mode === 'UPDATE') {
    article = <UpdateContainer></UpdateContainer>;
  }
  return (
    <div className="App">
      <Header></Header>
      <NavContainer></NavContainer>
      <ControlContainer></ControlContainer>
      {article}
    </div>
  );
}

export default connect(function (state) {
  return {
    mode: state.mode,
  };
})(App);
