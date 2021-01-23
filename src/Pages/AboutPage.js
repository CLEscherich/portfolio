import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Christian. I'm a full stack engineer with experience in Express JS, Node JS, MySQL, MongoDB, and React.</p>

            <p>My dream is to one day be one of the best cyber security specialists for either the US government or a private business.</p>

            <p>I'm constantly learning new things to help my new career path in cyber security.I am currently working on gaing my CompTIA a+ and security + certifcations.</p>
            
            <p>Currently I have experince things include gaining more experience with MongoDB, React, Express JS, and Node JS.</p>
            </Content>
        </div>
    );

}

export default AboutPage;