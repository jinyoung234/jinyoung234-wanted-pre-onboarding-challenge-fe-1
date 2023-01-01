import styled from 'styled-components'

const NavWrapper = styled.ul`
  display: flex;
  li {
    margin-right: 0.5rem;
  }
  li:last-child {
    cursor: pointer;
    &:hover {
      color: gray;
    }
  }
`

export {NavWrapper}
