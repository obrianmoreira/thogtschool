// Quiz App Iam working on

/*

    const QuizApp = () => {

    const [finalResult, setFinalResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of America?",
          options: [
            { id: 0, text: "New York City", isCorrect: false },
            { id: 1, text: "Boston", isCorrect: false },
            { id: 2, text: "Santa Fe", isCorrect: false },
            { id: 3, text: "Washington DC", isCorrect: true },
          ],
        },
        {
          text: "What year was the Constitution of America written?",
          options: [
            { id: 0, text: "1787", isCorrect: true },
            { id: 1, text: "1776", isCorrect: false },
            { id: 2, text: "1774", isCorrect: false },
            { id: 3, text: "1826", isCorrect: false },
          ],
        },
        {
          text: "Who was the second president of the US?",
          options: [
            { id: 0, text: "John Adams", isCorrect: true },
            { id: 1, text: "Paul Revere", isCorrect: false },
            { id: 2, text: "Thomas Jefferson", isCorrect: false },
            { id: 3, text: "Benjamin Franklin", isCorrect: false },
          ],
        },
        {
          text: "What is the largest state in the US?",
          options: [
            { id: 0, text: "California", isCorrect: false },
            { id: 1, text: "Alaska", isCorrect: true },
            { id: 2, text: "Texas", isCorrect: false },
            { id: 3, text: "Montana", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 0, text: "Canada", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Cuba", isCorrect: true },
            { id: 3, text: "Mexico", isCorrect: false },
          ],
        },
      ];

    const optionClicked = (isCorrect) => {

        if (isCorrect) {

            setScore(score + 1);

        }

        if (currentQuestion + 1 < questions.length) {

            setCurrentQuestion(currentQuestion + 1);

        } else {

            setFinalResult(true)

        }

    }

    const restartQuiz = () => {

        setFinalResult(false);
        setCurrentQuestion(0);
        setScore(0);

    }

        return (

            <div>

                <h1>Current Score: {score}</h1>
                
                { finalResult ? 

                    <div>
                        <h1>Resultado Final</h1>
                        <p>{score} de {questions.length} - ({(score / questions.length) * 100}%)</p>
                        <button onClick={restartQuiz}>Refazer</button>
                    </div> 
                
                : 
                    (
                        <div className='grid grid-cols-1 px-40 text-center'>
                            <div className='bg-slate-100 '>
                                <h1>Pergunta : {currentQuestion + 1} de {questions.length}</h1>
                            </div>
                            <div>
                                <ul>
                                    Aqui questions = the questions inside the array
                                    currentQuestion = the number of the question of the quiz that is changing dynamicly when the optionClicker method is fire
                                    {questions[currentQuestion].options.map((option) => {

                                        return (

                                            // Here the optionClicked method is accessing the option correct answer as an object, because the array we have created is the array of objects, isCorrect is a variable that stores true or false
                                            <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>{option.text}</li>

                                        )

                                    })}
                                </ul>
                                <ul>
                                    {questions.map((option) => {
                                        return (
                                            <li key={option.id}>{option.text}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div> 

                    )
                
                }

            </div>

        )

        }

 */