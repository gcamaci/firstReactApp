const ParaComponent = () => {
    const name = 'Giuseppe'
    return (
        <h1>{name}</h1>
    )
}
const MainContent = () => {
    return (
        <div className="main-container">
            <ParaComponent/>
            <h1>This is my very first React Project</h1>
            <p>learning to create and render multiple components</p>
        </div>
        
    )
}
export {MainContent}