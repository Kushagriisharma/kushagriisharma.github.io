import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Background3D from '@/components/Background3D';
import CommandPalette from '@/components/CommandPalette';
import LenisProvider from '@/components/LenisProvider';

export const metadata: Metadata = {
  title: 'Kushagri Sharma | Software Engineer & AI/ML Developer',
  description:
    'Portfolio of Kushagri Sharma. B.Tech CSE (Artificial Intelligence) student at Medi-Caps University. Developer experienced in Python, Next.js, and Machine Learning systems.',
  keywords: [
    'Kushagri Sharma',
    'Software Engineer',
    'Python Developer',
    'AI ML Developer',
    'Medi-Caps University',
    'Web Developer Portfolio',
    'Alertify',
    'Plant Disease Recognition',
  ],
  authors: [{ name: 'Kushagri Sharma', url: 'https://github.com/Kushagriisharma' }],
  creator: 'Kushagri Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kushagriisharma.github.io/',
    title: 'Kushagri Sharma | Software Engineer & AI/ML Developer',
    description:
      'Explore the software engineering, Python/ML internships, and innovative projects of Kushagri Sharma.',
    siteName: 'Kushagri Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushagri Sharma | Software Engineer',
    description:
      'Portfolio of Kushagri Sharma, B.Tech CSE student specializing in AI/ML workflows and full-stack web architectures.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col relative">
        <LenisProvider>
          {/* Custom Interactive Elements */}
          <CustomCursor />
          <Background3D />
          <CommandPalette />
          
          {/* Persistent Navbar */}
          <Navbar />
          
          {/* Main Content Render */}
          <main className="flex-grow w-full relative z-10 pt-24">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
