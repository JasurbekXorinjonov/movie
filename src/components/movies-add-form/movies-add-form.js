import { Component } from "react";

import "./movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHendlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormhendler = (e) => {
    e.preventDefault();
    this.props.addForm({ name: this.state.name, viewers: this.state.views });
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movie-add-form ">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormhendler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qnaday kino?"
            onChange={this.changeHendlerInput}
            name="name"
            value={name}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan?"
            onChange={this.changeHendlerInput}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
