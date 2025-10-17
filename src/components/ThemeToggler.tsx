import { ThemeSwitcher } from '@/components/ui/shadcn-io/theme-switcher';
const ThemeToggler: React.FC<{
	theme: 'one' | 'two' | 'three';
	setTheme: (theme: 'one' | 'two' | 'three') => void;
}> = ({ theme, setTheme }) => {
	return (
		<ThemeSwitcher
			className="bg-theme-1-navy-900"
			defaultValue="one"
			onChange={setTheme}
			value={theme}
		/>
	);
};

export default ThemeToggler;
