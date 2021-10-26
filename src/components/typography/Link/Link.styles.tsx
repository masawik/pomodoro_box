import styled, { css } from 'styled-components'

// todo убрать это и сделать просто кастомный компонент если это больше нигде не понадобится
interface StyledLinkProps {
  hoverPaintItem?: {
    selector: string,
    property: string
  };
}

export const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  ${({ theme: { linkColor, colors, transitionDuration } }) => css`
    display: flex;
    align-items: center;
    color: ${colors[linkColor].normal};
    transition-duration: ${transitionDuration}ms;
    transition-property: color;

    svg {
      margin-right: 5px;
    }

    :hover {
      color: ${colors[linkColor].dark};
    }
  `}

  ${({
       hoverPaintItem,
       theme: { linkColor, colors, transitionDuration },
     }) => hoverPaintItem && css`
    ${hoverPaintItem.selector} {
      transition-property: ${hoverPaintItem.property};
      transition-duration: ${transitionDuration}ms;
    }

    :hover {
      ${hoverPaintItem.selector} {
        ${hoverPaintItem.property}: ${colors[linkColor].dark};
      }
    }
  `}
`