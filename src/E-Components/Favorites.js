import React from 'react';
import UserSelected from "./UserSelected";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



class Favorites extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          favPaintArr: [],
          favId:'',
          
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
           
             favPaintArr:result.data,
             
          })
        })
        .catch (err =>{
          console.log('error');
        })
      };

      deleteFavItemFun = (id) => {
        const { user } = this.props.auth0;
        const email = user.email;
        axios
          .delete(`http://localhost:3010/deleteFavItem/${id}?email=${email}`)
          .then(result => {
            console.log(result.data);
            this.setState({
              favPaintArr: result.data
            })
          })
          .catch(err => {
            console.log('error in deleting item');
          })
      }




    render () {
      const { user } = this.props.auth0;
        return (
            <>
            <h1 className="FavH1">This is Your Collection {user.name}</h1>
            <UserSelected
            favPaintData={this.state.favPaintArr}
            deleteFavItemFun ={this. deleteFavItemFun}
            
            />
            </>
        )
    }
}

export default withAuth0(Favorites);