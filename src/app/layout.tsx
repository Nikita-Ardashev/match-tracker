import Providers from '@/components/providers';
import { Metadata } from 'next';
import '@/styles/global.css';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
	title: 'Match Tracker',
	description: 'Просмотр статистики матчей в реальном времени',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<StyledComponentsRegistry>
				<Providers>{children}</Providers>
			</StyledComponentsRegistry>
		</html>
	);
}
