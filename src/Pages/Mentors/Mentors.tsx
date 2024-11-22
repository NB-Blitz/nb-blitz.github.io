import React from "react";
import "./Mentors.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MentorCard from "./MentorCard";

class Mentors extends React.Component {
    render() {
        var placeholder = "/mentors/placeholder.png";

        return (
            <div className="Mentors">
                <Header />

                <div className="Mentors-Header row">
                    <div className="col-sm-10 offset-sm-1 p-5">
                        <h5>
                            <b>Mentors</b>
                        </h5>
                        <p>
                            Our team is mentored by amazing members of our
                            community. If you're interested in being a mentor on
                            our team, please{" "}
                            <a href="mailto:5148nbblitz@gmail.com">
                                contact us
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* Advisors */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1>
                            <b>Advisors</b>
                        </h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Michael Krack" img={placeholder} />
                    </div>
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="BobbieJo Koski" img={placeholder} />
                    </div>
                </div>

                {/* Mechanical Mentors */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1>
                            <b>Mechanical Mentors</b>
                        </h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Jeff Pahl" img={placeholder} />
                    </div>
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Robert Schweigel" img={placeholder} />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Dave Ferguson" img={placeholder} />
                    </div>
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Paul Zelinger" img={placeholder} />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Phill Barufkin" img={placeholder} />
                    </div>
                </div>

                {/* Electrical Mentors */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1>
                            <b>Electrical Mentors</b>
                        </h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Pete Thomas" img={placeholder} />
                    </div>
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Scott Doyle" img={placeholder} />
                    </div>
                </div>

                {/* Programming Mentors */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1>
                            <b>Programming Mentors</b>
                        </h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="John Lambert" img={placeholder} />
                    </div>
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="David Schulz" img={placeholder} />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Rachel Lewis" img={placeholder} />
                    </div>
                </div>

                {/* Business Mentors */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1>
                            <b>Business Mentors</b>
                        </h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Angela Spielman" img={placeholder} />
                    </div>
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Janet Schulz" img={placeholder} />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-5 pb-2">
                        <MentorCard name="Lori Doyle" img={placeholder} />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Mentors;
