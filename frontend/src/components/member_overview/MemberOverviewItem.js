import React from 'react'

class MemberOverviewItem extends React.Component {
    // Responsible for displaying a single member.
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='member-overview-item-container'>
            <h2>{this.props.member.username}</h2>
            <ul>
                <li>
                    <span className="text-light-bold">topics: </span>
                    Django, Python, JavaScript, React
                    </li>
            </ul>
        </div>
    }
}

export default MemberOverviewItem