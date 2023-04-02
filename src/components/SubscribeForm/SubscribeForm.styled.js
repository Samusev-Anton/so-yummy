import styled from 'styled-components';

export const Form = styled.form`
  width: 204px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmailField = styled.div`
  display: flex;
  padding: 11px 14px;
  align-items: center;
  //   justify-content: space-between;
  border: 1px solid #fafafa;
  border-radius: 6px;
`;

export const TextField = styled.input`
  //   padding-top: 11px;
  //   padding-bottom: 11px;
  background-color: transparent;
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  border: none;
  margin-left: 12px;
`;
export const SubscribeButton = styled.button`
  width: 100%;
  margin: 0 auto;
  padding-top: 11px;
  padding-bottom: 11px;
  background-color: #8baa36;
  border-radius: 6px;
  font-weight: 500;
  &:focus,
  &:hover {
    background-color: lightgreen;
    outline: transparent;
  }
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #fafafa;
`;
