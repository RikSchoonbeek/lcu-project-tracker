import React from 'react'
import FoldableOverview from '../foldable_overview/FoldableOverview'
import ProjectIdeaOverviewItem from './ProjectIdeaOverviewItem';
import './ProjectIdeaOverview.css'


class ProjectIdeaOverview extends React.Component {
    // Responsible for displaying the Project Ideas.
    constructor(props) {
        super(props);
    }

    renderProjectIdeaList = () => {
        const listItems = this.props.projectIdeas.map((projectIdea, index) => (
            <ProjectIdeaOverviewItem projectIdea={projectIdea} key={index} />
        ))
        return listItems
    }

    render() {
        const projectIdeaList = this.renderProjectIdeaList()
        return (
            <FoldableOverview
                title="Project ideas"
                overviewName="projectIdea"
                isOpen={this.props.isOpen}
                toggleFoldableOverview={this.props.toggleFoldableOverview}
            >
                {projectIdeaList}
            </FoldableOverview>
        )
    }
}

export default ProjectIdeaOverview