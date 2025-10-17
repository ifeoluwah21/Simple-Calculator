import Button from './components/Button';

function App() {
	return (
		<main className="one font-spartan text-2xl font-bold">
			<section className="flex items-center justify-center w-screen min-h-[100dvh] one:bg-theme-1-navy-850">
				<div className="max-w-[400px] min-w-[300px] w-4/5 m-auto space-y-6">
					<header className="flex justify-between text-theme-1-white">
						<h1>Calc</h1>
						<p>theme</p>
					</header>
					<div className="w-full one:bg-theme-1-navy-950 h-[130px] rounded-xl"></div>
					<div className="one:bg-theme-1-navy-900 grid grid-cols-4 font-bold rounded-xl p-4 gap-4">
						<Button type="button">7</Button>
						<Button type="button">8</Button>
						<Button type="button">9</Button>
						<Button
							type="button"
							className="one:bg-theme-1-navy-700 one:inset-shadow-theme-1-navy-800">
							DEL
						</Button>
						<Button type="button">4</Button>
						<Button type="button">5</Button>
						<Button type="button">6</Button>
						<Button type="button">+</Button>
						<Button type="button">1</Button>
						<Button type="button">2</Button>
						<Button type="button">3</Button>
						<Button type="button">-</Button>
						<Button type="button">.</Button>
						<Button type="button">0</Button>
						<Button type="button">/</Button>
						<Button type="button">x</Button>
						<Button
							type="button"
							className="one:bg-theme-1-navy-700 one:inset-shadow-theme-1-navy-800 col-span-2 ">
							RESET
						</Button>
						<Button
							type="button"
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
