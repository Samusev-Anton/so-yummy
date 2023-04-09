import { useSelector } from 'react-redux';
import { getMode } from '../../../redux/theme/themeSelector';
import {MainPageTitleStyled, TitleConteiner} from "./MainPageTitle.styled";

export const MainPageTitle = ({value}) => {
    const { mode } = useSelector(getMode);
    return (
        <TitleConteiner mode={mode}>
            <MainPageTitleStyled>{value}</MainPageTitleStyled>
        </TitleConteiner>
    )
}
