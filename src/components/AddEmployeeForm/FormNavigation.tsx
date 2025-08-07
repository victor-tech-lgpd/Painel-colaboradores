import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';

const FormNavigation: React.FC = () => {
  const { currentStep, prevStep, nextStep } = useMultiStepForm();
  

  // ADICIONE ESTA LINHA PARA DEPURAR
  console.log("VALOR ATUAL DE currentStep:", currentStep);

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
      {currentStep === 1 ? (
        <Box />
      ) : (
        <Button variant="outlined" onClick={prevStep}>
          Voltar
        </Button>
      )}
      
      {currentStep === 2 ? (
        <Button type="submit" variant="contained">
          Concluir
        </Button>
      ) : (
        <Button onClick={nextStep} variant="contained">
          Próximo
        </Button>
      )}
    </Stack>
  );
};

export default FormNavigation;