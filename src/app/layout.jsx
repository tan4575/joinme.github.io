import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Tan Wei Siang',
  description:
    'Portfolio of Tan Wei Siang, Lead Optical Transceiver Firmware Engineer, researcher, and software developer.',
  icons: {
    icon: '/planet-earth-9324.png',
    apple: '/planet-earth-9324.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `}
        </Script>
        {children}
      </body>
    </html>
  );
}
