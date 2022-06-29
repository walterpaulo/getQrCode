import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  background-color: var(--bg-color-primaray);
  color: var(--text-color-primary);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}
`