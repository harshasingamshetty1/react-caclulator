import { useReducer } from "react";
import DigitButton from "./DigitButton";
import "./styles.css";

export const ACTIONS = {
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATOR: "choose_operator",
  DEL_DIGIT: "del_digit",
  CLEAR_CALC: "clear_calc",
  EVALUATE: "evaluate",
};

function App() {
  const initialState = {
    previousOperand: "",
    currentOperand: "",
    operation: "",
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          currentOperand: `${state.currentOperand}${payload.digit}`,
        };

      case ACTIONS.DEL_DIGIT:
        return {
          ...state,
          currentOperand: `${state.currentOperand}`,
        };

      // state.
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">123,122</div>
        <div className="current-operand">256,652</div>
      </div>
      <button className="spans-two">AC</button>
      <button>DEL</button>
      <button>/</button>

      <DigitButton digit="1" dispatch={dispatch}></DigitButton>
      <DigitButton digit="2" dispatch={dispatch}></DigitButton>
      <DigitButton digit="3" dispatch={dispatch}></DigitButton>
      <button>*</button>
      <DigitButton digit="4" dispatch={dispatch}></DigitButton>
      <DigitButton digit="5" dispatch={dispatch}></DigitButton>
      <DigitButton digit="6" dispatch={dispatch}></DigitButton>
      <button>+</button>
      <DigitButton digit="7" dispatch={dispatch}></DigitButton>
      <DigitButton digit="8" dispatch={dispatch}></DigitButton>
      <DigitButton digit="9" dispatch={dispatch}></DigitButton>
      <button>-</button>
      <DigitButton digit="." dispatch={dispatch}></DigitButton>
      <DigitButton digit="0" dispatch={dispatch}></DigitButton>
      <button className="spans-two">=</button>
    </div>
  );
}

export default App;
