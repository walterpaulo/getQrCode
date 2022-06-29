import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Container, InputFlat, LabaleFlat } from './style';


interface IDarkModeCheckboxProps { }

export const ButtonColor: React.FC<IDarkModeCheckboxProps> = () => {
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <Container>
      <LabaleFlat htmlFor="switch-flat">
        <InputFlat 
          className="switch switch--flat" 
          type="checkbox"
          checked={isDark}
          onChange={() => toggleDarkMode()}
          />
          Tema escuro
      </LabaleFlat> 
    </Container>
  );
}