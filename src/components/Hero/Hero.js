
import { SectionHero, WrapperText, HeroTitle, HeroTitleSo, HeroText, HeroInputSearch, HeroRecipeWrapper, HeroRecipeText, HeroRecipeAccent, HeroRecipeLink, HeroTitleYummy } from "./Hero.styled"

import { Search } from "components/SearchInput/Search"
import { Container } from "components/GlobalStyles"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Hero = () => {


    return (
        <SectionHero>
            <Container>
                <WrapperText>
                    <HeroTitle>
                        <HeroTitleSo>So</HeroTitleSo>
                        <HeroTitleYummy>Yummy</HeroTitleYummy>
                    </HeroTitle>
                    <HeroText>
                        "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
                    </HeroText>
                    <HeroRecipeWrapper>
                        <HeroRecipeText>
                            <HeroRecipeAccent>Delicious and healthy</HeroRecipeAccent> way to enjoy a variety of fresh ingredients in one satisfying meal
                        </HeroRecipeText>
                        <HeroRecipeLink to={`/categories`}>See recipes <ArrowForwardIcon sx={{ fontSize: 18 }} /></HeroRecipeLink>
                    </HeroRecipeWrapper>
                    <HeroInputSearch>
                        <Search />
                    </HeroInputSearch>
                </WrapperText>
            </Container>
        </SectionHero>
    )
}
