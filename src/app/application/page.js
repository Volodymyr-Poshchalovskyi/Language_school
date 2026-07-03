import React, { Suspense } from 'react';
import ApplicationPage from '../../components/ApplicationPage/ApplicationPage';

export const metadata = {
  title: "Заявка на пробне заняття - Besondres Deutch",
  description: "Запишіться на пробне заняття німецької мови в Besondres Deutch.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Завантаження...</div>}>
      <ApplicationPage />
    </Suspense>
  );
}
