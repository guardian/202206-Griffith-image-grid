import { Component, render, h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSelector } from "react-redux";

import SocialBar from 'shared/js/SocialShare';

const Header  = (props) => {

    const data = useSelector(state=>state.global ? state.global : {headline:'',standfirst:'',shareUrl:"", shareTitle:"", logoLink:"#"});

    const shareUrl = location.href;

    return (
        <Fragment>
        <div className ="hero" style="background-image: url(<%= path %>/header.jpg);" alt="" />
            <div className="max-container">
                <div className="header">
                    <header>
                        <div className="hublink" dangerouslySetInnerHTML={{__html:data.hubTitle}}></div>
                        <h1>{data.headline}</h1>
                        <div className="intro" dangerouslySetInnerHTML={{__html:data.standfirst}}></div>
                        <div dangerouslySetInnerHTML={{__html:data.intro}}></div>
                    </header>
                    <div className='client'>
                        <p>Paid for by</p>
                        <a href={data.logoLink} target="_blank" title="Griffith University"><img src="<%= path %>/brand_logo.svg" width="120" alt="" /></a>

                        <SocialBar url={shareUrl} title={data.shareTitle} />
                        <div className="about-content" dangerouslySetInnerHTML={{__html:data.aboutLink}}><a href="#" target="_blank">About this content</a></div>
                    </div>
            </div>
            <div className="hr"></div>
        </div>
    </Fragment>
    )
}

export default Header;