import React from 'react'
import FoldableOverview from '../foldable_overview/FoldableOverview'
import MemberOverviewItem from './MemberOverviewItem';
import './MemberOverview.css'


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
        const memberListItems = this.props.memberList.map(member => (
            <MemberOverviewItem
                member={member.user}
                projectList={member.project_set}
                key={member.id}
            />
        ))
        return memberListItems
    }

    render() {
        const memberList = this.renderMemberList()
        return (
            <FoldableOverview
                title="Members"
                overviewName="member"
                isOpen={this.props.isOpen}
                toggleFoldableOverview={this.props.toggleFoldableOverview}
            >
                {memberList}
            </FoldableOverview>
        )
    }
}

export default MemberOverview