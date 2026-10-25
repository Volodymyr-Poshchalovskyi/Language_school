import React, { Suspense } from 'react';
import ApplicationPage from '../../components/ApplicationPage/ApplicationPage';

export const metadata = {
  title: "Trial Lesson Application - Besondres Deutch",
  description: "Sign up for a trial German lesson at Besondres Deutch.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ApplicationPage />
    </Suspense>
  );
}
