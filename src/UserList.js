import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    const userComponents = this.state.users.map(u => {
      return (
          <User key={u.id} id={u.id} name={u.name} email={u.email} />
      );
    });
    return (
      <section className="section">
        <div className="columns is-multiline">{userComponents}</div>
      </section>
    );
  }
}

const User = props => {
  return (

    <div className="column is-4">
      <Link to={`/posts/${props.id}`}>
      <div className="card">
        <div className="card-content">
          <p className="title">{props.name}</p>
          <p className="subtitle">{props.email}</p>
        </div>
      </div>
      </Link>
    </div>

  );
};

export default UserList;
