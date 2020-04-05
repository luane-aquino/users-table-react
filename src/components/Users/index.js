import React, { Component } from 'react';
import axios from 'axios';
import Items from '../Items'

class Users extends Component {
    state = {
        usuarios: []
    }


    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                this.setState({ usuarios: result.data });
            });
    }

    render() {
        return (
            <>
                {this.state.usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.phone}</td>
                        <Items idUsuario={usuario.id} tipo="albums" />
                        <Items idUsuario={usuario.id} tipo="posts" />
                        <Items idUsuario={usuario.id} tipo="photos" />
                    </tr>
                ))}
            </>
        )
    }

}

export default Users;