import './globals.css';
import ClientLayout from './client-layout';

export const metadata = {
  title: "Besondres Deutch - Школа німецької мови",
  description: "Вивчайте німецьку мову ефективно з Besondres Deutch. Індивідуальні та групові заняття.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

// Runs before first paint so the correct theme is applied without a flash.
const themeScript = `
(function() {
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var apply = function(dark) { document.documentElement.classList.toggle('dark', dark); };
  apply(mq.matches);
  mq.addEventListener('change', function(e) { apply(e.matches); });
})();
`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the theme script adds the "dark" class to <html> before React hydrates.
    <html lang="uk" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&family=Viaoda+Libre&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
