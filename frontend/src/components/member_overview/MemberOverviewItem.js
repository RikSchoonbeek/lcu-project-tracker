import React from 'react'

class MemberOverviewItem extends React.Component {
    // Responsible for displaying a single member.
    constructor(props) {
        super(props);
    }

    renderProjects = () => {
        if (this.props.projectList.length === 0) {
            return <ul><li>No projects</li></ul>
        } else {
            return <ul>
                {this.props.projectList.map(project => {
                    return <li key={project.id}>{project.title}</li>
                })}
            </ul>
        }
    }

    render() {
        return <div className='member-overview-item-container'>
            <div className="member-overview-item-header">
                <img src="http://localhost:3000/img/bad-ass-squirrels/bad_ass_squirrel_1.jfif" />
                <h2>{this.props.member.username}</h2>
            </div>

            <p>Projects:</p>
            {this.renderProjects()}
        </div>
    }
}

export default MemberOverviewItem