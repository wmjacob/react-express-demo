import React from 'react';
import { useCallback, useState } from 'react';
import { StackRow, StackCol } from './Layout';
import { Button, Typography, TextField, Alert } from '@mui/material';
import { POSTCardValidate } from '../api/validate';

const cleanNumber = (cardNumber: string): string => cardNumber
  .replace(/[^0-9]/g, '') // remove non-numeric characters
  .slice(0, 16) // only allow 16 digits
  .replace(/(.{4})/g, '$1 ').trim(); // add a space every 4 digits

export const ValidateCard = () => {
  const [cardNumber, setCardNumber] = useState('');

  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCloseAlert = useCallback(() => {
    setIsValid(null);
    setError('');
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const rawNumber = cardNumber.replace(/\s/g, ''); 
    if (rawNumber.length !== 16) {
      setError('Card number must be 16 digits.');
      setLoading(false);
      return;
    }

    try {
      const response = await POSTCardValidate({ cardNumber: rawNumber });
      setIsValid(response.valid);
    } catch (err) {
      console.error(err);
      setError('Failed to validate card.');
    } finally {
      setLoading(false);
    }
  }, [cardNumber]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = cleanNumber(e.target.value);
    if (newNumber !== cardNumber) {
      setIsValid(null);
      setError('');
    }
    setCardNumber(newNumber);
  }, [cardNumber]);

  const handleReset = useCallback(() => {
    setCardNumber('');
    setIsValid(null);
    setError('');
  }, []);
  
  return (
    <StackCol gap={2}>
      <Typography id="validate-card-title" variant="h5">Validate Card</Typography>
      <form onSubmit={handleSubmit} aria-labelledby="validate-card-form">
        <StackCol gap={2}>
          <TextField
            label="Credit Card Number"
            variant="outlined"
            value={cardNumber}
            onChange={handleChange}
            error={!!error}
            helperText={error || 'Enter a 16-digit credit card number'}
            aria-required
            aria-invalid={!!error}
            fullWidth
            disabled={loading}
          />
          {isValid !== null && (
            <Alert 
              severity={isValid ? 'success' : 'error'} 
              onClose={handleCloseAlert} 
              aria-live="polite"
            >
              {isValid ? 'Card is valid!' : 'Card is not valid.'}
            </Alert>
          )}
          <StackRow gap={1} justifyContent="end">
            <Button
              onClick={handleSubmit}
              variant="contained"
              color='primary'
              aria-label="Submit credit card number for validation"
            >
              Submit
            </Button>
            <Button
              onClick={handleReset}
              variant="outlined"
              color="secondary"
              aria-label="Reset form"
            >
              Reset
            </Button>
          </StackRow>
        </StackCol>
      </form>
    </StackCol>
  );
};