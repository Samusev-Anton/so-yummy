import svg from '../../images/bro.svg';
import darkbrodesktop from '../../images/darkbrodesktop.svg';
import { useSelector } from 'react-redux';
import { getMode } from '../../redux/theme/themeSelector';
import { NotFoundPageImg, Wraper, TextWrap } from './Page404.styled';
import { MainPageTitle } from '../MainPageTitle/MainPageTitle/MainPageTitle';

export const NullPage = () => {
  const { mode } = useSelector(getMode);
  return (
    <>
      <Wraper>
        <MainPageTitle />
        {mode === 'light' ? (
          <NotFoundPageImg src={svg} alt="peopleWithTree" />
        ) : (
          <NotFoundPageImg src={darkbrodesktop} alt="peopleWithTree" />
        )}
      </Wraper>
      <TextWrap>
        <h2>We are sorry,</h2>
        <p>but the page you were looking for can’t be found..</p>
      </TextWrap>
    </>
  );
};
