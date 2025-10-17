import { useState } from 'react';
import Button from './components/Button';
import ThemeToggler from './components/ThemeToggler';

function App() {
	const [value, setValue] = useState<string>('');
	const [theme, setTheme] = useState<'one' | 'two' | 'three'>('one');
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
		<main className={`${theme} font-spartan text-2xl`}>
			<section className="flex items-center justify-center w-screen min-h-[100dvh] one:bg-theme-1-navy-850 two:bg-theme-2-gray-200 three:bg-theme-3-purple-950 ">
				<div className="max-w-[400px] min-w-[300px] w-4/5 m-auto space-y-6">
					<header className="flex justify-between one:text-theme-white two:text-theme-2-gray-900 three:text-theme-3-yellow-300 font-bold">
						<h1>calc</h1>
						<div className="flex items-center gap-x-8">
							<p className="font-semibold text-sm">THEME</p>
							<ThemeToggler
								theme={theme}
								setTheme={setTheme}
							/>
						</div>
					</header>
					<div className="w-full one:bg-theme-1-navy-950 two:bg-theme-2-gray-100 three:bg-theme-3-purple-900 h-[130px] rounded-xl one:text-theme-white two:text-theme-2-gray-900 three:text-theme-3-yellow-300 text-4xl flex items-center text-right px-4 outline:none border-none focus:outline-none">
						<span className="w-full text-right font-bold overflow-x-scroll hide-scrollbar">
							{value}
						</span>
					</div>

					<div className="one:bg-theme-1-navy-900 two:bg-theme-2-gray-300 three:bg-theme-3-purple-900 grid grid-cols-4 font-bold rounded-xl p-4 gap-4">
						<Button inputvalue={inputValue}>7</Button>
						<Button inputvalue={inputValue}>8</Button>
						<Button inputvalue={inputValue}>9</Button>
						<Button
							inputvalue={inputValue}
							className="one:bg-theme-1-navy-700 one:text-theme-white two:text-theme-white two:bg-theme-2-blue-500 three:bg-theme-3-purple-800 three:text-theme-white one:inset-shadow-theme-1-navy-800 two:inset-shadow-theme-2-blue-600 three:inset-shadow-theme-3-purple-400">
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
							className="one:bg-theme-1-navy-700 one:text-theme-white two:text-theme-white two:bg-theme-2-blue-500 three:bg-theme-3-purple-800 three:text-theme-white one:inset-shadow-theme-1-navy-800 two:inset-shadow-theme-2-blue-600 three:inset-shadow-theme-3-purple-400 col-span-2 ">
							RESET
						</Button>
						<Button
							inputvalue={inputValue}
							className="one:bg-theme-1-red-600 one:text-theme-white two:text-theme-white two:bg-theme-2-orange-700 three:bg-theme-3-cyan-500 three:text-theme-3-blue-950 one:inset-shadow-theme-1-red-800 two:inset-shadow-theme-2-orange-800 three:inset-shadow-theme-3-cyan-400 col-span-2">
							=
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
