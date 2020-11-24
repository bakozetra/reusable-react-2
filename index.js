import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults , ...props }) => {
	const [count , setCount] = useState("");
	const [ textLength , setTextLength] = useState('');
	const [max , setMax] = useState(0);
	const maxLength = 280;

	function addText (badm) {
		setCount(prev => prev += badm)
	}

	return (
		<div className={`counterInput ${count.length > maxLength && 'tooLong'}`}>
			<div>
				{defaults.map(b => {
					return <button key={b} onClick={() => setCount(b)}>{b}</button>;
				})}
			</div>
			<textarea placeholder={text}
			 type ="text"
			 value={count}
			 onChange ={ (e) =>  {
				setCount(e.currentTarget.value);
			 }
		}
			/>
			<div>{count.length}/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];
	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
