import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Stack } from '@mui/material';

// Dados de exemplo para os departamentos
const departments = ['Design', 'TI', 'Marketing', 'Produto'];

const Step2: React.FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Stack spacing={3}>
        <Controller
            name="department"
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                select
                label="Selecione um departamento"
                fullWidth
                error={!!errors.department}
                helperText={errors.department?.message as string}
            >
                {departments.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
                ))}
            </TextField>
            )}
        />
    </Stack>
  );
};

export default Step2;