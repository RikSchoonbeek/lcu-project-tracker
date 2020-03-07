import React from 'react'
import MemberOverviewItem from './MemberOverviewItem';

class MemberOverview extends React.Component {
    // Responsible for displaying the members.
    // I imagine this shows a list/tile view with possible a self choosen member
    // photo, and a bit of info. Yet to be determined what, but i think something
    // like:
    //  - what they are currently working on
    //  - current topics of interest
    //  - recently finished project
    //  - clicking them shows their detail view (projects done, interests, 
    //    possibly future steps, etc.)
    constructor(props) {
        super(props);
    }

    renderMemberList = () => {
        const memberListItems = this.props.memberList.map((member, index) => (
            <MemberOverviewItem member={member.user} key={index} />
        ))
        return memberListItems
    }

    render() {
        const memberList = this.renderMemberList()
        return <div className='member-overview-container'>
            <h1>Members</h1>
            <div className='member-overview-items-container'>{memberList}</div>
        </div>
    }
}

export default MemberOverview