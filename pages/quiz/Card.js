import { useState } from "react"
const { convert } = require('html-to-text');
const Card = ({ question, score, setScore }) => {

    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState("")
    const [submited, setSubmited] = useState(false)


    const handleSubmit = () => {
        if (answer === question.correct_answer) {
            setScore((score) => score + 1)
            setCorrect("true")
        }
        else {
            setScore((score) => score)
            setCorrect("false")
        }
        setSubmited(true)
    }

    return (
        <div>
            <div className="bg-[#18181b] w-full h-screen border-2 flex flex-col justify-center items-center p-10 gap-5 rounded-lg text-white">

                <div className="flex items-start justify-start text-3xl text-white font-bold ">

                    Category:{question.category}
                </div>

                <div>


                    <h1 className="text-green-900 font-bold text-2xl">Difficulty: {question.difficulty}</h1>

                </div>
                <div className="text-2xl">

                    {convert(question.question,{wordwrap:130})}
                </div>

                <div>
                    {question.type == "multiple" && <p className="text-2xl">Multiple Choice Question</p>}
                    {question.type == "boolean" && <p>Boolean Question</p>}
                </div>

                <div>
                    {question.type == "multiple" &&
                        <div>
                            <div className="flex flex-row justify-center items-center gap-4 mb-6 ">

                                <input type="radio" name="options" value={question.incorrect_answers[0]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {question.incorrect_answers[0]}


                                <input type="radio" name="options" value={question.incorrect_answers[1]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {question.incorrect_answers[1]}

                                <input type="radio" name="options" value={question.incorrect_answers[2]}
                                    onChange={(e) => setAnswer(e.target.value)} />

                                {question.incorrect_answers[2]}


                                <input type="radio" name="options" value={question.correct_answer}
                                    onChange={(e) => setAnswer(e.target.value)} />
                                {question.correct_answer}
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                                    onClick={() => handleSubmit()}>
                                    Submit
                                </button>


                            </div>
                        </div>
                    }

                    {question.type == "boolean" &&
                        <div>
                            <div className="flex gap-4 mb-4">
                                <input type="radio" name="options" value={question.correct_answer}
                                    onChange={(e) => setAnswer(e.target.value)} />
                                {question.correct_answer}
                                <input type="radio" name="options" value={question.incorrect_answers[0]}
                                    onChange={(e) => setAnswer(e.target.value)} />
                                {question.incorrect_answers[0]}
                            </div>

                            <div className="flex flex-col justify-center items-center">


                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={() => handleSubmit()}>
                                    Submit
                                </button>



                            </div>
                        </div>}
                </div>

                <div className="bg-white text-black w-[40rem] h-[4rem] rounded-lg flex justify-center items-center text-2xl">
                    The choosen answer is  &nbsp; {answer && <p className="underline">{answer}</p>}
                </div>


                <div>
                    {submited && <div>Your answer is {correct=="true" ?"correct":"incorrect"}<p>
                        <p>The correct answer is {question.correct_answer}</p>
                        And your score is {score}</p></div>}
                </div>

                <div className="text-2xl font-bold text-white">
                    Scroll Down for next Question
                </div>


            </div>
        </div>
    )
}

export default Card