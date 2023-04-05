import styled from 'styled-components';

export const PrimaryHeader = styled.header`
display: flex;
justify-content: space-between;
${'' /* position: absolute; */}
z-index:10;
align-items:center;
padding: 18px 16px;
${'' /* width:100%; */}
${'' /* margin-left:auto;
margin-right:auto; */}
@media (min-width: 768px) {
}
@media (min-width: 1280px) {
  padding:18px 0;
}
`
export const HeaderWrapper = styled.div`
${'' /* display:flex;
align-items: center; */}

${'' /* margin-left: 0;
margin-right: 0;
position: absolute;
z-index:10;
align-items:center;
align-content: center;
justify-content: space-between;

@media (min-width: 768px) {
padding: 18px 16px;

}
@media (min-width: 1280px) {
padding: 18px 100px;
} */}
`
export const WraperHeaderModal = styled.div`
padding: 18px 16px;
width:100wv;
display:flex;
${'' /* text-align:center; */}
justify-content: space-around;
`