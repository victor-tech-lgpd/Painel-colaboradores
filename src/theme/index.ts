import { createTheme } from '@mui/material/styles';

// Permite adicionar novas cores à paleta do tema com segurança de tipos
declare module '@mui/material/styles' {
  interface Palette {
    status: {
      active: string;
      inactive: string;
    };
  }
  interface PaletteOptions {
    status?: {
      active?: string;
      inactive?: string;
    };
  }
}

export const theme = createTheme({
  // 1. Paleta de Cores
  palette: {
    primary: {
      main: '#22C55E', // Verde principal
    },
    error: {
      main: '#EF4444', // Vermelho para erros e status inativo
    },
    background: {
      default: '#F8FAFC', // Fundo cinza claro da aplicação
    },
    text: {
      primary: '#1E293B', // Cor de texto principal
      secondary: '#64748B', // Cor de texto secundária (placeholders, etc.)
    },
    // Cor customizada para os status "Ativo" e "Inativo"
    status: {
      active: '#22C55E',
      inactive: '#EF4444',
    },
  },

  // 2. Tipografia
  typography: {
    fontFamily: 'Inter, sans-serif',
    h5: {
      fontWeight: 600, // Deixa os títulos um pouco mais fortes
    },
  },

  // 3. Estilos Globais para Componentes
  components: {
    // Estilo padrão para todos os botões
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true, // Remove a sombra padrão
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', // Impede que o texto fique em maiúsculas
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
    // Estilo padrão para todos os campos de texto com borda
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          // Cor da borda quando o campo está focado
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#22C55E',
          },
        },
      },
    },
    // Estilo padrão para a barra de progresso
    MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 8,
            borderRadius: 4,
          },
          bar: {
            borderRadius: 4,
          },
        },
      },
  },
});