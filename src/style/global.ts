import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
:root{
  --bg-color-primaray: #15172E;
  --bg-color-secondary: #272A43;
  --text-color-primary: #E8EAFF;
  --accent-color-primary: #DF963D;
  --accent-color-secundary: #0B0D23;
}
*{
  margin: 0;
  padding: 0;
  background-color: var(--bg-color-primaray);
  color: var(--text-color-primary);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}
`