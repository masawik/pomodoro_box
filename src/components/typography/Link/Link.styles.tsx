import styled, { css } from 'styled-components'

interface ISLinkProps {
  hoverPaintItem?: {
    selector: string,
    property: string
  };
}

export const SLink = styled.a<ISLinkProps>`
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
      transition-duration: ${transitionDuration}ms;
      transition-property: ${hoverPaintItem.property};
    }

    :hover {
      ${hoverPaintItem.selector} {
        ${hoverPaintItem.property}: ${colors[linkColor].dark};
      }
    }
  `}
`