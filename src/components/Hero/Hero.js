
import { SectionHero, HeroTitle, HeroImgBlock, ShpinashImg, BlockPlateImg, HeroTitleSo, HeroText, HeroInputSearch, HeroRecipeWrapper, HeroRecipeText, HeroRecipeAccent } from "./Hero.styled"

import { SearchForm } from "components/SearchInput/SearchForm"


const Hero = ()=>{


    return(
        <SectionHero>
        <HeroImgBlock>  
        <ShpinashImg>
         <BlockPlateImg/>
        </ShpinashImg> 
    
      
        </HeroImgBlock>
     <HeroTitle>
         <HeroTitleSo>So</HeroTitleSo>Yummy
         </HeroTitle>
         <HeroText>
         "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
         </HeroText>
         <HeroInputSearch>
            <SearchForm/>
         </HeroInputSearch>
<HeroRecipeWrapper>
    <HeroRecipeText>
    <HeroRecipeAccent>Delicious and healthy</HeroRecipeAccent> way to enjoy a variety of fresh ingredients in one satisfying meal
    </HeroRecipeText>
</HeroRecipeWrapper>
        </SectionHero>
        
    )
}
export default Hero