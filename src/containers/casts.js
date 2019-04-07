import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { credit } from "../actions";

class Casts extends Component {
  componentDidMount() {
    this.props.credit(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.credit(nextProps.params.id);
      ReactDOM.findDOMNode(this).scrollIntoView(true, "smooth");
    }
  }

  render() {
    const { credits } = this.props;

    return (
      <div>
        <div className="item">
          <p>{credits.casts}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    credits: state.credit
  };
};

export default connect(
  mapStateToProps,
  { credit }
)(Casts);
