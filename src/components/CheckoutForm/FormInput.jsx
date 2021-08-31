import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid, Input,InputLabel } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel><br/>
      <Controller
        as={TextField}
        name={name}
        control={control}  
        fullWidth                   
        render={({ field }) => <Input {...field}  required />}
      />
    </Grid>
  );
}

export default FormInput;