import * as React from "react";
import {connect} from "react-redux";
import * as userActions from "../../store/actions/users";
import Button from "../../components/UI/Button/Button";
import classes from "./Home.scss";
import {withNamespaces, WithNamespaces} from "react-i18next";

interface IProps extends WithNamespaces {
  t;
  users;
  fetchUsers;
}

class Home extends React.Component<IProps, any> {
  renderUserList = () => {
    const {error, isLoading, users} = this.props.users;

    if (isLoading) {
      return <p className={classes.loading}>Loading ...</p>;
    }

    if (error) {
      return <p className={classes.error}>Error: {error}</p>;
    }

    return (
      users &&
      users.toJS().map((user) => {
        return (
          <ul className={classes.user} key={user.id}>
            <li>Id: {user.id}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
          </ul>
        );
      })
    );
  };

  handleButtonClicked = () => {
    this.props.fetchUsers();
  };

  render() {
    const {t} = this.props;

    return (
      <div>
        <h2>{t("common.home")}</h2>
        <Button className={classes.button} onClick={this.handleButtonClicked}>
          {t("button.fetchUsers")}
        </Button>
        {this.renderUserList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const users = state.get("users");
  return {
    users,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUsers: () => dispatch(userActions.fetchUsersStart()),
  };
};

export default withNamespaces(["common"])(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
