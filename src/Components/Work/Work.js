import React from 'react';
import ColorPicking from '../../images/colorpicking.avif'; 
import DesignImage from '../../images/designimage.avif'; 
import ECommerce from '../../images/ecommerce.avif'; 
import MobileTesting from '../../images/mobiletesting.avif'; 
import ProgressImage from '../../images/progressimage.avif'; 
import TabletDesign from '../../images/tabletdesign.avif';
import UIDesign from '../../images/uidesign.avif';

const Work = () => {
    return (
        <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
            <h2 id="projects" class="secondary-title">My Projects</h2>
            <p class="section-paragraph">I’ve had the pleasure of working on multiple projects, designing and implementing both frontend and backend.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <img src={DesignImage} class="w-full bg-nav h-36 lg:h-72 object-cover"/>
                <img src={TabletDesign} class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src={ColorPicking} class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src={ProgressImage} class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src={UIDesign} class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src={MobileTesting} class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                <img src={ECommerce} class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
            </div>
        </section>
    </div>
    )
};

export default Work;