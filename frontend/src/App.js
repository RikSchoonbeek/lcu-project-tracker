import React from 'react'
import { Switch, Route } from "react-router-dom"
import Board from './components/board/Board'
import Hello from './components/hello'
import Activate from "./components/user_authentication/Activate"
import Login from "./components/user_authentication/Login"
import Signup from "./components/user_authentication/Signup"
import MainMenu from './components/main_menu/MainMenu'
import UserAuthentication from './components/user_authentication/UserAuthentication'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memberOverview: {
        memberList: [],
        isOpen: false,
      },
      projectIdeaOverview: {
        projectIdeas: [],
        isOpen: true,
      },
      member: {
        id: null,
        tokenStored: false,
        username: null,
      }
    }
  }

  componentDidMount() {
    this.getMemberList()
    this.getProjectIdeas()
  }

  checkLocalStorageForAuthToken = () => {
    // This method is responsible for checking if a refresh token is stored in
    // local storage.
  }

  getMemberList = () => {
    axios.get("http://127.0.0.1:8000/member/?with_project_data=true")
      .then((response) => {
        // handle success
        console.log(response)
        const memberList = response.data.member_list
        this.setState(prevState => ({
          ...prevState,
          memberOverview: {
            ...prevState.memberOverview,
            memberList: memberList,
          }
        }))
      })
      .catch((error) => {
        // TODO handle error
        alert("To developers: Unhandled error occured in App.getMemberList(). Error handling needs to be implemented here.")
        console.log(error);
      })
  }

  getProjectIdeas = () => {
    axios.get("http://127.0.0.1:8000/project/")
      .then((response) => {
        // handle success
        console.log(response)
        const projectIdeas = response.data.project_ideas
        this.setState(prevState => ({
          ...prevState,
          projectIdeaOverview: {
            ...prevState.projectIdeaOverview,
            projectIdeas: projectIdeas,
          }
        }))
      })
      .catch((error) => {
        // TODO handle error
        alert("To developers: Unhandled error occured in App.getProjectIdeas(). Error handling needs to be implemented here.")
        console.log(error);
      })
  }

  toggleFoldableOverview = (overViewName) => {
    // Toggles the isOpen value of one of the overviews (between true / false)
    // 
    // - param 'overViewName' (string): the name of the overview, currently
    //                                  "member" or "projectIdea", used to determine
    //                                  what part of the state needs to be updated.
    let stateKey
    if (overViewName === "member") {
      stateKey = "memberOverview"
    } else if (overViewName === "projectIdea") {
      stateKey = "projectIdeaOverview"
    } else {
      console.error(
        `Error in App.toggleFoldableOverview: unexpected value for overViewName argument: ${overViewName}`)
    }

    this.setState(prevState => ({
      ...prevState,
      [stateKey]: {
        ...prevState[stateKey],
        isOpen: !prevState[stateKey].isOpen,
      }
    }))
  }

  render() {
    return (
      <div className="app-container">
        <MainMenu />
        <div className="app-overview-container">
          <UserAuthentication />

          <Switch>
            <Route exact path={"/login/"} component={Login} />
            <Route exact path={"/signup/"} component={Signup} />
            <Route exact path={"/activate/:uid/:token"} component={Activate} />
            <Route exact path={"/hello/"} component={Hello} />
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Board
                  memberOverview={this.state.memberOverview}
                  projectIdeaOverview={this.state.projectIdeaOverview}
                  toggleFoldableOverview={this.toggleFoldableOverview}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
