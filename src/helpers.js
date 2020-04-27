import styled, { css } from 'styled-components';
import { keyBy } from "lodash/fp";

export const defaultLightBackground = '#fff';
export const defaultText = '#97999B';
export const darkGray = '#76787B';
export const defaultBorder = '#F1F1F2';
export const defaultBackground = '#F9F9FA';

export const FlexStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const flexHorizontal = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TEXT = css`
    font-size: 14px;
    line-height: 19px;
`;

export const BOX = css`
    background: ${defaultBackground};
    border-radius: 10px;
`;

export const ContentHeading = styled.div`
    font-size: 24px;
`;

export const WrapperFlex = styled.div`
    display: flex;
`;

export const keyById = items => keyBy('id', items);
