import React from 'react';
import './NotFound.css';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ShowcaseVideo from '../../Components/ShowcaseVideo/ShowcaseVideo'

class NotFound extends React.Component
{
    render() {
        return (
            <div className="NotFound">
                <Header />
                
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 p-5 text-center">
                        <h1 className="NotFound-txt-massive mt-5"><b>404</b></h1>
                        <br />
                        <h2><b>Page Not Found</b></h2>
                        <br />
                        <a className="btn btn-warning mb-5">Back to Home</a>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default NotFound;
