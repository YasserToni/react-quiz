import Options from "./Options";

function Questions({ question, answer, dispatch }) {
  console.log(question.question.question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Questions;
