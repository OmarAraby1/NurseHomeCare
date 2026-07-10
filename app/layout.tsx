import type {Metadata} from 'next';
import { Cairo, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-cairo',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Nurses Home Care | رعاية تمريض منزلي - Professional Home Nursing Saudi Arabia',
  description: 'Nurses Home Care (رعاية تمريض منزلي) provides premium, trusted, and compassionate professional home nursing and healthcare services for all ages across Saudi Arabia. Contact us at 0551404251.',
  metadataBase: new URL('https://nursecare24.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nurses Home Care | رعاية تمريض منزلي',
    description: 'Premium professional home nursing and healthcare services for all ages in Saudi Arabia. Safe, trusted, and dedicated nursing care.',
    url: 'https://nursecare24.com',
    siteName: 'Nurses Home Care',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" className={`${cairo.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased text-slate-800 bg-stone-50 min-h-screen font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
