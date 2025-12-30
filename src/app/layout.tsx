import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
    title: 'Co-Work Kerala',
    description: 'Find the best coworking spaces in Kerala',
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {children}
                <Toaster richColors position="top-center" />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
            </body>
        </html>
    );
}
