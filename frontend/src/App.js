import React from 'react';
import MainMenu from './components/main_menu/MainMenu';
import MemberOverview from './components/member_overview/MemberOverview';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memberList: [],
      progressListList: [],
    }
  }

  componentDidMount() {
    this.getMemberList()
    this.getProgresListList()
  }

  getMemberList = () => {
    axios.get("http://127.0.0.1:8000/member/")
      .then((response) => {
        // handle success
        console.log(response)
        const memberList = response.data.member_list
        this.setState({ memberList: memberList })
      })
      .catch((error) => {
        // TODO handle error
        alert("To developers: Unhandled error occured in MemberOverview.getMemberList(). Error handling needs to be implemented here.")
        console.log(error);
      })
  }

  getProgresListList = () => {
    axios.get("http://127.0.0.1:8000/member_progress/")
      .then((response) => {
        // handle success
        console.log(response)
        const progressListList = response.data.progress_lists
        this.setState({ progressListList: progressListList })
      })
      .catch((error) => {
        // TODO handle error
        alert("To developers: Unhandled error occured in MemberOverview.getMemberList(). Error handling needs to be implemented here.")
        console.log(error);
      })
  }

  render() {
    return (
      <div className="app-container">
        <MainMenu />
        <MemberOverview memberList={this.state.memberList} />
        {/* <ProgressListOverview progressListList={this.state.progressListList} /> */}
      </div>
    );
  }
}

export default App;
