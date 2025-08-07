import { z } from 'zod';

// 1. O Schema de Validação com Zod
export const employeeSchema = z.object({
  // Campos da Etapa 1
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
  email: z.string().email({ message: 'Formato de e-mail inválido.' }),
  statusOnCreate: z.boolean(),

  // Campos da Etapa 2
  department: z.string().nonempty({ message: 'A seleção de um departamento é obrigatória.' }),
});

// 2. O Tipo TypeScript inferido automaticamente do schema
// Agora, se mudarmos o schema, este tipo será atualizado!
export type EmployeeFormData = z.infer<typeof employeeSchema>;
// Tipo para os dados como eles são armazenados e lidos do Firestore
export interface Employee {
  id: string; // ID do documento do Firestore
  name: string;
  email: string;
  department: string;
  status: 'active' | 'inactive';
  createdAt: { // Formato do Timestamp do Firestore
    seconds: number;
    nanoseconds: number;
  };
}