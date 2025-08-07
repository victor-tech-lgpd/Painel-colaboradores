import React, { useReducer, Suspense } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employeeSchema, EmployeeFormData } from '@/types/employee';
import { addEmployee } from '@/services/employee.service';
import { MultiStepFormProvider, formReducer, initialState } from '@/contexts/MultiStepFormContext';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { Box, Typography, Paper, LinearProgress, CircularProgress } from '@mui/material';
import Step1 from '@/components/AddEmployeeForm/Step1';
import FormNavigation from '@/components/AddEmployeeForm/FormNavigation';
import { useNavigate } from 'react-router-dom';

// Carregamento "lazy" para o componente da segunda etapa
const Step2 = React.lazy(() => import('@/components/AddEmployeeForm/Step2'));

const FormContent: React.FC = () => {
  const { currentStep } = useMultiStepForm();
  const progress = currentStep === 1 ? 0 : 50;

  const title = currentStep === 1
    ? "Informações Básicas (Etapa 1 de 2)"
    : "Informações Profissionais (Etapa 2 de 2)";

  return (
    <Paper sx={{ p: { xs: 2, sm: 4 }, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" component="h1" sx={{ mb: 1, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 4 }} />

      {/* --- INÍCIO DA PARTE ADICIONADA --- */}
      <Suspense fallback={<Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>}>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
      </Suspense>
      {/* --- FIM DA PARTE ADICIONADA --- */}

      <FormNavigation />
    </Paper>
  );
};

const AddEmployeePage: React.FC = () => {
    const navigate = useNavigate();
  const [state, dispatch] = useReducer(formReducer, initialState);
  const methods = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: initialState.formData,
    mode: 'onChange',
  });

 const onSubmit = async (data: EmployeeFormData) => {
    try {
      const { statusOnCreate, ...employeeData } = data;
      
      // Correção: Definimos explicitamente o tipo da variável status
      const status: 'active' | 'inactive' = statusOnCreate ? 'active' : 'inactive';

      const finalData = {
        ...employeeData,
        status: status, // Usamos a variável com o tipo correto
      };
      console.log("Dados prontos para envio:", finalData);

      await addEmployee(finalData);

      alert('Colaborador cadastrado com sucesso!');
      navigate('/colaboradores');

    } catch (error) {
      alert('Falha ao cadastrar colaborador. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <MultiStepFormProvider value={{ state, dispatch }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <FormContent />
        </form>
      </FormProvider>
    </MultiStepFormProvider>
  );
};

export default AddEmployeePage;