import React, { Component } from "react";
import MemberOverview from '../member_overview/MemberOverview'
import ProjectIdeaOverview from '../project_idea_overview/ProjectIdeaOverview'
import './Board.css'


class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-container">
                <MemberOverview
                    memberList={this.props.memberOverview.memberList}
                    isOpen={this.props.memberOverview.isOpen}
                    toggleFoldableOverview={this.props.toggleFoldableOverview}
                />
                <ProjectIdeaOverview
                    projectIdeas={this.props.projectIdeaOverview.projectIdeas}
                    isOpen={this.props.projectIdeaOverview.isOpen}
                    toggleFoldableOverview={this.props.toggleFoldableOverview}
                />
            </div>
        )
    }
}
export default Board;