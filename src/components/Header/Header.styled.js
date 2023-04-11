import styled from 'styled-components';

export const PrimaryHeader = styled.header`
display: flex;
justify-content: space-between;
position: absolute;
z-index:10;
right:0;
left:0;
align-items:center;
padding: 18px 16px;
max-width: 343px;
margin-left:auto;
margin-right:auto;
@media (min-width: 768px) {
  max-width: 704px;
}
@media (min-width: 1280px) {
  padding:18px 0;
  max-width: 1240px;
}
`

export const WraperHeaderModal = styled.div`
position: relative:
padding-top:18px;
display:flex;
text-align:center;
justify-content: space-between;
`