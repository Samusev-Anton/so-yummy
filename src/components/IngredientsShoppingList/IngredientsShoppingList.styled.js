import styled from 'styled-components';
import { XLg } from '@styled-icons/bootstrap/XLg';

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 100px;
`;

export const Blocks = styled.div`
  //   display: flex;
  //   flex-wrap: wrap;
  //
`;

export const TableHead = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 8px;
  background: #8baa36;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #fafafa;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.44;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    line-height: 1.5;
    padding: 21px 40px;
    letter-spacing: 0.03em;
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
  margin-right: 24px;

  @media (min-width: 768px) {
    margin-right: 78px;
  }

  @media (min-width: 1280px) {
    margin-right: 142px;
  }
`;

export const TableHeadRemove = styled.div`
  display: flex;
  align-items: center;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 25px 22px 23px 0px;
  border-bottom: ${p => p.theme.borders.rowBorder};

  @media (min-width: 768px) {
    padding: 44px 45px 43px 0px;
  }

  @media (min-width: 1280px) {
    padding: 44px 70px 43px 40px;
  }
`;

export const TableProduct = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 2;
`;

export const TableProductBox = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 12px;
  background: ${p => p.theme.colors.ingredientBlock};

  border-radius: 6px;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 93px;
    height: 97px;
    // padding: 12px 15px;
    margin-right: 16px;
    border-radius: 8px;
  }
`;

export const TableProductText = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${p => p.theme.colors.secondaryDark};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
export const TableNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 37px;
  min-height: 23px;
  max-width: 75px;
  padding: 4px;

  background: #8baa36;
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: #fafafa;
  margin-right: 48px;

  @media (min-width: 768px) {
    max-width: 150px;
    // height: 35px;
    font-size: 18px;
    margin-right: 110px;
  }
  @media (min-width: 1280px) {
    margin-right: 174px;
  }
`;

export const TableNumber = styled.div``;

export const TableRemove = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const XIcon = styled(XLg)`
  color: ${p => p.theme.colors.secondaryDark};
  width: 13.33px;

  @media (min-width: 768px) {
    width: 18.675px;
  }
`;

export const EmptyList = styled.p`
  color: ${p => p.theme.colors.secondaryDark};
  text-align: center;
  padding-top: 50px;
  padding-bottom: 200px;
  font-size: 22px;
`;
