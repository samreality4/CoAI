import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { connect } from "react-redux";
import { setMenuBarState } from "../../redux/actions/index";

//TODO not working
const MenuBar = ({ misc, setMenuBarState }) => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      direction="left"
      icon="labeled"
      inverted
      onHide={() => setMenuBarState(!misc)}
      vertical
      visible={misc}
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        AlgoSpeedTest
      </Menu.Item>
    </Sidebar>
  );
};

function mapStateToProps({ misc }) {
  return { misc };
}

export default connect(mapStateToProps, { setMenuBarState })(MenuBar);
