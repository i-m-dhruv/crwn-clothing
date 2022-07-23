import SingnUpForm from '../../components/sign-up-form/sign-up-form.component';
import SingnInForm from '../../components/sign-in-form/sign-in-form.component';
import './autjentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SingnInForm />
      <SingnUpForm />
    </div>
  );
};

export default Authentication;
