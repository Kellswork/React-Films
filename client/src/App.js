import React, { Component } from "react";
import axios from "axios";
import Nav from "./Film/Nav";
import Film from "./Film/Film";
import FilmList from "./Film/FilmList";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      isLoading: true,
      errors: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/film")
      .then(response => {
        this.setState({
          films: response.data,
          isLoading: false
        });
        console.log("Response ", response);
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // addToSavedList = movie => {

  // };

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            {" "}
            <Film />
          </Route>
          <Route
            exact
            path="/film"
            render={props =>
              this.state.isLoading === true ? (
                <p>Loading films...</p>
              ) : (
                <FilmList films={this.state.films} {...props} />
              )
            }
          />
          {/* <Route path='/friends/:friendId' render={(props) => <ViewFriend {...props} friends={friends} />} />  */}
        </Switch>
        {/* Hi, Build Me Pleasee! */}
      </div>
    );
  }
}
