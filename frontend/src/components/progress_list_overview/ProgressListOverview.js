import React from 'react'
import ProgressListOverviewItem from './ProgressListOverviewItem'

class ProgresListOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    renderProgressListOverview = () => {
        const progressListOverviewItems = this.props.progressListList.map((progressList, index) => (
            <ProgressListOverviewItem progressList={progressList} key={index} />
        ))
        return progressListOverviewItems
    }

    render() {
        const progressListOverview = this.renderProgressListOverview()
        return <div className='progress-list-overview-container'>
            <h1>Progess of members</h1>
            <div className='progress-list-overview-items-container'>{progressListOverview}</div>
        </div>
    }
}

export default ProgresListOverview