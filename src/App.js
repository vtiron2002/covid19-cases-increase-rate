import React, { useEffect, useState } from 'react';
import './App.css';

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
      const upBy = `${(
        ((recentCases - previousCases) / recentCases) *
        100
      ).toFixed(2)}%`;

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

  const numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  };

  return (
    <div className='container' style={s.container}>
      <main className='cover' style={s.cover}>
        <h1 className='text-center text-info'>
          Total Recent COVID19 Cases Increase Rate
        </h1>
        <h2 className='display-3 text-success'>{state.upBy}</h2>
        <h3 className='text-center text-muted'>
          COVID19 total confirmed cases went up by {state.upBy} from{' '}
          <span className='text-warning'>{state.previousDate}</span> to{' '}
          <span className='text-warning'>{state.recentDate}</span>
        </h3>
        <div className="text-muted">
          <h3 className='text-center'>
            {state.previousDate}:{' '}
            <span className="text-danger">{state.previousCases && numberWithCommas(state.previousCases)}</span> cases
          </h3>
          <h3 className='text-center'>
            {state.recentDate}:{' '}
            <span className="text-danger">{state.recentCases && numberWithCommas(state.recentCases)}</span> cases
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
