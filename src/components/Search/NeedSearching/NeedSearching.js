import {
    NeedSearchingWrap,
    NeedSearchingImg,
    NeedSearchingText,
} from '../NeedSearching/NeedSearching.styled';

export const NeedSearching = () => {
    return (
    <>
        <NeedSearchingWrap>
            <NeedSearchingImg></NeedSearchingImg>
            <NeedSearchingText>Try looking for something else...</NeedSearchingText>
        </NeedSearchingWrap>
    </>       
    );
}
