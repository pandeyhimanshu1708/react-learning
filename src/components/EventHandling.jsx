export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Button clicked");
    // }
    const handleButtonClick = () => {
        
        
        alert("Button clicked");
    };
    return (
        <>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    );
};