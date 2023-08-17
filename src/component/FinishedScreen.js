function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🚀";
  if (percentage >= 80 && percentage < 100) emoji = "💪";
  if (percentage >= 50 && percentage < 80) emoji = "👍";
  if (percentage < 80) emoji = "🙅‍♂️";
  if (percentage === 0) emoji = "👎";
  return (
    <>
      <p className="result">
        {emoji}You scored got <strong>{points}</strong> out of{" "}
        {maxPossiblePoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart", payload: 0 })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
