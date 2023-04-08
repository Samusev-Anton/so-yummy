import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import picDesk1x from '../../images/welcome-pic/log-reg-picDesk1x.png';
import picDesk2x from '../../images/welcome-pic/log-reg-picDesk2x.png';
import picTab1x from '../../images/welcome-pic/log-reg-picTab.png';

import picTab2x from '../../images/welcome-pic/log-reg-picTab2x.png';
import picMob1x from '../../images/welcome-pic/log-reg-picMob1x.png';
import picMob2x from '../../images/welcome-pic/log-reg-picMob2x.png';

import { Wrapper, ImgBox } from './RegisterPage.styled';

export const SignUpPage = () => {
  return (
    <Wrapper>
      <ImgBox alt="Register">
        <source
          srcSet={`${picDesk1x}, ${picDesk2x} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${picTab1x}, ${picTab2x} 2x`}
          media="(min-width: 768px)"
        />

        <img
          src={picMob1x}
          srcSet={`${picMob1x}, ${picMob2x} 2x`}
          alt="Register"
        />
      </ImgBox>

      <RegisterForm />
    </Wrapper>
  );
};
