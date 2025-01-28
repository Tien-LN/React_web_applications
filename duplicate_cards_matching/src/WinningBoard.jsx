
export default function WinningBoard({resetGame}) {
    return(
        <div className="gameOverBoard">
            <h1>🗣️ YOU WON 🗿</h1>
            <img src="https://community-lens.storage.googleapis.com/preview-media/thumbnail_poster/8ab8fa7a-2d49-4f9f-9a58-b68841f7942e.jpg"></img>
            <button onClick={resetGame}>New Game</button>
        </div>
    )
}