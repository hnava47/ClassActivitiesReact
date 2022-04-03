export const JsxVariables = () => {
    const firstName = 'Emmanuel';
    const age = 31;
    const num = 5;

    return (
        <div>
            <h1>Hi my name is { firstName }</h1>
            <h2>I am { age } years old</h2>
            <p>I am some random number between 0 and 4: { Math.floor(Math.random() * num) }</p>
        </div>
    );
};

export default JsxVariables;
