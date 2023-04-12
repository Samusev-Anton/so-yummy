import styled from 'styled-components';
import { Check } from '@styled-icons/entypo/Check';

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Blocks = styled.div``;

export const TableHead = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  margin-bottom: 24px;
  background: #8baa36;
  border-radius: 8px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: #fafafa;

  @media (min-width: 768px) {
    padding: 21px 32px;
    margin-bottom: 32px;
    font-size: 18px;
    letter-spacing: 0.03em;
  }

  @media (min-width: 1280px) {
    padding: 21px 40px;
    margin-bottom: 50px;
  }
`;

export const TableHeadProduct = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
`;

export const TableHeadNumber = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;

  @media (min-width: 768px) {
    margin-right: 38px;
  }

  @media (min-width: 1280px) {
    margin-right: 109px;
  }
`;

export const TableHeadRemove = styled.div`
  display: flex;
  align-items: center;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10.5px 29px 10px 10px;
  background: ${p => p.theme.colors.ingredientsBgrCol};
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    padding: 33px 58px 33px 40px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media (min-width: 1280px) {
    padding: 27px 70px 27px 58px;
  }
`;

export const TableProduct = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
`;

export const TableProductBox = styled.div`
  display: flex;

  width: 57px;
  height: 57px;
  border-radius: 6px;
  margin-right: 12px;

  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }

  @media (min-width: 1280px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const TableProductText = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${p => p.theme.colors.secondaryDark};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;
export const TableNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  max-width: 70px;
  background: #8baa36;
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: #fafafa;
  margin-right: 28px;
  text-align: right;

  @media (min-width: 768px) {
    max-width: 140px;
    padding: 4px 8px;
    font-size: 18px;
    margin-right: 78px;
  }
  @media (min-width: 1280px) {
    margin-right: 151px;
    max-width: 240px;
  }
`;

export const TableNumber = styled.div``;

export const TableRemove = styled.div``;

export const Checkbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
export const InputCheck = styled.input``;
export const CheckLabel = styled.label``;

export const CheckMark = styled(Check)`
  color: transparent;
  //   color: #8baa36;
  width: 13.15px;
  height: 13.15px;

  ${InputCheck}:checked + ${CheckLabel} & {
    color: #8baa36;
    border: none;
  }

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
// .input-check:checked + .check-label & {
//     fill: #ffffff;
//     border: none;
//   }
