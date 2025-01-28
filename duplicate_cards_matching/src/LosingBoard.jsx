

export default function LosingBoard({resetGame}) {
    return(
        <div className="gameOverBoard">
            <h1>🙏 YOU LOST 👨‍🦽</h1>
            <img src="https://uploads.dailydot.com/2024/12/cat-laughing-4.jpg?auto=compress&fm=pjpg"></img>
            <button onClick={resetGame}>Try Again</button>
        </div>
    )
}   