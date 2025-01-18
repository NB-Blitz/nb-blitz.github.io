import React from "react";
import "./Mentors.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class Mentors extends React.Component {
    render() {

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


                <div className="row">
                    <div className="col-sm-2 offset-sm-2 pt-3">
                        <h3>
                            <b><br/>Advisors</b>
                        </h3>
                        <hr />
                    </div>

                    <div className="col-sm-2 pt-3">
                        <h3>
                            <b>Hardware Mentors</b>
                        </h3>
                        <hr />
                    </div>

                    <div className="col-sm-2 pt-3">
                        <h3>
                            <b>Software Mentors</b>
                        </h3>
                        <hr />
                    </div>
                    <div className="col-sm-2 pt-3">
                        <h3>
                            <b>Buisness Mentors</b>
                        </h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2 offset-sm-2">
                        <ul>
                            <li>Jeff Pahl</li>
                            <li>BobbieJo Koski</li>
                        </ul>
                        
                    </div>

                    <div className="col-sm-2">
                        <ul>
                            <li>Robert Schweigel</li>
                            <li>Dave Ferguson</li>
                            <li>Glen Groeschel</li>
                            <li>Cat Vink</li>
                            <li>Kate Zelinger</li>
                            <li>Tony Bishop</li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <ul>
                            <li>David Schulz</li>
                            <li>Max Kallenberger</li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <ul>
                            <li>Angela Spielman</li>
                            <li>Janet Shulz</li>
                        </ul>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                

                <Footer />
            </div>
        );
    }
}

export default Mentors;
