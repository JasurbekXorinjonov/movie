import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  updateTermHendler = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.updateTermHendler(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        onChange={this.updateTermHendler}
        value={this.state.term}
      />
    );
  }
}

export default SearchPanel;
