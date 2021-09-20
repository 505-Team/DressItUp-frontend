import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import PaintingItem from './PaintingItem';
import './Postpainting.css';

//
import Button from 'react-bootstrap/Button';
import Modelpaint from './Modelpaint';
import UpdatePaint from './UpdatePaint';




class Postpainting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paintArr: [],
      showModel: false,
      title: '',
      painter:'',
      imgUrl:'',
      artistDisplay:'',
      idBook: '',
      description: '',
      status: '',
      showForm: false,
      
    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    axios
      .get(`http://localhost:3010/getPainting?email=${user.email}`)
      .then(result => {
        this.setState({
          paintArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }


  addPainting = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      painter: event.target.painter.value,
      artistDisplay:event.target.artistDisplay.value,
      imgUrl:event.target.imgUrl.value,
      description: event.target.description.value,
      status: event.target.status.value,
      ownerEmail: email
    }

    axios.post(`http://localhost:3010/addPainting`, obj)
      .then(result => {
        this.setState({
          paintArr: result.data
        })
      })
      .catch(err => {
        console.log('Error on adding data');
      })
  }


  handelShowModel = () => {
    this.setState({
      showModel: true
    })
  }

  close = () => {
    this.setState({
      showModel: false
    })
  }

  deletePainting = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`http://localhost:3010/deletePainting/${id}?email=${email}`)
      .then(result => {
        console.log(result.data);
        this.setState({
          paintArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting paint');
      })
  }



  handelupdateForm=(item)=>{
    this.setState({
      showForm: true,
      title: item.title,
      artistDisplay:item.artistDisplay,
      painter: item.painter,
      imgUrl:item.imgUrl,
      description: item.description,
      status: item.status,
      idBook: item._id
    })
  }


  updatePainting=(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      artistDisplay:event.target.artistDisplay.value,
      description: event.target.description.value,
      painter: event.target.painter.value,
      imgUrl:event.target.imgUrl.value,
      email: email,
      status: event.target.status.value

    }
    

    axios.put(`http://localhost:3010/updatePainting/${this.state.idBook}`, obj)
      .then(result => {
        this.setState({
          paintArr: result.data,
          showForm: false
        })
      }).catch(error => {
        console.log('Error on Update');
      })
  }

  


  render() {
    return (
      <>
                              <style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
</style>

        <h1 className='hinpostpainting'>Hello in posting page  👩‍🎨 🎨 👨‍🎨</h1>
        <p className='pinpostpainting'>
        You can add your artwork here        </p>



        <Button className='addbuttonstayle' onClick={this.handelShowModel}> Add your paint  </Button>

        <PaintingItem
          // item = {item}
          Painting={this.state.paintArr}
          deletePainting={this.deletePainting}
          handelupdateForm={this.handelupdateForm}
        />

        <Modelpaint show={this.state.showModel}
          handelShowModel={this.handelShowModel}
          addPainting={this.addPainting}
          close={this.close} />


        <UpdatePaint
          show={this.state.showForm}

          close={this.close}
          title={this.state.title}
          artistDisplay={this.state.artistDisplay}
          painter={this.state.painter}
          imgUrl={this.state.imgUrl}
          description={this.state.description}
          status={this.state.status}
          updatePainting={this.updatePainting}

        />



      </>
    )
  }
}

export default withAuth0(Postpainting);
