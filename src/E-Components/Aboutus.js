import React from 'react';
import { Figure, Image, Card } from 'react-bootstrap';
import './Aboutus.css';
import artLogo from "../assets/artLogo/World Of Art.gif";
class Aboutus extends React.Component {
    render() {
        return (
            <>
                <div id='aboutUsContainer'>
                <section className="section0">
                    <div className="div1">
                        <h1 className="h1">
                          About Us 
                        </h1>
                    </div>
                    <div className="divImg">
                        <di className="divText">
                            <h3 className="h3Text">Who we are</h3>
                            <p className="pText">We're proud to be one of the leading arts companies globally .  We believe that the arts are the basis of the aesthetics of life, so we've been working hard for years to build the best to display artwork platform . we provide the most beautiful paintings around the world in one place to display creativity and rare talents</p>
                        </di>
                    </div>
                </section>
                <section className="visinSec" >
                    <h2 style={{ textAlign: 'center' }}><p className="p3">Our Vision</p></h2>
                    <div className="textVesion"><p>We aspire to connect artists around the world and display their artwork in one place.
                        Our team is always working on developing the site and making it easier and wider to attract everyone and work to make it available to all groups.
                        We are looking forward to becoming number one in the field of arts and we are working on a solid plan to implement this, and we aspire to receive many diverse artworks in all fields.
                    </p>
                    <img id="imgOfvision"src="https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/aa/Hybrid-Homepage-RW-Prog-large.webp" />
                    <div id="logo"><img className="logoDesignVision" src={artLogo} autoplay loop alt="logo" /></div> 
                    </div>
                </section>
                <section className="secMember">
                    <h2 style={{ textAlign: 'center' }}><p className="p3">Get To Know Us </p></h2>
                </section>
                <section id='aboutUsProfilesSection'>
                    <Card style={{ width: '15rem' }} className="Figure">
                        <Card.Img  variant="top" className="img" src="https://ca.slack-edge.com/TNGRRLUMA-U0236DP1MSS-aee36cde33f3-512" />
                        <Card.Body className="bio">
                            <Card.Text className="text">
                                <h3><p className="p">Musa'b Shalaldeh</p></h3>
                                <p className="work">Game Developer</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className="Figure">
                        <Card.Img variant="top" className="img" src="https://ca.slack-edge.com/TNGRRLUMA-U024NGNULJ2-049d8f6b72eb-512" />
                        <Card.Body className="bio">
                            <Card.Text className="text">
                            <h3><p className="p">Tariq Sharaia</p></h3>
                            <p className="work">Mechanical Engineer</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="Figure">
                        <Card.Img variant="top" className="img"  src="https://ca.slack-edge.com/TNGRRLUMA-U024VA4DSLA-74c0f87d081f-512" />
                        <Card.Body className="bio">
                            <Card.Text className="text">
                            <h3><p className="p">Amer Alqnahrah</p></h3>
                            <p className="work">Mechatronics Engineer</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="Figure1 ">
                        <Card.Img variant="top" className="img" src="https://ca.slack-edge.com/TNGRRLUMA-U02431DLG56-095f9a7b73cc-512" />
                        <Card.Body className="bio">
                            <Card.Text className="text">
                            <h3><p className="p"> Malak Khasawneh</p></h3>
                            <p className="work">Pharmacy</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="Figure">
                        <Card.Img variant="top" className="img" src="https://avatars.githubusercontent.com/u/85869661?v=4" />
                        <Card.Body className="bio">
                            <Card.Text className="text">
                            <h3><p className="p">Esra'a shurafat</p></h3>
                            <p className="work">Electrical Engineer</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            </div>
            </>)
    }
}
export default Aboutus;