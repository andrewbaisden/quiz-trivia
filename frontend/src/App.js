import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
	useEffect(() => {
		btnMenu();
	}, []);
	const [quiz, setQuiz] = useState([
		{
			questionOne: [
				{
					id: uuidv4(),
					question: 'Helsinki',
					letter: 'A',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Oslo',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Stockholm',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Lisbon',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionTwo: [
				{
					id: uuidv4(),
					question: '1992',
					letter: 'A',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '1989',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '1997',
					letter: 'C',
					answer: true,
				},
				{
					id: uuidv4(),
					question: '2000',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionThree: [
				{
					id: uuidv4(),
					question: 'England',
					letter: 'A',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'Australia',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: 'USA',
					letter: 'C',
					answer: true,
				},
				{
					id: uuidv4(),
					question: 'Canada',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionFour: [
				{
					id: uuidv4(),
					question: '44',
					letter: 'A',
					answer: true,
				},
				{
					id: uuidv4(),
					question: '38',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '52',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '27',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionFive: [
				{
					id: uuidv4(),
					question: '32',
					letter: 'A',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '24',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '30',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '26',
					letter: 'D',
					answer: true,
				},
			],
		},
		{
			questionSix: [
				{
					id: uuidv4(),
					question: '1960s',
					letter: 'A',
					answer: true,
				},
				{
					id: uuidv4(),
					question: '1940s',
					letter: 'B',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '2000s',
					letter: 'C',
					answer: false,
				},
				{
					id: uuidv4(),
					question: '1980s',
					letter: 'D',
					answer: false,
				},
			],
		},
	]);

	// console.log(quiz);
	const btnMenu = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu'));
		console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			const buttonMenu = btnMenu.map((btns) => {
				btns.classList.remove('bg-teal-200');
			});
			addHover.classList.add('bg-teal-200');
		};

		const buttonMenu = btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);
			});
		});
	};

	return (
		<Fragment>
			<main className="container mx-auto">
				<section>
					<h1 className="text-6xl text-white">Quiz Trivia</h1>
				</section>
				<section>
					<h2 className="text-4xl font-bold text-white">What is the capital of Finland?</h2>
					<div className="bg-purple-800 p-6 mb-6">
						{quiz[0].questionOne.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center btn-menu">
									<p className="bg-purple-100 p-6 mb-4 text-gray-900">{q.letter}</p>
									<p className="bg-purple-400 p-4 w-full text-gray-900">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-bold text-white">When was Netflix founded?</h2>
					<div className="bg-red-800 p-6 mb-6">
						{quiz[1].questionTwo.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-red-100 p-6 mb-4 text-gray-900">{q.letter}</p>
									<p className="bg-red-400 p-4 w-full text-gray-900">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-bold text-white">What country is Robert Downey Jr from?</h2>
					<div className="bg-orange-800 p-6 mb-6">
						{quiz[2].questionThree.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-orange-100 p-6 mb-4 text-gray-900">{q.letter}</p>
									<p className="bg-orange-400 p-4 w-full text-gray-900">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-bold text-white">How many countries are in Europe?</h2>
					<div className="bg-yellow-800 p-6 mb-6">
						{quiz[3].questionFour.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-yellow-100 p-6 mb-4 text-gray-900">{q.letter}</p>
									<p className="bg-yellow-400 p-4 w-full text-gray-900">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-bold text-white">How many letters are in the English alphabet?</h2>
					<div className="bg-green-800 p-6 mb-6">
						{quiz[4].questionFive.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-green-100 p-6 mb-4 text-gray-900">{q.letter}</p>
									<p className="bg-green-400 p-4 w-full text-gray-900">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-bold text-white">When was the internet invented?</h2>
					<div className="bg-blue-800 p-6 mb-6">
						{quiz[5].questionSix.map((q) => (
							<div key={q.id}>
								<div className="flex flex-row items-center">
									<p className="bg-blue-100 p-6 mb-4 text-gray-900">{q.letter}</p>
									<p className="bg-blue-400 p-4 w-full text-gray-900">{q.question}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="mb-6">
					<button className="bg-gray-100 hover:bg-gray-200 w-full p-3 text-gray-900">Submit</button>
				</section>
			</main>
		</Fragment>
	);
};

export default App;
