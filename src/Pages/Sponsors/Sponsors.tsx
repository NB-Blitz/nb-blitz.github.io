import React from 'react';
import './Sponsors.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

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
                            If you are interesed in sponsoring Team 5148, please refer to the sponsorship brochure below.  If you would like to speak to a team representative, please contact us.
                        </p>
                        <a className="btn btn-warning" href="https://drive.google.com/open?id=0ByXzWfmcNxVfTjZKUFM2cVhSTmNKaEt1OC1mZkdiVHNtQzVz">
                            Sponsorship Brochure
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-5">
                        <h1><b>Sponsors</b></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                        <hr />
                        <h2><b>Gold Sponsors</b></h2>
                        <h6>( $2,500+ )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <img className="Sponsors-img" src="/sponsors/sdnb.png" alt="" />
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/sponsors/komatsu.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/rockwell.png" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                    <hr />
                        <h2><b>Silver Sponsors</b></h2>
                        <h6>( $1,000 - $2,499 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <img className="Sponsors-img" src="/sponsors/kronos.png" alt="" />
                        <img className="Sponsors-img-sm" src="/sponsors/br.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/lapp.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/pieper.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/yaskawa.png" alt="" />
                        <h1 className="Sponsors-img text-center">Claudia Egan Law Offices</h1>
                    </div>
                    <div className="col-sm-5">
                        <img className="Sponsors-img" src="/sponsors/ge.png" alt="" />
                        <img className="Sponsors-img-sm" src="/sponsors/oe.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/ibm.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/ace.png" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                    <hr />
                        <h2><b>Bronze T-III Sponsors</b></h2>
                        <h6>( $500 - $999 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 offset-sm-1">
                        <img className="Sponsors-img" src="/sponsors/demantic.gif" alt="" />
                        <img className="Sponsors-img" src="/sponsors/marsh.png" alt="" />
                        <img className="Sponsors-img-sm" src="/sponsors/sleep.jpg" alt="" />
                        <img className="Sponsors-img" src="/sponsors/mathnasium.png" alt="" />
                    </div>
                    <div className="col-sm-4">
                        <img className="Sponsors-img" src="/sponsors/crossroads.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/milwaukee.png" alt="" />
                    </div>
                    <div className="col-sm-3">
                        <img className="Sponsors-img-sm" src="/sponsors/amp.png" alt="" />
                        <img className="Sponsors-img" src="/sponsors/icp.png" alt="" />
                        <img className="Sponsors-img-sm" src="/sponsors/msoe.jpg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 offset-sm-1">
                        <h3 className="Sponsors-img text-center">Timothy Kieselhorst</h3>
                        <h3 className="Sponsors-img text-center">MRA the Management Association, Inc.</h3>
                        <h3 className="Sponsors-img text-center">Robert and Catherine Schweigel</h3>
                        <h3 className="Sponsors-img text-center">Tammie and Clifford Ciszewski</h3>
                    </div>
                    <div className="col-sm-4">
                        <h3 className="Sponsors-img text-center">Travis Gensch</h3>
                        <h3 className="Sponsors-img text-center">T. and C. Schmear</h3>
                        <h3 className="Sponsors-img text-center">Michael Rahmes</h3>
                        <h3 className="Sponsors-img text-center">Troy and Jann Pfaff</h3>
                        <h3 className="Sponsors-img text-center">Joseph Tutkowski</h3>
                    </div>
                    <div className="col-sm-3">
                        <h3 className="Sponsors-img text-center">Thomas and Amy Kunath</h3>
                        <h3 className="Sponsors-img text-center">Claudette Frangopoulos</h3>
                        <h3 className="Sponsors-img text-center">Michelle Schneider</h3>
                        <h3 className="Sponsors-img text-center">Donald and Carol Ann Schneider</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                    <hr />
                        <h2><b>Bronze T-II Sponsors</b></h2>
                        <h6>( $100 - $499 )</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 pt-1">
                    <hr />
                        <h2><b>Bronze T-I Sponsors</b></h2>
                        <h6>( $1 - $99 )</h6>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Sponsors;
