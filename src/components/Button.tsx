import type React from 'react';
import { cn } from '../utils/utils';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => {
	return (
		<button
			className={cn(
				'one:bg-theme-1-gray-200 inset-shadow-[0px_-2px_0px_0px] one:inset-shadow-theme-1-gray-400 py-2 rounded-md',
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
