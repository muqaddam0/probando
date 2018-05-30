import React, {Component} from 'react';
import {auth} from '../actions';
import {connect} from 'react-redux';

//Verificando token valido



export default function(ComClass,reload){
  class AuthenticationCheck extends Component {


    state ={
      loading: true

    }

      componentWillMount(){
        this.props.dispatch(auth())
      }
    

      componentWillReceiveProps(nextProps){
        //console.log(nextProps);   
        this.setState({loading:false})
if(!nextProps.user.login.isAuth){
  if(reload){
    this.props.history.push('/login');

  }
}else{
  if(reload === false){
this.props.history.push('/user')
  }
}

        }

    render(){
          //console.log(this.props)
      if(this.state.loading){
        return <div className="loader">Cargando...</div>
      }
      return(
            <ComClass {...this.props} user={this.props.user}/>
         )
    }

  }

function mapStateToProps(state){
  return{
    user:state.user
  }
}
return connect(mapStateToProps)(AuthenticationCheck)

}