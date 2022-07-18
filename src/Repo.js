import React from "react";
import "../src/components/mockup.css"

class Repo extends React.Component {
    render() {
        const {
            repoName,
            repoDescription,
            numberOfStars,
            numberOfIssues,
            ownerUsername,
            ownerAvatar,
            date
        } = this.props;
        return (
            <div className="repo">
                <div className="ui small image">
                    <img  src={ownerAvatar} alt={ownerUsername} />
                </div>
                <div className="user-content">
                    <div className="user-name">{repoName}</div>
                    <div className="description">{repoDescription}</div>
                    <div className="ui labeled button" tabIndex={0}>
                        <div className="ui green button">
                            <i className="star icon" /> Stars:
                        </div>
                        <a className="ui basic greeen left pointing label">
                            {numberOfStars}
                        </a>
                    </div>
                    <div className="ui labeled button space" tabIndex={0}>
                        <div className="ui red blue button">
                            <i className="fork icon" /> Issues:
                        </div>
                        <a className="ui basic left pointing red label">
                            {numberOfIssues}
                        </a>
                        <div className="time">Submitted 30 days ago (relative to {date}) by {ownerUsername}</div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Repo;
