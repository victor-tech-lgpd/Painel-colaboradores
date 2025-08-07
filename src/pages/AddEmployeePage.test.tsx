import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import AddEmployeePage from './AddEmployeePage';
import { BrowserRouter } from 'react-router-dom';

// Envolvemos o componente com BrowserRouter porque ele usa hooks de navegação internamente
const renderComponent = () => render(
    <BrowserRouter>
        <AddEmployeePage />
    </BrowserRouter>
);

describe('AddEmployeePage', () => {
    it('deve navegar para a segunda etapa após preencher os dados corretamente', async () => {
        renderComponent();

        // 1. Encontra os campos e o botão
        const nameInput = screen.getByLabelText(/Título/i);
        const emailInput = screen.getByLabelText(/E-mail/i);
        const nextButton = screen.getByRole('button', { name: /Próximo/i });

        // 2. Simula a interação do usuário
        await userEvent.type(nameInput, 'Funcionário Teste');
        await userEvent.type(emailInput, 'teste@empresa.com');
        await userEvent.click(nextButton);

        // 3. Verifica o resultado
        // Usamos waitFor para aguardar a atualização do estado e a nova renderização
        await waitFor(() => {
            expect(screen.getByText(/Informações Profissionais/i)).toBeInTheDocument();
        });
    });

    it('deve mostrar uma mensagem de erro se o nome estiver em branco', async () => {
        renderComponent();
        
        // 1. Encontra o botão
        const nextButton = screen.getByRole('button', { name: /Próximo/i });

        // 2. Simula o clique sem preencher os campos
        await userEvent.click(nextButton);

        // 3. Verifica se a mensagem de erro do Zod apareceu
        await waitFor(() => {
            expect(screen.getByText(/O nome deve ter pelo menos 3 caracteres./i)).toBeInTheDocument();
        });
    });
});