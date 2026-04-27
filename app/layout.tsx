import type { Metadata } from 'next';
import './globals.css';
import BackdropGradient from '@/components/BackdropGradient';

export const metadata: Metadata = {
  title: 'Rishan | Web Developer & Designer',
  description: 'Crafting digital experiences that feel like premium products. Web Developer, Designer, AI Integration & Vibe Coding Expert.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <BackdropGradient />
        {children}
      </body>
    </html>
  );
}
