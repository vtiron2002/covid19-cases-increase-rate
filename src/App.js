import React, { useEffect, useState } from 'react';
import './App.css';
import CountUp from 'react-countup';

function App() {
	const [state, setState] = useState({});

	useEffect(() => {
		document.querySelector('body').classList.add('bg-dark');
		document.querySelector('body').classList.add('text-white');
		const fetchData = async () => {
			let data = [];
			await fetch(`https://covid19.mathdro.id/api/daily`)
				.then((res) => res.json())
				.then((res) => (data = res))
				.catch((err) => console.log({ message: err }));
			let confirmedNumbers = await [];
			data.forEach((day) => confirmedNumbers.push(day.totalConfirmed));

			const recentCases = data[data.length - 1].totalConfirmed;
			const previousCases = data[data.length - 2].totalConfirmed;
			const recentDate = data[data.length - 1].reportDate;
			const previousDate = data[data.length - 2].reportDate;
			const upBy = parseFloat(
				(((recentCases - previousCases) / recentCases) * 100).toFixed(2),
			);

			setState({
				recentCases,
				previousCases,
				recentDate,
				previousDate,
				upBy,
			});
		};
		fetchData();
	}, []);

	console.log(state.upBy);

	return (
		<div className='container' style={s.container}>
			<main className='cover' style={s.cover}>
				<h1 className='text-center text-info title'>
					Total Recent COVID19 Cases Increase Rate
				</h1>
				<h2 className='display-3 text-success'>
					{state.upBy && (
						<CountUp
							start={0}
							end={state.upBy}
							duration={2.75}
							decimal='.'
							decimals='2'
						/>
					)}
					%
				</h2>
				<h3 className='text-center text-muted dates'>
					COVID19 total confirmed cases went up by{' '}
					<CountUp
						start={0}
						end={state.upBy}
						duration={2.75}
						decimal='.'
						decimals='2'
					/>
					{state.upBy && (
						<CountUp
							start={0}
							end={state.upBy}
							duration={2.75}
							decimal='.'
							decimals='2'
						/>
					)}
					% from <span className='text-warning'>{state.previousDate}</span> to{' '}
					<span className='text-warning'>{state.recentDate}</span>
				</h3>
				<div className='text-muted casess'>
					<h3 className='text-center case'>
						{state.previousDate}:{' '}
						<span className='text-danger'>
							{state.previousCases && (
								<CountUp
									start={0}
									end={state.previousCases}
									duration={2.75}
									separator={','}
								/>
							)}
						</span>{' '}
						cases
					</h3>
					<h3 className='text-center case'>
						{state.recentDate}:{' '}
						<span className='text-danger'>
							{state.recentCases && (
								<CountUp
									start={0}
									end={state.recentCases}
									duration={2.75}
									separator={','}
								/>
							)}
						</span>{' '}
						cases
					</h3>
				</div>
			</main>
		</div>
	);
}

const s = {
	container: {
		display: `flex`,
		justifyContent: `center`,
		alignItems: `center`,
		height: `100vh`,
	},
	cover: {
		width: `100%`,
		height: `${60}%`,
		display: `flex`,
		justifyContent: `space-evenly`,
		alignItems: `center`,
		flexDirection: `column`,
	},
};

export default App;
