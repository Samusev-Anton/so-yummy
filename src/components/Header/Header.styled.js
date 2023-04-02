import styled from 'styled-components';

export const PrimaryHeader = styled.header`
 display: flex;
justify-content: space-between;
align-items:center;

${'' /* width: 100vw; */}

@media (min-width: 480px) {

  }
@media (min-width: 768px) {

}
@media (min-width: 1280px) {

}
`
export const HeaderWrapper = styled.div`
padding: 18px 16px;
position: absolute;
z-index:10;

@media (min-width: 768px) {
padding: 18px 16px;

}
@media (min-width: 1280px) {
padding: 18px 100px;
}
`
export const WraperHeaderModal = styled.div`
padding: 18px 16px;
${'' /* max-width:100vw; */}
display:flex;
text-align:center;
justify-content: space-between;
`