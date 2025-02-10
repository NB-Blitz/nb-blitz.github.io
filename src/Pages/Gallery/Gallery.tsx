import React from "react";
import "./Gallery.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <Header />

                <div className="Gallery-Header row">
                    <div className="col-sm-10 offset-sm-1 p-5">
                        <h1>Image gallery coming soon</h1>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
