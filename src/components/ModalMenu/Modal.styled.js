import styled from "styled-components";
import ModalImgMobile from "images/modal-picture-mobile.png"
import ModalImgTablet from "images/modal-picture-tablet.png"

export const Overlay = styled.div`
${'' /* display: flex; */}
${'' /* flex-direction: column; */}
height: 100vh;
width: 100vw;
left: 0;
top:0;
position: fixed;
z-index: 1000;
padding-top:18px;
${'' /* justify-content: flex-start; */}
${'' /* align-items: center; */}
background-image: url(${ModalImgMobile});
background-repeat: no-repeat;
background-position: bottom right;
background-color:#EBF3D4;
@media (min-width: 768px) {
    background-image: url(${ModalImgTablet});
}
`
export const ModalWindow = styled.div`

background-color: #EBF3D4;
` 