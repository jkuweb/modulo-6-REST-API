import React from 'react';
import { Box, Button, TextField } from '@mui/material';

interface Props {
  onSubmit: (sentence: string) => void;
}

export const AddCharacterSentence: React.FC<Props> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Box
      display={'flex'}
      alignContent={'center'}
      flexDirection={'column'}
    >
      <TextField
        id="outlined-basic"
        label="sentence"
        variant="outlined"
        multiline
        rows={6}
        maxRows={10}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <Button
        type='submit'
        variant='contained'
        sx={{ alignSelf: 'center', marginTop: 4 }}
        onClick={() => {
          setInputValue('');
          onSubmit(inputValue)
        }}>Agregar</Button>
    </Box>
  )
}
