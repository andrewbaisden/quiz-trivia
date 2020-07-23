import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
	const [quiz, setQuiz] = useState([
		{
			questionOne: [
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'A',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionTwo: [
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'A',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'C',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionThree: [
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'A',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'C',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionFour: [
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'A',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionFive: [
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'A',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'D',
					answer: true,
				},
			],
		},
		{
			questionSix: [
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'A',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lorem ipsum',
					letter: 'D',
					answer: false,
				},
			],
		},
	]);

	console.log(quiz);

	return (
		<Fragment>
			<main>
				<section>
					<h1>Quiz Trivia</h1>
				</section>
				<section>
					<h2>Question 1 Heading</h2>
					<div>
						{quiz[0].questionOne.map((q) => (
							<div key={q.id}>
								<div>
									<p>{q.letter}</p>
									<p>{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Question 2 Heading</h2>
					<div>
						{quiz[1].questionTwo.map((q) => (
							<div key={q.id}>
								<div>
									<p>{q.letter}</p>
									<p>{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Question 3 Heading</h2>
					<div>
						{quiz[2].questionThree.map((q) => (
							<div key={q.id}>
								<div>
									<p>{q.letter}</p>
									<p>{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Question 4 Heading</h2>
					<div>
						{quiz[3].questionFour.map((q) => (
							<div key={q.id}>
								<div>
									<p>{q.letter}</p>
									<p>{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Question 5 Heading</h2>
					<div>
						{quiz[4].questionFive.map((q) => (
							<div key={q.id}>
								<div>
									<p>{q.letter}</p>
									<p>{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Question 6 Heading</h2>
					<div>
						{quiz[5].questionSix.map((q) => (
							<div key={q.id}>
								<div>
									<p>{q.letter}</p>
									<p>{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</Fragment>
	);
};

export default App;
