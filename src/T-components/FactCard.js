import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import './FactCard.css';




class FactCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfLike : 0
        }
    }

    incrementNumberOfLike = () => {
        this.setState({
            numberOfLike : this.state.numberOfLike + 1  
        })
    }
    render() {
        return (
            <>
                        <style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
</style>

            <p className='pofcard'>Very strange facts</p>
                    <Row xs={1} md={3} className="g-4">

    <Col>
    <div id="row" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="column1" variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDhMSf1C28SYPt7duAS8KrjeVfcynpIvseQ&usqp=CAU' onClick={this.incrementNumberOfLike}/>
                    <Card.Body>
                        <Card.Title className='overlay1' ></Card.Title>

                        <Card.Text className='text1'>
                        
                        </Card.Text>
                        <Card.Text>
                            Number of like  🥰 ❤️ : {this.state.numberOfLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                </Col>


                <Col>
    <div id="row" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="column1" variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7FIhX6kThbRW4Xwp8jy1h3NOmnAnfCu7pQ&usqp=CAU' onClick={this.incrementNumberOfLike}/>
                    <Card.Body>
                        <Card.Title className='overlay1' ></Card.Title>

                        <Card.Text className='text1'>
                        
                        </Card.Text>
                        <Card.Text>
                            Number of like  🥰 ❤️ : {this.state.numberOfLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                </Col>





                <Col>
    <div id="row" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="column1" variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdprXIlGxTA83cLwY4L9c31xP9BBM41Gj2g&usqp=CAU' onClick={this.incrementNumberOfLike}/>
                    <Card.Body>
                        <Card.Title className='overlay1' ></Card.Title>

                        <Card.Text className='text1'>
                        
                        </Card.Text>
                        <Card.Text>
                            Number of like  🥰 ❤️ : {this.state.numberOfLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                </Col>




                <Col>
    <div id="row" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="column1" variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrWCpfr3KiVw2_JPuL-lsT12pzyUxxJAfZA&usqp=CAU' onClick={this.incrementNumberOfLike}/>
                    <Card.Body>
                        <Card.Title className='overlay1' ></Card.Title>

                        <Card.Text className='text1'>
                        
                        </Card.Text>
                        <Card.Text>
                            Number of like  🥰 ❤️ : {this.state.numberOfLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                </Col>


                <Col>
    <div id="row" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="column1" variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApzJbqavWewHWLTnRxRHrhpHGmWSRZYRt4Q&usqp=CAU' onClick={this.incrementNumberOfLike}/>
                    <Card.Body>
                        <Card.Title className='overlay1' ></Card.Title>

                        <Card.Text className='text1'>
                        
                        </Card.Text>
                        <Card.Text>
                            Number of like  🥰 ❤️ : {this.state.numberOfLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                </Col>


                <Col>
    <div id="row" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="column1" variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYLGbUYSRViq-8M0DgajuyxkaYcNf0SgAKA&usqp=CAU' onClick={this.incrementNumberOfLike}/>
                    <Card.Body>
                        <Card.Title className='overlay1' ></Card.Title>

                        <Card.Text className='text1'>
                        
                        </Card.Text>
                        <Card.Text>
                            Number of like  🥰 ❤️ : {this.state.numberOfLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                </Col>


                </Row>
            </>
        )
    }
}
export default FactCard