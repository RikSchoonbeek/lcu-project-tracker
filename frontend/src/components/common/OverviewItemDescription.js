import React from 'react'
import './OverviewItemDescription.css'


class OverviewItemDescription extends React.Component {
    // Responsible for displaying description, which can be opened/closed
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    getDescriptionTextDivClassName = () => {
        const baseClassName = "overview-item-description-text-container"
        debugger;
        if (this.state.isOpen) {
            return baseClassName + " display-block"
        } else {
            return baseClassName + " display-none"
        }
    }

    getTitleText = () => {
        if (this.state.isOpen) {
            return this.props.title + " (hide)"
        } else {
            {
                return this.props.title + " (show)"
            }
        }
    }

    toggleDisplayDescriptionText = () => {
        this.setState(prevstate => ({
            isOpen: !prevstate.isOpen,
        }))
    }

    render() {
        const descriptionTextDivClassName = this.getDescriptionTextDivClassName()
        return (
            <div className="overview-item-description-container">
                <p onClick={this.toggleDisplayDescriptionText}>
                    <span>{this.getTitleText()}</span>
                </p>
                <p className={descriptionTextDivClassName}>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default OverviewItemDescription