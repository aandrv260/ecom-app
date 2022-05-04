import { addCSSClassName } from '../../assets/scripts/functions';
import css from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <section className={addCSSClassName(css, 'section--contacts')}>
      Contacts
    </section>
  );
};

export default ContactsPage;
