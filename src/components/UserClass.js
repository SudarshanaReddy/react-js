import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);   
        
        this.state = {
            userInfo : {
                name: 'dummy',
                location: 'dummy'
            }
        }
    }

    async componentDidMount() {

       const response = await fetch("https://api.github.com/users/SudarshanaReddy");
       const json = await response.json();

       console.log(json);

       this.setState({
        userInfo: json,
       });
    }

    render() {

       const {name, location} = this.state.userInfo;

       return ( <div>
            <h1>{name}</h1>
            <h2>{location}</h2>
        </div> ) ;
    };
};

export default UserClass;