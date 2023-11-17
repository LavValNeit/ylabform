import styled, { RuleSet, css } from "styled-components";

type SizesType = {
  small: RuleSet;
  medium: RuleSet;
  large: RuleSet;
};

const sizes: SizesType = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const Button = styled.button<{ $size: string }>`
  border: none;
  border-radius: 5px;
  box-shadow: var(--shadow-small);
  color: var(--color-white-100);
  background-color: var(--color-blue-600);

  &:hover {
    background-color: var(--color-blue-700);
  }

  ${(props) => sizes[props.$size as keyof SizesType]}
`;

Button.defaultProps = {
  $size: "medium",
};
export default Button;
