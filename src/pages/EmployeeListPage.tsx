import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Chip,
  Avatar,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { getEmployees } from '@/services/employee.service';
import { Employee } from '@/types/employee';
import { onAuthStateChanged } from 'firebase/auth'; // 1. Importe onAuthStateChanged
import { auth } from '@/services/firebase'; // Importe a instância de auth

const EmployeeListPage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 2. Criamos um "ouvinte" para o estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 3. Somente se houver um usuário, buscamos os dados
        console.log("Usuário autenticado, buscando colaboradores...");
        const fetchEmployees = async () => {
          try {
            const data = await getEmployees();
            setEmployees(data);
          } catch (err) {
            setError('Falha ao carregar os dados dos colaboradores.');
            console.error(err); // Imprime o erro real no console para depuração
          } finally {
            setIsLoading(false);
          }
        };

        fetchEmployees();
      } else {
        // O usuário não está logado
        console.log("Nenhum usuário autenticado.");
        setIsLoading(false);
        // Opcional: redirecionar para uma página de login no futuro
      }
    });

    // 4. Função de limpeza: remove o "ouvinte" quando o componente é desmontado
    return () => unsubscribe();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

  // O resto do componente (if isLoading, if error, return ...) permanece o mesmo.
  // ...
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box>
      {/* Cabeçalho da página */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Colaboradores
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/colaboradores/novo')}
        >
          Novo Colaborador
        </Button>
      </Box>

      {/* Tabela de Colaboradores */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Departamento</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>{employee.name.charAt(0)}</Avatar>
                    <Typography variant="body2">{employee.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>
                  <Chip
                    label={employee.status === 'active' ? 'Ativo' : 'Inativo'}
                    color={employee.status === 'active' ? 'primary' : 'error'}
                    size="small"
                    sx={{
                        color: 'white', 
                        fontWeight: 'bold',
                        backgroundColor: employee.status === 'active' ? 'status.active' : 'status.inactive',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeListPage;