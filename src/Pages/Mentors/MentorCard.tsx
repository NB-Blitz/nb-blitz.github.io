import React from "react";
import "./MentorCard.css";

class MentorCard extends React.Component<{ name: string; img: string }> {
    render() {
        return (
            <div className="card card-body">
                <div className="row">
                    <div className="col-sm-7">
                        <h2>
                            <b>{this.props.name}</b>
                        </h2>
                        {/*<p>{this.props.company}</p>*/}
                    </div>
                    <div className="col-sm-4">
                        <img
                            className="Mentors-img"
                            src={this.props.img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MentorCard;
