//* A page component responsible for rendering a form using a specific data set.

// * The core form component that handles the rendering logic.
import LearningFormPage from '../components/LearningFormPageComponent/LearningFormComponent';
// ! The static data object specifically for this form, imported from a data file.
import { singleFormData } from '../data/singleFormData';

function SingleForm() {
  // * Renders the LearningFormPage and passes the `singleFormData` as a prop.
  // ? This pattern cleanly separates the page's structure from its specific data.
  return <LearningFormPage data={singleFormData} />;
}

// * Exports the component for use in the router.
export default SingleForm;
