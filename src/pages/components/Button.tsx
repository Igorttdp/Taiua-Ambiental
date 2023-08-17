import styled from "styled-components";
import { CssVars, ButtonVariant } from "@/interfaces/Enums";

interface IButtonProps {
  $variant?: ButtonVariant;
}

const Button = styled.button<IButtonProps>`
  display: inline-flex;
  padding: 8px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 2px solid
    var(
      ${({ $variant }) =>
      $variant === ButtonVariant.GREEN ||
        $variant === ButtonVariant.OUTLINE_GREEN ||
        $variant === ButtonVariant.OUTLINE_GREEN_TEXT
          ? CssVars.GREEN_600
          : CssVars.BLUE_400}
    );
  background: var(
    ${({ $variant }) =>
      $variant && $variant === ButtonVariant.GREEN
        ? CssVars.GREEN_600
        : $variant && [1, 2, 4, 5].includes($variant)
        ? CssVars.TRANSPARENT
        : CssVars.DEFAULT}
  );
  color: var(
    ${({ $variant }) =>
      $variant && [1, 4].includes($variant)
        ? CssVars.WHITE
        : $variant && $variant === ButtonVariant.OUTLINE_BLUE_TEXT
        ? CssVars.BLUE_900
        : $variant && $variant === ButtonVariant.OUTLINE_GREEN_TEXT
        ? CssVars.GREEN_900
        : CssVars.WHITE}
  );
  font-size: 20px;

  &:hover {
    background: var(
      ${({ $variant }) =>
        $variant && [1, 2].includes($variant)
          ? CssVars.DEFAULT
          : $variant && [4, 5].includes($variant)
          ? CssVars.GREEN_600
          : CssVars.DEFAULT}
    );

    color: var(${CssVars.WHITE});
  }
`;

export default Button;
