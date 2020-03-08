import React from 'react'


class ProjectIdeaOverviewItem extends React.Component {
    // Responsible for displaying the Project Ideas.
    constructor(props) {
        super(props);
    }

    // renderRecommendedLanguages = () => {
    //     debugger;
    //     if (this.props.projectIdea.recommended_languages.length === 0) {
    //         return null
    //     }

    //     return (
    //         <ul>
    //             {this.props.projectIdea.recommended_languages.map(
    //                 (language, index) => (<li key={index}>{language.name}</li>)
    //             )}
    //         </ul>
    //     )
    // }

    render() {
        return <div className='project-idea-overview-item-container'>
            <h2>{this.props.projectIdea.title}</h2>
            <p>description:</p>
            <p>recommended languages:</p>
            {/* {this.renderRecommendedLanguages()} */}
        </div>
    }
}

export default ProjectIdeaOverviewItem