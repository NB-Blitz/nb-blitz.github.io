import React from 'react';
import './ShowcaseVideo.css';

class ShowcaseVideo extends React.Component {
    video?: HTMLVideoElement;
    overlay?: HTMLDivElement;

    componentDidMount() {
        window.onresize = this.onResize.bind(this);

        this.getElements();
        if (this.video)
            this.video.onplay = this.onResize.bind(this);
    }

    getElements() {
        this.video = document.getElementById("video") as HTMLVideoElement;
        this.overlay = document.getElementById("videooverlay") as HTMLDivElement;
    }

    onResize() {
        if (!(this.video && this.overlay))
            return;

        let h = this.video.clientHeight;
        this.overlay.style.height = h + "px";
        this.overlay.style.paddingTop = (h - 220) + "px";
    }

    render() {
        return (
            <div className="ShowcaseVideo">
                <div className="row">
                    <div className="col-sm-12">
                        <video autoPlay={true} loop={true} preload="auto" muted={true} src="/Showcase.mp4" id="video"></video>
                    </div>
                </div>
                <div id="videooverlay">
                    <img src="/logo.png" height="90"></img>
                    <h1>New Berlin Blitz</h1>
                    <a href="https://bit.ly/3mRaCTD">Join us for the spring 2022 season &gt;</a>
                </div>
            </div>
        );
    }
}

export default ShowcaseVideo;
