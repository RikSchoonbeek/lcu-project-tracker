import React from 'react'
import OverviewItemDescription from '../common/OverviewItemDescription'

class ProjectIdeaOverviewItem extends React.Component {
    // Responsible for displaying the Project Ideas.
    constructor(props) {
        super(props);
    }

    renderRecommendedFrameworks = () => {
        if (this.props.projectIdea.recommended_frameworks.length === 0) {
            return <ul><li>No recommendations</li></ul>
        }

        return (
            <ul>
                {this.props.projectIdea.recommended_frameworks.map(
                    (framework, index) => (<li key={index}>{framework.name}</li>)
                )}
            </ul>
        )
    }

    renderRecommendedLanguages = () => {
        if (this.props.projectIdea.recommended_languages.length === 0) {
            return <ul><li>No recommendations</li></ul>
        }

        return (
            <ul>
                {this.props.projectIdea.recommended_languages.map(
                    (language, index) => (<li key={index}>{language.name}</li>)
                )}
            </ul>
        )
    }

    renderSkillLevel = () => {
        if (this.props.skill_level) {
            return <ul><li>{this.props.skill_level.level}</li></ul>
        } else {
            return <ul><li>No recommendation</li></ul>
        }
    }

    render() {
        return <div className='project-idea-overview-item-container'>
            <h2>{this.props.projectIdea.title}</h2>
            <OverviewItemDescription
                text={this.props.projectIdea.description}
                title="Description:"
            />
            <p>Skill level:</p>
            {this.renderSkillLevel()}
            <p>Languages:</p>
            {this.renderRecommendedLanguages()}
            <p>Frameworks:</p>
            {this.renderRecommendedFrameworks()}
        </div>
    }
}

export default ProjectIdeaOverviewItem