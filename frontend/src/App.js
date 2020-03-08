import React from 'react';
import MainMenu from './components/main_menu/MainMenu';
import MemberOverview from './components/member_overview/MemberOverview';
import ProjectIdeaOverview from './components/project_idea_overview/ProjectIdeaOverview'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memberOverview: {
        memberList: [],
        isOpen: true,
      },
      projectIdeaOverview: {
        projectIdeas: [],
        isOpen: true,
      },
    }
  }

  componentDidMount() {
    this.getMemberList()
    this.getProjectIdeas()
  }

  getMemberList = () => {
    axios.get("http://127.0.0.1:8000/member/")
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
          <MemberOverview
            memberList={this.state.memberOverview.memberList}
            isOpen={this.state.memberOverview.isOpen}
          />
          <ProjectIdeaOverview
            projectIdeas={this.state.projectIdeaOverview.projectIdeas}
            isOpen={this.state.projectIdeaOverview.isOpen}
            toggleFoldableOverview={this.toggleFoldableOverview}
          />
        </div>
      </div>
    );
  }
}

export default App;
