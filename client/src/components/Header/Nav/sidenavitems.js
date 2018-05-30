import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const SidenavItems = ({user}) => {

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Inicio',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'user',
            text:'Perfil',
            link:'/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'briefcase',
            text:'Registro',
            link:'/user/register',
            restricted:false
        },
        {
            type:'navItem',
            icon:'unlock-alt',
            text:'Iniciar Sesión',
            link:'/login',
            restricted:false,
            exclude:true
        },
        {
            type:'navItem',
            icon:'check',
            text:'Mis reseñas',
            link:'/user/user-reviews',
            restricted:true
        },
        {
            type:'navItem',
            icon:'book',
            text:'Agregar Reseña',
            link:'/user/add',
            restricted:true
        },
        {
            type:'navItem',
            icon:'power-off',
            text:'Cerrar Sesión',
            link:'/user/logout',
            restricted:true
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else {
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )

    return (
        <div>
            {showItems()}
        </div>
    );
};


function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)