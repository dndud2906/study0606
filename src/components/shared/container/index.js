import styled from 'styled-components'

/**
 *  Container
 * maxWidth, width, margin, padding, centered
 */

export default styled.div`
  box-sizing: border-box;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ centered }) => centered && `margin: 0 auto;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ width }) => width && `width: ${width || '100%'};`}
  ${({ flex }) => flex && `display:flex;`}
  ${({ between }) => between && `justify-content: space-between;`}
  ${({ column }) => column && `flex-direction: column;`}
`
