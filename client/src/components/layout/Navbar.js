import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Modal, TextInput, Button} from 'react-materialize'





class Navbar extends Component {


  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
          </div>
          <Modal header="Modal Header" fixedFooter trigger={<Button>Spot Something</Button>}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
<TextInput placeholder="Name" />
<TextInput placeholder="Address" />
<TextInput placeholder="Phone (required)" />
<TextInput placeholder="Description" />
<TextInput placeholder="Description" />
</Modal>
        </nav>
      </div>
    );
  }
}
export default Navbar;