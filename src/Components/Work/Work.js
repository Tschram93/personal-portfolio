import React from 'react';
import ColorPicking from '../../images/colorpicking.avif'; 
import DesignImage from '../../images/designimage.avif'; 
import ECommerce from '../../images/ecommerce.avif'; 
import MobileTesting from '../../images/mobiletesting.avif'; 
import ProgressImage from '../../images/progressimage.avif'; 
import TabletDesign from '../../images/tabletdesign.avif';
import WorkCard from './WorkCard/WorkCard';
import UIDesign from '../../images/uidesign.avif';

const Work = () => {
    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
            <h2 id="projects" className="secondary-title">My Projects</h2>
            <p className="section-paragraph">I’ve had the pleasure of working on multiple projects, designing and implementing both frontend and backend.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <img src={DesignImage} className="w-full bg-nav h-36 lg:h-72 object-cover" alt='progress of application design' />
                <img src={TabletDesign} className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt='tablet designing process' />
                <img src={ColorPicking} className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt='color designing process' />
                <img src={ProgressImage} className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt='progress designing process' />
                <img src={UIDesign} className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt='interface designing process' />
                <img src={MobileTesting} className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt='mobile designing process' />
                <img src={ECommerce} className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt='E-Commerce example'  />
            </div>
        </section>
        <WorkCard />
    </div>
    )
};

export default Work;