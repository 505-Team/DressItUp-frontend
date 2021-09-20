import React from 'react';
// import UserSelected from "../E-Components/UserSelected";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



class Favorites extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          favPaintArr: [],
        }
      }
    
      componentDidMount = () =>{
        const { user } = this.props.auth0;
        const email = user.email;
        axios
        .get(`http://localhost:3010/getFavaddFavoritePainting?email=${user.email}`)
        .then( result =>{
          console.log(result.data);
          console.log(result.data);
          this.setState({
           
            favPaintArr:result.data
          })
        })
        .catch (err =>{
          console.log('error');
        })
      };
    render () {
        return (
            <>
            {/* <UserSelected
            favPaintArr={this.state.favPaintArr}
            /> */}
            </>
        )
    }
}

export default withAuth0(Favorites);