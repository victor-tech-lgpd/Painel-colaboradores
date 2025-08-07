import { createContext, Dispatch } from 'react';
import { EmployeeFormData } from '@/types/employee';

// Define a "forma" do nosso estado global do formulário
export type FormState = {
  currentStep: number;
  formData: Partial<EmployeeFormData>; // Partial permite que os dados sejam preenchidos aos poucos
};

// Define os tipos de ações que podemos "despachar" para alterar o estado
export type FormAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_FORM_DATA'; payload: Partial<EmployeeFormData> };

// O estado inicial quando o formulário é carregado
export const initialState: FormState = {
  currentStep: 1,
  formData: {
    name: '',
    email: '',
    statusOnCreate: true,
    department: '',
  },
};

// O "Reducer": uma função pura que recebe o estado atual e uma ação, e retorna o novo estado
export const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'NEXT_STEP':
      // Garante que o estado avance, mas não passe do limite (etapa 2)
      return { ...state, currentStep: Math.min(state.currentStep + 1, 2) };
    
    case 'PREV_STEP':
      // Garante que o estado retroceda, mas não passe do limite (etapa 1)
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) };
    
    default:
      return state;
  }
};

// O Contexto React que irá fornecer o estado e a função dispatch para os componentes filhos
export const MultiStepFormContext = createContext<{
  state: FormState;
  dispatch: Dispatch<FormAction>;
} | undefined>(undefined);

// O Provedor do Contexto
export const MultiStepFormProvider = MultiStepFormContext.Provider;