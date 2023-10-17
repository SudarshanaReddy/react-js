import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);   
        console.log(this.props);
    }

    render() {

       const {name, email} = this.props;

       return ( <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>Developer</h2>
        </div> ) ;
    };
};

export default UserClass;