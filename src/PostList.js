import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userId}`)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    const postComponents = this.state.posts.map(p => {
      return (
          <Post key={p.id} title={p.title} body={p.body} />
      );
    });
    return (
      <section className="section">
        <h1 className="title">Posts from user #{this.props.match.params.userId}</h1>
        <div className="columns is-multiline">{postComponents}</div>
      </section>
    );
  }
}

class Post extends Component {
  render() {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="title">{this.props.title}</div>
            <h3>{this.props.body}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
