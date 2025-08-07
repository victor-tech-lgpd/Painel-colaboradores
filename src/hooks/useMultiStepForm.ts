import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { MultiStepFormContext } from '@/contexts/MultiStepFormContext';
import { EmployeeFormData } from '@/types/employee';

export const useMultiStepForm = () => {
  const context = useContext(MultiStepFormContext);
  if (!context) {
    throw new Error('useMultiStepForm deve ser usado dentro de um MultiStepFormProvider');
  }

  const { trigger } = useFormContext<EmployeeFormData>();
  const { state, dispatch } = context;

  const nextStep = async () => {
    // Define quais campos validar para cada etapa
    const fieldsToValidate: (keyof EmployeeFormData)[] =
      state.currentStep === 1 ? ['name', 'email'] : ['department'];

    // Aciona a validação do React Hook Form apenas para os campos da etapa atual
    const isValid = await trigger(fieldsToValidate);

    // Se os campos forem válidos, avança para a próxima etapa
    if (isValid) {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  return {
    currentStep: state.currentStep,
    nextStep,
    prevStep,
  };
};