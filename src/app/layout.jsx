import Script from 'next/script';
import { assetPath } from '@/lib/assets';
import './globals.css';

export const metadata = {
  title: 'Tan Wei Siang',
  description:
    'Portfolio of Tan Wei Siang, Lead Optical Transceiver Firmware Engineer, researcher, and software developer.',
  icons: {
    icon: assetPath('/planet-earth-9324.png'),
    apple: assetPath('/planet-earth-9324.png'),
  },
  manifest: assetPath('/manifest.json'),
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
