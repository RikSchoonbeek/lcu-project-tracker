import React from 'react'
import './FoldableOverview.css'


class FoldableOverviewTitleBar extends React.Component {
    // Responsible for displaying the FoldableOverview Title
    constructor(props) {
        super(props);
    }

    toggleIsOpen = () => {
        this.props.toggleFoldableOverview(this.props.overviewName)
    }

    render() {
        return (
            <div onClick={this.toggleIsOpen} className='foldable-overview-title-bar-container'>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default FoldableOverviewTitleBar