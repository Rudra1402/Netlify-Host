import React, { useState } from 'react'

function Calculator() {
    const [equation, setEquation] = useState("");
    const numberHandle = (e) => {
        let len = equation.length;
        let eText = e.target.innerText;
        if (equation[len - 1] === "+" || equation[len - 1] === "-" || equation[len - 1] === "*" || equation[len - 1] === "/") {
            if (equation[len - 1] === "-") {
                if (equation[len - 2] === "+" || equation[len - 2] === "-" || equation[len - 2] === "*" || equation[len - 2] === "/") {
                    if (eText === "+" || eText === "/" || eText === "*" || eText === "-")
                        setEquation(equation + "");
                    else
                        setEquation(equation + eText);
                }
                else {
                    if (eText === "+" || eText === "/" || eText === "*" || eText === "-")
                        setEquation(equation + "");
                    else
                        setEquation(equation + eText);
                }
            }
            else {
                if (eText === "+" || eText === "/" || eText === "*")
                    setEquation(equation + "");
                else
                    setEquation(equation + eText);
            }
        }
        else
            setEquation(equation + eText);
    }
    function evil(fn) {
        return new Function('return ' + fn)();
    }
    const evaluateHandle = () => {
        setEquation((evil(equation)).toString());
    }
    const clearHandle = () => {
        setEquation("");
    }
    const deleteHandle = () => {
        setEquation(equation.substring(0, equation.length - 1));
    }
    return (
        <div className='container'>
            <div className='display'>{equation === "" ? '0' : equation}</div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan='2' onClick={clearHandle}>AC</td>
                        <td onClick={deleteHandle}>del</td>
                        <td onClick={numberHandle}>+</td>
                    </tr>
                    <tr>
                        <td onClick={numberHandle}>7</td>
                        <td onClick={numberHandle}>8</td>
                        <td onClick={numberHandle}>9</td>
                        <td onClick={numberHandle}>-</td>
                    </tr>
                    <tr>
                        <td onClick={numberHandle}>4</td>
                        <td onClick={numberHandle}>5</td>
                        <td onClick={numberHandle}>6</td>
                        <td onClick={numberHandle}>*</td>
                    </tr>
                    <tr>
                        <td onClick={numberHandle}>1</td>
                        <td onClick={numberHandle}>2</td>
                        <td onClick={numberHandle}>3</td>
                        <td onClick={numberHandle}>/</td>
                    </tr>
                    <tr>
                        <td onClick={numberHandle}>.</td>
                        <td colSpan='2' onClick={numberHandle}>0</td>
                        <td onClick={evaluateHandle}>=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calculator