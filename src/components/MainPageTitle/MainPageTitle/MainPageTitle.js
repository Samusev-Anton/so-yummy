import {MainPageTitleStyled, TitleConteiner} from "./MainPageTitle.styled"

export const MainPageTitle = ({value}) => {
    return (
        <TitleConteiner>
            <MainPageTitleStyled>{value}</MainPageTitleStyled>
        </TitleConteiner>
    )
}
