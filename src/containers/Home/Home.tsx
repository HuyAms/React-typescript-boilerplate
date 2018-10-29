import * as React from "react";
import {connect} from "react-redux";
import * as userActions from "../../store/actions/user";
import {User} from "../../models/user";

interface Props {
  users: User[];
  loading: boolean;
  error: string;
  fetchUsers: any;
}

class Home extends React.Component<Props, any> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUserList(user: User) {
    return (
      <ul key={user.id}>
        <li>Id: {user.id}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
        <li>Website: {user.website}</li>
      </ul>
    );
  }

  render() {
    const {error, loading, users} = this.props;

    if (loading) {
      return <p>Loading ...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h2>Home</h2>
        {users.map(this.renderUserList)}
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
