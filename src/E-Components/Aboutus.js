import React from 'react';
import {Figure,Image} from 'react-bootstrap';
import './Aboutus.css';
import artLogo from "../assets/artLogo/World Of Art.gif";

class Aboutus extends React.Component {


    render() {
        return (
            <>
           
             
            <section className="section0">
                <div className="div1">
                    <h1 className="h1">
                       About Us 
                    </h1>
        
                    <h3 className="h3">
                    <p className="p12">Having a world full of art has been our goal since the beginning, we have collected many paintings in one place for you.</p>
                    </h3>
                    <p  className="p2">
                 </p>
                    </div>
                    <div className="divImg">
                     <di className="divText">
                         <h3 className="h3Text">Who we are</h3>
                         <p className="pText">We're proud to be one of the leading arts companies globally .  We believe that the arts are the basis of the aesthetics of life, so we've been working hard for years to build the best to display artwork platform . we provide the most beautiful paintings around the world in one place to display creativity and rare talents</p>


                     </di>
                    </div>
                   </section>
                   
                   <section className="visinSec">
                   <h2 style={{textAlign:'center'}}><p className="p3">Our Vision</p></h2>
                       <div className="imgVesion"><img  src="https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/aa/Hybrid-Homepage-RW-Prog-large.webp"/></div>
                       <div className="textVesion"><p>We aspire to connect artists around the world and display their artwork in one place.
Our team is always working on developing the site and making it easier and wider to attract everyone and work to make it available to all groups.
We are looking forward to becoming number one in the field of arts and we are working on a solid plan to implement this, and we aspire to receive many diverse artworks in all fields.
</p>
<img className="logoDesignVision" src={artLogo} autoplay loop alt="logo" />


</div>
                   </section>



                    <section className="secMember">
                        <h2 style={{textAlign:'center'}}><p className="p3">Get To Know Us </p></h2>
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
                      <p className="work">Solo Indie Game Developer and 3D Level Designer</p>
                    </Figure.Caption>
                  
                 

                </Figure>

                <Figure className="Figure">
                    <Figure.Image className="img"

                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U024NGNULJ2-049d8f6b72eb-512"

                    />
                        <Figure.Caption>
                      <h3><p className="p">Tariq Sharaia</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                      <p className="work">Mechanical Engineer</p>
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
                      <p className="work">Mechatronics Engineer</p>
                    </Figure.Caption>
                  
                  
                  
                </Figure>
                <Figure className="Figure">
                    <Figure.Image className="img"
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U02431DLG56-095f9a7b73cc-512"

                    />
                      <Figure.Caption >
                      <h3><p className="p"> Malak Khasawneh</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                      <p className="work">Pharmacy</p>
                    </Figure.Caption>
                  
                   
                </Figure>
                <Figure className="Figure1">
                    <Figure.Image className="img"
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://ca.slack-edge.com/TNGRRLUMA-U0257UBGLBB-2edc9b22fb61-512"

                    />
                    <Figure.Caption>
                      <h3><p className="p">Esra'a shurafat</p></h3> 
                      <h4 className="h4"><p className="p0">Software Developer</p></h4>
                      <p className="work">Electrical Engineer</p>
                    </Figure.Caption>
                   
                   
                </Figure>
</section>

            </>)


    }


}

export default Aboutus;