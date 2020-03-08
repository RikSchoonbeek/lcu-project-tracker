import React from 'react'
import FoldableOverviewTitleBar from './FoldableOverviewTitleBar'

import './FoldableOverview.css'

class FoldableOverview extends React.Component {
    // Responsible for displaying the Project Ideas.
    constructor(props) {
        super(props);
    }

    getChildrenContainerClassName = () => {
        const classNameBase = 'foldable-overview-children-container'
        if (this.props.isOpen) {
            return classNameBase + ' min-width-400px width-40vw'
        } else {
            return classNameBase + ' display-none'
        }
    }

    render() {
        const childrenContainerClassName = this.getChildrenContainerClassName()
        return <div className='foldable-overview-container'>
            <div className={childrenContainerClassName}>
                {this.props.children}
            </div>
            <FoldableOverviewTitleBar
                overviewName={this.props.overviewName}
                text={this.props.title}
                toggleFoldableOverview={this.props.toggleFoldableOverview}
            />
        </div>
    }
}

export default FoldableOverview