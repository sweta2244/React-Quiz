import {useQuiz} from "./Context";

export default function NextBtn() {
    const {next,dispatch}=useQuiz();
  return (
    <>
      {next && (
        <button
          onClick={() => dispatch({ type: "next" })}
          className="startbtn nextbtn btnn"
        >
          Next
        </button>
      )}
    </>
  );
}
