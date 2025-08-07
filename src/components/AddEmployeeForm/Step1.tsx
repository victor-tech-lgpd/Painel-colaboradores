import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, FormControlLabel, Switch, Stack } from '@mui/material';

const Step1: React.FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Stack spacing={3}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Título"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message as string}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="E-mail"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
        )}
      />
      <Controller
        name="statusOnCreate"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            label="Ativar ao criar"
          />
        )}
      />
    </Stack>
  );
};

export default Step1;