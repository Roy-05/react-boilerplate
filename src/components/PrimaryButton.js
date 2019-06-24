import React from 'react';
import {withRouter} from 'react-router-dom';

class PrimaryButton extends React.Component {
    constructor(props) {
      super(props);
      this.redirect = this.redirect.bind(this);
    }
  
    redirect(){
      this.props.history.push("/about");
    }
  
    render() {
      return (
        <span className = "button-container">
          <button className = "primary-button" onClick={this.redirect}>{this.props.ButtonText}</button>
        </span>
      )
    }
  }

  
export default withRouter(PrimaryButton);