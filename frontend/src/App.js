import React, { Fragment, useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
	useEffect(() => {
		btnMenuPurple();
		btnMenuRed();
		btnMenuOrange();
		btnMenuYellow();
		btnMenuGreen();
		btnMenuBlue();
	}, []);

	const [total, setTotal] = useState(null);
	const [purpleGroup, setPurpleGroup] = useState(-1);
	const [redGroup, setRedGroup] = useState(-1);
	const [orangeGroup, setOrangeGroup] = useState(-1);
	const [yellowGroup, setYellowGroup] = useState(-1);
	const [greenGroup, setGreenGroup] = useState(-1);
	const [blueGroup, setBlueGroup] = useState(-1);

	const [quiz] = useState([
		{
			questionOne: [
				{
					id: 'jmXBVMIZVxeVU0tWv8yV',
					question: 'Helsinki',
					letter: 'A',
					answer: true,
				},
				{
					id: 'ZTKgtIJGUAiVH4adfINN',
					question: 'Oslo',
					letter: 'B',
					answer: false,
				},
				{
					id: 'IYzfnmgaBZImIY9ZGGKw',
					question: 'Stockholm',
					letter: 'C',
					answer: false,
				},
				{
					id: 'MS2IzPLMgkseIpuoJNIe',
					question: 'Lisbon',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionTwo: [
				{
					id: 'dYW4pmSuQfxEDHtOTdx2',
					question: '1992',
					letter: 'A',
					answer: false,
				},
				{
					id: 'l1rpaEblAoNeC847fl7i',
					question: '1989',
					letter: 'B',
					answer: false,
				},
				{
					id: 'W838C2tc98eiE6SnJNH3',
					question: '1997',
					letter: 'C',
					answer: true,
				},
				{
					id: 'gBN9Y2DlL3zWdZdhZ8iA',
					question: '2000',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionThree: [
				{
					id: 'UpV4D9hZQCQ2nW0NYufS',
					question: 'England',
					letter: 'A',
					answer: false,
				},
				{
					id: 'hP9BjNfRhVkqWCu1pDyS',
					question: 'Australia',
					letter: 'B',
					answer: false,
				},
				{
					id: 'hmOGgnAnBI1yaXevcxy7',
					question: 'USA',
					letter: 'C',
					answer: true,
				},
				{
					id: 'hzwNNjL9IyEy3omtaFVz',
					question: 'Canada',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionFour: [
				{
					id: 'euy8enFogCOqVEnrIFxQ',
					question: '44',
					letter: 'A',
					answer: true,
				},
				{
					id: 'TnDUwg6spqqzCKuGy0yb',
					question: '38',
					letter: 'B',
					answer: false,
				},
				{
					id: 'iujkJPw6t0AIPniCnXfA',
					question: '52',
					letter: 'C',
					answer: false,
				},
				{
					id: 'VgaldlSGUhJ7jR1nYCZA',
					question: '27',
					letter: 'D',
					answer: false,
				},
			],
		},
		{
			questionFive: [
				{
					id: '6YPT7EmNzdKcSNn4m0qb',
					question: '32',
					letter: 'A',
					answer: false,
				},
				{
					id: 'DIh71cAd6uHaPHF6lRGm',
					question: '24',
					letter: 'B',
					answer: false,
				},
				{
					id: 'MiujOl1X6wMA61hcN3Uz',
					question: '30',
					letter: 'C',
					answer: false,
				},
				{
					id: 'kbtAtMbpHuiYWdyEqukf',
					question: '26',
					letter: 'D',
					answer: true,
				},
			],
		},
		{
			questionSix: [
				{
					id: 'zbUsNZ2qIXNRBtm4JTLX',
					question: '1960s',
					letter: 'A',
					answer: true,
				},
				{
					id: 'ffGMrg8bg37TwOYrJ8Ni',
					question: '1940s',
					letter: 'B',
					answer: false,
				},
				{
					id: 'wXIBoNzcMmxUfSoi0fuO',
					question: '2000s',
					letter: 'C',
					answer: false,
				},
				{
					id: 'ME8XUpjIek9qXFBljJQK',
					question: '1980s',
					letter: 'D',
					answer: false,
				},
			],
		},
	]);

	const calcTotal = () => {
		const total = purpleGroup + redGroup + orangeGroup + yellowGroup + greenGroup + blueGroup;

		if (purpleGroup === -1) {
			document.querySelector('.bg-purple-800').classList.add('danger');
		} else if (redGroup === -1) {
			document.querySelector('.bg-red-800').classList.add('danger');
		} else if (orangeGroup === -1) {
			document.querySelector('.bg-orange-800').classList.add('danger');
		} else if (yellowGroup === -1) {
			document.querySelector('.bg-yellow-800').classList.add('danger');
		} else if (greenGroup === -1) {
			document.querySelector('.bg-green-800').classList.add('danger');
		} else if (blueGroup === -1) {
			document.querySelector('.bg-blue-800').classList.add('danger');
		} else {
			setTotal(total);
			console.log(`Total ${String(total)}/6 correct`);
			document.querySelector('.total').classList.remove('hidden');
			document.querySelector('main').classList.add('hidden');
			document.querySelector('.try-again').classList.remove('hidden');
		}
	};

	const tryAgain = () => {
		setTotal(0);
		setPurpleGroup(-1);
		setRedGroup(-1);
		setOrangeGroup(-1);
		setYellowGroup(-1);
		setGreenGroup(-1);
		setBlueGroup(-1);

		document.querySelector('.total').classList.add('hidden');
		document.querySelector('main').classList.remove('hidden');
		document.querySelector('.try-again').classList.add('hidden');

		document.querySelector('.bg-purple-800').classList.remove('danger');
	};

	// console.log(quiz);
	const btnMenuPurple = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu-purple'));
		// console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			btnMenu.map((btns) => {
				btns.classList.remove('bg-purple-400');
			});
			addHover.classList.add('bg-purple-400');
		};

		btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);

				console.log(e.target.classList[1]);

				if (e.target.classList[1] === 'jmXBVMIZVxeVU0tWv8yV') {
					setPurpleGroup(1);
				} else if (e.target.classList[1] === 'ZTKgtIJGUAiVH4adfINN') {
					setPurpleGroup(0);
				} else if (e.target.classList[1] === 'IYzfnmgaBZImIY9ZGGKw') {
					setPurpleGroup(0);
				} else if (e.target.classList[1] === 'MS2IzPLMgkseIpuoJNIe') {
					setPurpleGroup(0);
				}
			});
		});
	};

	const btnMenuRed = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu-red'));
		// console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			btnMenu.map((btns) => {
				btns.classList.remove('bg-red-400');
			});
			addHover.classList.add('bg-red-400');
		};

		btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);

				console.log(e.target.classList[1]);

				if (e.target.classList[1] === 'dYW4pmSuQfxEDHtOTdx2') {
					setRedGroup(0);
				} else if (e.target.classList[1] === 'l1rpaEblAoNeC847fl7i') {
					setRedGroup(0);
				} else if (e.target.classList[1] === 'W838C2tc98eiE6SnJNH3') {
					setRedGroup(1);
				} else if (e.target.classList[1] === 'gBN9Y2DlL3zWdZdhZ8iA') {
					setRedGroup(0);
				}
			});
		});
	};

	const btnMenuOrange = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu-orange'));
		// console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			btnMenu.map((btns) => {
				btns.classList.remove('bg-orange-400');
			});
			addHover.classList.add('bg-orange-400');
		};

		btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);

				console.log(e.target.classList[1]);

				if (e.target.classList[1] === 'UpV4D9hZQCQ2nW0NYufS') {
					setOrangeGroup(0);
				} else if (e.target.classList[1] === 'hP9BjNfRhVkqWCu1pDyS') {
					setOrangeGroup(0);
				} else if (e.target.classList[1] === 'hmOGgnAnBI1yaXevcxy7') {
					setOrangeGroup(1);
				} else if (e.target.classList[1] === 'hzwNNjL9IyEy3omtaFVz') {
					setOrangeGroup(0);
				}
			});
		});
	};

	const btnMenuYellow = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu-yellow'));
		// console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			btnMenu.map((btns) => {
				btns.classList.remove('bg-yellow-600');
			});
			addHover.classList.add('bg-yellow-600');
		};

		btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);

				console.log(e.target.classList[1]);

				if (e.target.classList[1] === 'euy8enFogCOqVEnrIFxQ') {
					setYellowGroup(1);
				} else if (e.target.classList[1] === 'TnDUwg6spqqzCKuGy0yb') {
					setYellowGroup(0);
				} else if (e.target.classList[1] === 'iujkJPw6t0AIPniCnXfA') {
					setYellowGroup(0);
				} else if (e.target.classList[1] === 'VgaldlSGUhJ7jR1nYCZA') {
					setYellowGroup(0);
				}
			});
		});
	};

	const btnMenuGreen = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu-green'));
		// console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			btnMenu.map((btns) => {
				btns.classList.remove('bg-green-400');
			});
			addHover.classList.add('bg-green-400');
		};

		btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);

				console.log(e.target.classList[1]);

				if (e.target.classList[1] === '6YPT7EmNzdKcSNn4m0qb') {
					setGreenGroup(0);
				} else if (e.target.classList[1] === 'DIh71cAd6uHaPHF6lRGm') {
					setGreenGroup(0);
				} else if (e.target.classList[1] === 'MiujOl1X6wMA61hcN3Uz') {
					setGreenGroup(0);
				} else if (e.target.classList[1] === 'kbtAtMbpHuiYWdyEqukf') {
					setGreenGroup(1);
				}
			});
		});
	};

	const btnMenuBlue = () => {
		const btnMenu = Array.from(document.querySelectorAll('.btn-menu-blue'));
		// console.log(btnMenu);

		const onBtnMenu = (addHover) => {
			btnMenu.map((btns) => {
				btns.classList.remove('bg-blue-400');
			});
			addHover.classList.add('bg-blue-400');
		};

		btnMenu.map((btns) => {
			btns.addEventListener('click', (e) => {
				console.log(e.target);
				onBtnMenu(e.target);

				console.log(e.target.classList[1]);

				if (e.target.classList[1] === 'zbUsNZ2qIXNRBtm4JTLX') {
					setBlueGroup(1);
				} else if (e.target.classList[1] === 'ffGMrg8bg37TwOYrJ8Ni') {
					setBlueGroup(0);
				} else if (e.target.classList[1] === 'wXIBoNzcMmxUfSoi0fuO') {
					setBlueGroup(0);
				} else if (e.target.classList[1] === 'ME8XUpjIek9qXFBljJQK') {
					setBlueGroup(0);
				}
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
								<div className={`btn-menu-purple ${q.id}`}>
									{q.letter}
									&nbsp;&nbsp;&nbsp;{q.question}
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
								<div className={`btn-menu-red ${q.id}`}>
									{q.letter}
									&nbsp;&nbsp;&nbsp;{q.question}
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
								<div className={`btn-menu-orange ${q.id}`}>
									{q.letter}
									&nbsp;&nbsp;&nbsp;{q.question}
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
								<div className={`btn-menu-yellow ${q.id}`}>
									{q.letter}
									&nbsp;&nbsp;&nbsp;{q.question}
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
								<div className={`btn-menu-green ${q.id}`}>
									{q.letter}
									&nbsp;&nbsp;&nbsp;{q.question}
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
								<div className={`btn-menu-blue ${q.id}`}>
									{q.letter}
									&nbsp;&nbsp;&nbsp;{q.question}
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="mb-6">
					<button onClick={calcTotal} className="bg-gray-100 hover:bg-gray-200 w-full p-3 text-gray-900">
						Submit
					</button>
				</section>
			</main>
			<section>
				<section className="hidden total">You scored a Total of {total}/6</section>
				<button onClick={tryAgain} className="try-again hidden">
					Try Again
				</button>
			</section>
		</Fragment>
	);
};

export default App;
