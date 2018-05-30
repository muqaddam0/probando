import React, { Component } from 'react';
import {connect } from 'react-redux';
import { getUserPosts } from '../../actions';
import moments from 'moment-js';
import {Link} from 'react-router-dom';

class UserPost extends Component {


componentWillMount(){
  this.props.dispatch(getUserPosts(this.props.user.login.id))
}

showUserPosts = (user) =>(
  user.userPosts ? 
user.userPosts.map(item =>(
<tr key={item._id}>
<td>
  <Link to={`/user/edit-post/${item._id}`}>
  {item.name}</Link>
</td>
<td>
{item.author}
</td>
<td>
  {moments(item.createdAt).format("DD-MM-YYYY")}
</td>
</tr>

))
  :null
)


  render() {
    console.log(this.props)
    let user = this.props.user;

    return (
      <div className="user_posts">

         <h3>Tus reseñas van </h3> 

<table>
  <thead>
<tr>
<th>Nombre</th>
<th>Autor</th>
<th>Fecha</th>

</tr>
</thead>
<tbody>
  {this.showUserPosts(user)}
</tbody>
</table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(UserPost)

