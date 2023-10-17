const User = (props) => {
    const {name, email} = props;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>Developer</h2>
        </div>
    );
};

export default User;