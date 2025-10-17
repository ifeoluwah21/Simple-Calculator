'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const themes = [
	{
		key: 'one',
		icon: Moon,
		label: 'one theme',
	},
	{
		key: 'two',
		icon: Sun,
		label: 'two theme',
	},
	{
		key: 'three',
		icon: Monitor,
		label: 'three theme',
	},
];

export type ThemeSwitcherProps = {
	value?: 'two' | 'one' | 'three';
	onChange?: (theme: 'two' | 'one' | 'three') => void;
	defaultValue?: 'two' | 'one' | 'three';
	className?: string;
};

export const ThemeSwitcher = ({
	value,
	onChange,
	defaultValue = 'one',
	className,
}: ThemeSwitcherProps) => {
	const [theme, setTheme] = useControllableState({
		defaultProp: defaultValue,
		prop: value,
		onChange,
	});
	const [mounted, setMounted] = useState(false);

	const handleThemeClick = useCallback(
		(themeKey: 'two' | 'one' | 'three') => {
			setTheme(themeKey);
		},
		[setTheme]
	);

	// Prevent hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div
			className={cn(
				'relative isolate flex h-8 rounded-full one:bg-theme-1-navy-900 two:bg-theme-2-gray-300 three:bg-theme-3-purple-900 p-1 ring-1 ring-border',
				className
			)}>
			{themes.map(({ key, label }) => {
				const isActive = theme === key;

				return (
					<button
						aria-label={label}
						className="relative h-6 w-6 rounded-full"
						key={key}
						onClick={() => handleThemeClick(key as 'one' | 'two' | 'three')}
						type="button">
						{isActive && (
							<motion.div
								className="absolute inset-0 rounded-full bg-none"
								layoutId="activeTheme"
								transition={{ type: 'spring', duration: 0.2 }}
							/>
						)}
						<p
							className={cn(
								'relative z-10 m-auto h-4 w-4 rounded-full one:bg-theme-1-red-600 two:bg-theme-2-orange-700 three:bg-theme-3-cyan-500',
								isActive ? 'opacity-100' : 'opacity-0'
							)}></p>
					</button>
				);
			})}
		</div>
	);
};
