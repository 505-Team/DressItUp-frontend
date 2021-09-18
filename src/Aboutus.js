import React from 'react';
import {Figure,Image} from 'react-bootstrap';
import './Aboutus.css';

class Aboutus extends React.Component {


    render() {
        return (
            <>
            <section className="section0">
                <div className="div1">
                    <h1 className="h1">
                        <p className="p1">We Are &nbsp;
                            <spa>Developers</spa>
                        </p>
                    </h1>
                    </div>
                    <div className="div2">
                    <h3>
                        <p className="p12">We provide you the best paintings by talented artists in the world.</p>
                    </h3>
                    <p  className="p2">
                    We provide you the best paintings by talented artists in the world.
                    We provide you the best paintings by talented artists in the world.
                    We provide you the best paintings by talented artists in the world.
                    We provide you the best paintings by talented artists in the world.
                    We provide you the best paintings by talented artists in the world.</p>
                    </div>
                    </section>
                    <section>
                        <h2 style={{textAlign:'center'}}><p className="p3">Meet Our Team &nbsp;<strong><span>Members</span></strong></p></h2>
                    </section>

                <section className="section">
                <Figure className="Figure">
                    <Figure.Image className="img"
                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U0236DP1MSS-aee36cde33f3-512"

                    />
                    <Figure.Caption className="text">
                      <h3><p className="p">Musa'b Shalaldeh</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                    </Figure.Caption>
                    <Figure.Caption >
                    <h5 className="h5"><p>I graduated as an Electrical Engineer from Jordan University of Science and Technology, I am looking forward to become a programmer.</p></h5>
                   
                    </Figure.Caption>
                 

                </Figure>

                <Figure className="Figure3">
                    <Figure.Image className="img"

                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U024NGNULJ2-049d8f6b72eb-512"

                    />
                        <Figure.Caption>
                      <h3><p className="p">Tariq Sharaia</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                    </Figure.Caption>
                    <Figure.Caption >
                    <h5 className="h5"><p>I graduated as an Electrical Engineer from Jordan University of Science and Technology, I am looking forward to become a programmer.</p></h5>
                     
                    </Figure.Caption>
                  
                  
                </Figure>
                <Figure className="Figure">
                    <Figure.Image className="img"
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U024VA4DSLA-74c0f87d081f-512"

                    />
                      <Figure.Caption>
                      <h3><p className="p">Amer Alqnahrah</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                    </Figure.Caption>
                    <Figure.Caption >
                    <h5 className="h5"><p>I graduated as an Electrical Engineer from Jordan University of Science and Technology, I am looking forward to become a programmer.</p></h5>
                     
                    </Figure.Caption>
                  
                  
                </Figure>
                <Figure className="Figure1">
                    <Figure.Image className="img"
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U02431DLG56-095f9a7b73cc-512"

                    />
                      <Figure.Caption>
                      <h3><p className="p"> Malak Khasawneh</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                    </Figure.Caption>
                    <Figure.Caption >
                    <h5 className="h5"><p>I graduated as an Electrical Engineer from Jordan University of Science and Technology, I am looking forward to become a programmer.</p></h5>
                     
                    </Figure.Caption>
                   
                </Figure>
                <Figure className="Figure2">
                    <Figure.Image className="img"
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U0257UBGLBB-2edc9b22fb61-512"

                    />
                    <Figure.Caption>
                      <h3><p className="p">Esra'a shurafat</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                    </Figure.Caption>
                    <Figure.Caption >
                    <h5 className="h5"><p>I graduated as an Electrical Engineer from Jordan University of Science and Technology, I am looking forward to become a programmer.</p></h5>
                    </Figure.Caption>
                   
                </Figure>

                   
                   
                   
                   
                   
              
               
                 
               

</section>

            </>)


    }


}

export default Aboutus;