import "./spinner.css";


const Spinner = () => {

    const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <div className="spinner">
            {
                dots.map(dot =>
                    <div
                        key={dot}
                        className="dot"
                        style={{
                            transform: `rotate(${dot * (360 / dots.length)}deg)translateY(35px)`,
                            animationDelay: `${dot * 0.1}s`
                        }}
                    ></div>
                )
            }
        </div>
    )
}

export default Spinner