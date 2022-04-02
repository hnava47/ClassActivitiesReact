export const Greeter = props => {
    console.log(props);
    return <h1>Hello { props.name }! I hope you're having a great day!</h1>
};

export default Greeter;
