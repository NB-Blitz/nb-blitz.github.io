import React from 'react';
import './History.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class History extends React.Component {
    render() {
        return (
            <div className="History">
                <Header />

                <div className="History-Header row">
                    <div className="col-sm-10 offset-sm-1 p-5">
                        <h5>
                            <b>About Us</b>
                        </h5>
                        <p>
                            New Berlin Blitz Robotics, Team 5148, is a FIRST Robotics team based out of New Berlin, Wisconsin, that is committed to increasing the outreach of engineering programs such as FRC and its subsidiary programs. Our team follows basic FIRST principles and competition ideals including gracious professionalism and coopertition. We design and build a robot to compete in the FIRST Robotics Competition (FRC) while fostering a passion for problem solving and engineering in high school students in our area. The team gives students the opportunity to develop their collaboration, leadership, critical thinking, communication, and entrepreneurial skills, and raises awareness of STEM in our community.
                        </p>
                    </div>
                </div>

                {/* Rapid React */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5 pb-2">
                        <h1><b>Rapid React</b></h1>
                        <h5>2021-2022</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 23 - 26, 2021</h5>
                            <h5>Qualifications: Rank 34 (5-6-1)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Seven Rivers Regional</b></h4>
                            <h5>March 30 - April 2, 2021</h5>
                            <h5>Qualifications: Rank 27 (5-8-0)</h5>
                            <h5>Playoffs: Alliance 8 (0-2-0)</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2022-team.png" alt="" />
                    </div>
                </div>

                {/* Infinite Recharge II */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Infinite Recharge II</b></h1>
                        <h5>2020-2021</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Infinite Recharge at Home</b></h4>
                            <h5>Boron Group</h5>
                            <h5>Rank 22</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Game Design Challenge</b></h4>
                            <h5>Potassium Group</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2021-team.jpg" alt="" />
                    </div>
                </div>

                {/* Infinite Recharge I */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Infinite Recharge I</b></h1>
                        <h5>2019-2020</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Midwest Regional</b></h4>
                            <h5>March 4 - 7, 2020</h5>
                            <h5>Qualifications: Rank 8 (8-4-0)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <i>Cancelled due to COVID-19</i>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2020-team.jpg" alt="" />
                    </div>
                </div>

                {/* Deep Space */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Destination: Deep Space</b></h1>
                        <h5>2018-2019</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Midwest Regional</b></h4>
                            <h5>March 6 - 9, 2019</h5>
                            <h5>Qualifications: Rank 23 (5-4-0)</h5>
                            <h5>Creativity Award</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 27 - 30, 2019</h5>
                            <h5>Qualifications: Rank 26 (7-6-1)</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2019-team.jpg" alt="" />
                    </div>
                </div>

                {/* Power Up */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Power Up</b></h1>
                        <h5>2017-2018</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 21 - 24, 2018</h5>
                            <h5>Qualifications: Rank 40 (4-6-0)</h5>
                            <h5>Gracious Professionalism Award</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Seven Rivers Regional</b></h4>
                            <h5>April 4 - 7, 2018</h5>
                            <h5>Qualifications: Rank 31 (4-8-0)</h5>
                            <h5>Playoffs: Alliance 5 (0-2-0)</h5>
                            <h5>Creativity Award</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Detroit Championships</b></h4>
                            <h5><b>Daly Division</b></h5>
                            <h5>April 25 - 28, 2018</h5>
                            <h5>Qualifications: Rank 48 (5-5-0)</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2018-team.jpg" alt="" />
                    </div>
                </div>

                {/* Steamworks */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Steamworks</b></h1>
                        <h5>2016-2017</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 22 - 25, 2017</h5>
                            <h5>Qualifications: Rank 14 (7-3-0)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Seven Rivers Regional</b></h4>
                            <h5>April 12 - 15, 2017</h5>
                            <h5>Qualifications: Rank 34 (4-5-1)</h5>
                            <h5>Playoffs: Alliance 8 (0-2-0)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Rock River Regional</b></h4>
                            <h6><i>Off-Season Event</i></h6>
                            <h5>July 29, 2017</h5>

                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2017-team.jpg" alt="" />
                    </div>
                </div>

                {/* Stronghold */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-3 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Stronghold</b></h1>
                        <h5>2015-2016</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Northern Lights Regional</b></h4>
                            <h5>March 2 - 5, 2016</h5>
                            <h5>Qualifications: Rank 29 (3-5-0)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 23 - 26, 2016</h5>
                            <h5>Qualifications: Rank 15 (7-3-0)</h5>
                            <h5>Playoffs: Alliance 1 (1-2-0)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Summerfest</b></h4>
                            <h6><i>Off-Season Event</i></h6>
                            <h5>July 2, 2016</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Robofest</b></h4>
                            <h6><i>Off-Season Event</i></h6>
                            <h5>September 24, 2016</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2016-team.jpg" alt="" />
                    </div>
                </div>

                {/* Recycle Rush */}
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-3 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Recycle Rush</b></h1>
                        <h5>2014-2015</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Northern Lights Regional</b></h4>
                            <h5>Februrary 25 - 28, 2015</h5>
                            <h5>Qualifications: Rank 17 (54.37 average score)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 18 - 21, 2015</h5>
                            <h5>Qualifications: Rank 10 (73.67 average score)</h5>
                            <h5>Playoffs: Alliance 6 (105.0 average score)</h5>
                            <h5>Regional Finalists</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Robofest</b></h4>
                            <h6><i>Off-Season Event</i></h6>
                            <h5>September 26, 2015</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2015-team.jpg" alt="" />
                    </div>
                </div>

                {/* Aerial Assist */}

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-3 pb-2">
                        <hr className="mb-4" />
                        <h1><b>Aerial Assist</b></h1>
                        <h5>2013-2014</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <div className="card card-body m-2">
                            <h4><b>Wisconsin Regional</b></h4>
                            <h5>March 23 - 26, 2014</h5>
                            <h5>Qualifications: Rank 46 (3-6-1)</h5>
                            <h5>Rookie All-Star</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>FRC Championship</b></h4>
                            <h5>April 23 - 24, 2014</h5>
                            <h5>Qualifications: Rank 45 (6-4-0)</h5>
                        </div>
                        <div className="card card-body m-2">
                            <h4><b>Robofest</b></h4>
                            <h6><i>Off-Season Event</i></h6>
                            <h5>September 27, 2014</h5>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/teams/2014-team.jpg" alt="" />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default History;
