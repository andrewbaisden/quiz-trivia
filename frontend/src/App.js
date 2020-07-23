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
			<main className="container mx-auto">
				<section>
					<h1 className="text-6xl">Quiz Trivia</h1>
				</section>
				<section>
					<h2 className="text-2xl font-bold">Question 1 Heading</h2>
					<div className="bg-purple-800 p-6 mb-6">
						{quiz[0].questionOne.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-purple-100 p-6 mb-4">{q.letter}</p>
									<p className="bg-purple-400 p-4 w-full">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-bold">Question 1 Heading</h2>
					<div className="bg-red-800 p-6 mb-6">
						{quiz[1].questionTwo.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-red-100 p-6 mb-4">{q.letter}</p>
									<p className="bg-red-400 p-4 w-full">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-bold">Question 1 Heading</h2>
					<div className="bg-orange-800 p-6 mb-6">
						{quiz[2].questionThree.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-orange-100 p-6 mb-4">{q.letter}</p>
									<p className="bg-orange-400 p-4 w-full">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-bold">Question 1 Heading</h2>
					<div className="bg-yellow-800 p-6 mb-6">
						{quiz[3].questionFour.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-yellow-100 p-6 mb-4">{q.letter}</p>
									<p className="bg-yellow-400 p-4 w-full">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-bold">Question 1 Heading</h2>
					<div className="bg-green-800 p-6 mb-6">
						{quiz[4].questionFive.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-green-100 p-6 mb-4">{q.letter}</p>
									<p className="bg-green-400 p-4 w-full">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-bold">Question 1 Heading</h2>
					<div className="bg-blue-800 p-6 mb-6">
						{quiz[5].questionSix.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-blue-100 p-6 mb-4">{q.letter}</p>
									<p className="bg-blue-400 p-4 w-full">{q.question}</p>
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
