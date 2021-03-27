import React from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { setSideBarState } from "../redux/actions";

const Sidebar = ({ misc, setSideBarState }) => {
  return (
    <Grid columns={1}>
      <Grid.Column></Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="left"
            icon="labeled"
            inverted
            onHide={() => setSideBarState(!misc)}
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

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

function mapStateToProps({ misc }) {
  return { misc };
}

export default connect(mapStateToProps, { setSideBarState })(SideBar);
