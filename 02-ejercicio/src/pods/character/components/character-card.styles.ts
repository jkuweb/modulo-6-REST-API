import { css } from '@emotion/css';

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const sentence = css`
  padding: 1rem;
  font-style: italic;
  &::first-letter{
    text-transform: capitalize
  }
`
