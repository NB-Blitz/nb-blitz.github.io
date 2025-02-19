import React from "react";
import "./Sponsors.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class Sponsors extends React.Component {
    render() {
        return (
            <div className="Sponsors">
                <Header />

                <div className="Sponsors-Header row">
                    <div className="col-sm-10 offset-sm-1 p-5">
                        <h5>
                            <b>Interested in Sponsoring?</b>
                        </h5>
                        <p>
                            If you are interesed in sponsoring Team 5148, please
                            refer to the sponsorship tiers below. You can donate
                            online through the link below, or if you would like
                            to speak to a team representative, please contact
                            us.
                        </p>
                        <a
                            className="btn btn-warning"
                            href="/Sponsor_Flyer_2025.pdf"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Sponsorship Tiers
                        </a>
                        <a
                            className="btn btn-warning Sponsors-btn"
                            href="https://nbps.revtrak.net/new-berlin-west-fees/west-robotics/#/list"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Donate Online
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1>
                            <b>Sponsors</b>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                        <hr />
                        <h2>
                            <b>Platinum Sponsors</b>
                        </h2>
                        <h6>( $3,500+ )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 offset-sm-1 mx-auto">
                        <img
                            className="Sponsors-sdnb-img"
                            src="/sponsors/sdnb.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/mill-rite.jpg"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/wdpi.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                        <hr />
                        <h2>
                            <b>Diamond Sponsors</b>
                        </h2>
                        <h6>( $2,500 - $3,499 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7 offset-sm-1 mx-auto">
                        <img
                            className="Sponsors-img"
                            src="/sponsors/ge-healthcare.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/rockwell.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                        <hr />
                        <h2>
                            <b>Gold Sponsors</b>
                        </h2>
                        <h6>( $1,000 - $2,499 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <img
                            className="Sponsors-img"
                            src="/sponsors/krones.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/nokia-bell-labs.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/eaton.png"
                            alt=""
                        />
                    </div>
                    <div className="col-sm-5">
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/ppg.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/nm-foundation.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/abb.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                        <hr />
                        <h2>
                            <b>Silver Sponsors</b>
                        </h2>
                        <h6>( $500 - $999 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/msoe.jpg"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/drexel.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-sm-5">
                        <img
                            className="Sponsors-img"
                            src="/sponsors/nb-plastics.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/cat.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img"
                            src="/sponsors/wem.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                        <hr />
                        <h2>
                            <b>Bronze Sponsors</b>
                        </h2>
                        <h6>( $1 - $499 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/iewc.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/batteries-plus.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/bliffert.png"
                            alt=""
                        />
                    </div>
                    <div className="col-sm-5">
                        <img
                            className="Sponsors-img"
                            src="/sponsors/alpha-omega-cleaning.png"
                            alt=""
                        />
                        <img
                            className="Sponsors-img-sm"
                            src="/sponsors/toolrite.png"
                            alt=""
                        />
                        <h3 className="Sponsors-img text-center">
                            Boy Scouts Pack 41
                        </h3>
                        <h3 className="Sponsors-img text-center">
                            Girl Scouts Troop 2042
                        </h3>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Sponsors;
