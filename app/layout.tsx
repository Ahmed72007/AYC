import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const metadata: Metadata = {
  title: 'Youth Circle | Empowering Muslim Youth',
  description: 'Faith • Fitness • Fellowship — Building confident, faithful, and empowered Muslim youth in Karachi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}