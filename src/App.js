
const App = () => {
    return (
        <div className="card">
            <img className="mainImage" src='/images/image-equilibrium.jpg'/>
            <div className="mainInfo">
                <h1 className="itemName">Equilibrium #3429</h1>
                <p className="inforPara">Our Equilibrium collection promotes balance and calm.</p>
                    <div className="priceDay">
                        <span className="price"><img className="eth" src='/images/icon-ethereum.svg' />0.041</span>
                        <span className="time"><img className="clock" src='/images/icon-clock.svg' /> 3 days left</span>
                    </div>
                    <div className="creatorBox">
                    <span className="alignBox">
                        <img className="avatar" src='/images/image-avatar.png' />
                        <span><span>Creation Of</span> Jules Wyvern</span>
                    </span>
                    </div>
            </div>
        </div>
    )

}

export default App