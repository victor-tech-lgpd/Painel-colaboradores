import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { EmployeeFormData } from '@/types/employee';
import { getDocs, query, orderBy } from 'firebase/firestore';
import { Employee } from '@/types/employee';
// Cria uma referência para a coleção 'colaboradores' no Firestore
const employeesCollectionRef = collection(db, 'colaboradores');

// Transforma os dados do formulário para o formato que queremos salvar
type EmployeeToCreate = Omit<EmployeeFormData, 'statusOnCreate'> & {
    status: 'active' | 'inactive';
};

// Função para adicionar um novo colaborador
export const addEmployee = async (data: EmployeeToCreate) => {
  try {
    // Adiciona o novo documento à coleção, incluindo um carimbo de data/hora do servidor
    const docRef = await addDoc(employeesCollectionRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
    return docRef.id; // Retorna o ID do novo documento criado
  } catch (error) {
    console.error("Erro ao adicionar colaborador: ", error);
    // Lança o erro para que ele possa ser tratado na interface do usuário
    throw new Error("Não foi possível adicionar o colaborador.");
  }
};
// ... (mantenha os imports e a função addEmployee existentes)


// ... (função addEmployee existente)

// Função para buscar todos os colaboradores
export const getEmployees = async (): Promise<Employee[]> => {
    try {
      // Cria uma query para buscar os documentos, ordenados pela data de criação
      const q = query(employeesCollectionRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const employees = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as Employee));
      
      return employees;
    } catch (error) {
      console.error("Erro ao buscar colaboradores: ", error);
      throw new Error("Não foi possível buscar os colaboradores.");
    }
  };