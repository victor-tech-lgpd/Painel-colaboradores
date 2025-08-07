import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import EmployeeListPage from './pages/EmployeeListPage';
import AddEmployeePage from './pages/AddEmployeePage';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    // 1. O ErrorBoundary vem primeiro, envolvendo toda a aplicação.
    <ErrorBoundary>
      {/* 2. O BrowserRouter vem em seguida, para gerenciar as rotas. */}
      <BrowserRouter>
        {/* 3. O Routes define o conjunto de todas as rotas possíveis. */}
        <Routes>
          {/* A rota principal usa o AppLayout como elemento */}
          <Route path="/" element={<AppLayout />}>
            {/* Rotas aninhadas que serão renderizadas dentro do Outlet do AppLayout */}

            {/* Quando a URL for exatamente '/', redireciona para '/colaboradores' */}
            <Route index element={<Navigate to="/colaboradores" replace />} />

            <Route path="colaboradores" element={<EmployeeListPage />} />
            <Route path="colaboradores/novo" element={<AddEmployeePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;