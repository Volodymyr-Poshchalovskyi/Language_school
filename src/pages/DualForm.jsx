//* A page component dedicated to rendering a form using the 'dual' data set.

// * The reusable form component that handles the rendering and logic.
import LearningFormPage from '../components/LearningFormPageComponent/LearningFormComponent';
// ! The static data object specifically for this form, imported from a data file.
import { dualFormData } from '../data/dualFormData';

function DualForm() {
  // * Renders the LearningFormPage and passes the `dualFormData` as props.
  // ? This pattern highlights the reuse of a generic component with different data.
  return <LearningFormPage data={dualFormData} />;
}

// * Exports the component for use in the router.
export default DualForm;
