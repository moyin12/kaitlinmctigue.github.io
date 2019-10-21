import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/stanley.png';

import Section from '../Section';
import Backlink from '../Backlink';
import Setup from '../Setup';

const title = 'The Shining Hotel Project';
const tags = ['dev', 'React', 'Interactive Art'];
const classification = 'dev';

export default class StanleyHotel extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: Stanley Hotel'
        });
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    splash={splashImg}
                />

                <Setup
                    role={'Designer, Programmer'}
                    year={2018}
                />

                <Section title={'View Project'} link={'https://kaitlinmctigue.github.io/stanleyhotel/'}/>

                <Backlink/>
            </div>
        );
    }
}