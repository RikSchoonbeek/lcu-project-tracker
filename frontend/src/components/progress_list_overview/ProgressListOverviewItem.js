import React from 'react'

class ProgresListOverviewItem extends React.Component {
    // Responsible for displaying a single Progress List in overview.
    constructor(props) {
        super(props);
    }

    renderProgressListItems = () => {
        const items = this.props.progressList.progresslistitem_set.map((item, index) => (
            <li>{item.title}</li>
        ))
        return <ul>{items}</ul>
    }

    render() {
        const progressListItems = this.renderProgressListItems()
        return <div className='progress-list-overview-item-container'>
            <h2>Progress list of: {this.props.progressList.member.user.username}</h2>
            {progressListItems}
        </div>
    }
}

export default ProgresListOverviewItem