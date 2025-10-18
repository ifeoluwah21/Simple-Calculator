import type React from 'react';
import { cn } from '../utils/utils';

const Button: React.FC<
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		children: string;
		inputvalue: (input: string) => void;
	}
> = ({ className, children, inputvalue, ...props }) => {
	return (
		<button
			className={cn(
				'one:bg-theme-1-gray-200 hover:brightness-150 one:text-theme-1-navy-750 two:text-theme-2-gray-900 two:bg-theme-2-grey-200 three:bg-theme-3-purple-850 three:text-theme-3-yellow-300 inset-shadow-[0px_-2px_0px_0px] one:inset-shadow-theme-1-gray-400 two:inset-shadow-theme-2-grey-450 py-2 three:inset-shadow-theme-3-purple-750 rounded-md',
				className
			)}
			onClick={(e) => {
				inputvalue(e.currentTarget.value);
			}}
			value={children}
			type="button"
			{...props}>
			{children}
		</button>
	);
};

export default Button;
