import React, { Component } from "react";

class TodoEditor extends Component{
    state = {
        name: ''
    }

    handleChange = e => {
        this.setState({ name: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.name);
        this.setState({ name: '' });
    }
    render() {
        return (
            <form className="TodoEditor" onSubmit={this.handleSubmit}>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
            <h2>Contacts</h2>
          <ul>
            <li>
              <p>{this.state.name}</p>
            </li>
          </ul>
                <button type='submit'>Create</button>
            </form>
        )
    }
}
export default TodoEditor;