import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ShowcaseVideo from '../../Components/ShowcaseVideo/ShowcaseVideo'

class Home extends React.Component
{

    componentDidMount()
    {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="Home">
                <Header />
                
                <div className="Home-Header row">
                    <div className="col-sm-10 offset-sm-1 p-5">
                        <h5>
                            <b>Welcome to the official website of New Berlin Blitz!</b>
                        </h5>
                        <p>
                            Founded in the fall of 2013, our mission is to increase awareness, generate interest, and develop skills in engineering fields in our area, inspiring not only members of the program, but also the community at large.
                        </p>
                    </div>
                </div>

                <ShowcaseVideo />

                <div className="row">
                    <div className="col-sm-5 offset-sm-1 p-5">
                        <h1><b>About FIRST</b></h1>
                        <p>
                            FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young peoples' interest and participation in science and technology.  Based in Manchester, NH, the 501(c)(3) not-for-profit public charity designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.
                        </p>
                        <p>
                                "FIRST is more than robots.  The robots are a vehicle for students to learn important life skills.  Kids often come in not knowing what to expect - of the program nor of themselves.  They leave, even after the first season, with a vision, with confidence, and with a sense that they can create their own future."
                        </p>
                        <p>
                            &#8195; - Dean Kamen, Founder of FIRST
                        </p>
                    </div>
                    <div className="col-sm-4 p-5">
                        <img className="first-logo" src="/first-logo.jpg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <hr className="mb-5" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                        <a className="twitter-timeline" href="https://twitter.com/Blitz5148?ref_src=twsrc%5Etfw" data-height="600">
                            Tweets by Blitz5148
                        </a>
                    </div>
                    <div className="col-sm-5">
                        <iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=nbexcellence.org_rkq0rkrg698qi9428bh29asrc8%40group.calendar.google.com&ctz=America%2FChicago" frameBorder="0" scrolling="no"></iframe>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Home;
