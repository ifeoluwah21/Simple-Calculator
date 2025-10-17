import { useState } from 'react';
import Button from './components/Button';

function App() {
	const [value, setValue] = useState<string>('');
	function inputValue(input: string) {
		switch (input) {
			case 'DEL': {
				const newValue = value.split('');
				newValue.pop();
				setValue(newValue.join(''));
				return;
			}
			case 'RESET': {
				setValue('');
				return;
			}
			case '=': {
				const answer = eval(value);
				setValue(answer);
				return;
			}
		}
		setValue((prev) => prev + input);
		return;
	}
	return (
		<main className="one font-spartan text-2xl font-bold">
			<section className="flex items-center justify-center w-screen min-h-[100dvh] one:bg-theme-1-navy-850">
				<div className="max-w-[400px] min-w-[300px] w-4/5 m-auto space-y-6">
					<header className="flex justify-between text-theme-1-white">
						<h1>Calc</h1>
						<p>theme</p>
					</header>
					<div className="w-full one:bg-theme-1-navy-950 h-[130px] rounded-xl one:text-theme-1-white text-4xl flex items-center text-right px-4 outline:none border-none focus:outline-none">
						<span className="w-full text-right overflow-x-scroll hide-scrollbar">
							{value}
						</span>
					</div>

					<div className="one:bg-theme-1-navy-900 grid grid-cols-4 font-bold rounded-xl p-4 gap-4">
						<Button inputvalue={inputValue}>7</Button>
						<Button inputvalue={inputValue}>8</Button>
						<Button inputvalue={inputValue}>9</Button>
						<Button
							inputvalue={inputValue}
							className="one:bg-theme-1-navy-700 one:inset-shadow-theme-1-navy-800">
							DEL
						</Button>
						<Button inputvalue={inputValue}>4</Button>
						<Button inputvalue={inputValue}>5</Button>
						<Button inputvalue={inputValue}>6</Button>
						<Button inputvalue={inputValue}>+</Button>
						<Button inputvalue={inputValue}>1</Button>
						<Button inputvalue={inputValue}>2</Button>
						<Button inputvalue={inputValue}>3</Button>
						<Button inputvalue={inputValue}>-</Button>
						<Button inputvalue={inputValue}>.</Button>
						<Button inputvalue={inputValue}>0</Button>
						<Button inputvalue={inputValue}>/</Button>
						<Button inputvalue={inputValue}>x</Button>
						<Button
							inputvalue={inputValue}
							className="one:bg-theme-1-navy-700 one:inset-shadow-theme-1-navy-800 col-span-2 ">
							RESET
						</Button>
						<Button
							inputvalue={inputValue}
							className="one:bg-theme-1-red-600 one:inset-shadow-theme-1-red-800 col-span-2">
							=
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
