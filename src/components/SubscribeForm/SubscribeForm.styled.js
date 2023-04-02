import styled from 'styled-components';

export const Form = styled.form`
  width: 204px;
  margin: 0 auto;
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmailField = styled.div`
  display: flex;
  padding: 11px 14px;
  align-items: center;
  //   justify-content: space-between;
  border: none;
  border: 1px solid rgba(250, 250, 250, 0.16);
  border-radius: 6px;
  outline-style: none;
  outline: none;
`;

export const TextField = styled.input`
  //   padding-top: 11px;
  //   padding-bottom: 11px;
  background-color: transparent;
  color: rgba(250, 250, 250, 1);
  // font-family: 'Poppins';
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
  &:focus,
  &:hover {
    color: #22252a;
    cursor: pointer;
  }
  // font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #fafafa;
  border: none;
`;
