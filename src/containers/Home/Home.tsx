import * as React from "react";
import {connect} from "react-redux";
import * as userActions from "../../store/actions/user";
import {User} from "../../models/user";
import Button from "../../components/UI/Button/Button";
import classes from "./Home.scss";

interface Props {
  users: User[];
  loading: boolean;
  error: string;
  fetchUsers: any;
}

class Home extends React.Component<Props, any> {
  renderUserList = () => {
    const {error, loading, users} = this.props;

    if (loading) {
      return <p className={classes.loading}>Loading ...</p>;
    }

    if (error) {
      return <p className={classes.error}>Error: {error}</p>;
    }

    return users.map((user) => {
      return (
        <ul className={classes.user} key={user.id}>
          <li>Id: {user.id}</li>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
          <li>Website: {user.website}</li>
        </ul>
      );
    });
  };

  handleButtonClicked = () => {
    this.props.fetchUsers();
  };

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <Button className={classes.button} onClick={this.handleButtonClicked}>
          Fetch Users
        </Button>
        {this.renderUserList()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {user} = state;

  return {
    users: user.get("users"),
    loading: user.get("loading"),
    error: user.get("error"),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUsers: () => dispatch(userActions.fetchUsersStart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
