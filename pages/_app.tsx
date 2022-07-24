import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	if (typeof window === 'undefined') {
		return <></>;
	} else {
		return <Component {...pageProps} />;
	}
}

export default MyApp;
