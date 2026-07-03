"use client";

import LearningFormPage from '../../components/LearningFormPageComponent/LearningFormComponent';
import { singleFormData } from '../../data/singleFormData';

export default function SingleFormPage() {
  return <LearningFormPage data={singleFormData} />;
}
