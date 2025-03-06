import React from 'react';
import { CharacterViewModel } from '../character.vm';
import { Box, Button, TextField } from '@mui/material';

interface Props {
  character: CharacterViewModel;
  onSubmit: (sentence: string) => void;
}

export const EditCharacterSentence: React.FC<Props> = ({ character, onSubmit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [sentence, setSentence] = React.useState(character.bestSentence);
  return (
    <Box
      display={'flex'}
      alignContent={'center'}
      flexDirection={'column'}
    >
      {(isEditing) ? (
        <>
          <TextField
            id="outlined-basic"
            label="sentence"
            variant="outlined"
            multiline
            rows={6}
            maxRows={10}
            value={sentence}
            onChange={(e) => setSentence(e.target.value)} />
          <Button
            type='submit'
            variant='contained'
            sx={{ alignSelf: 'center', marginTop: 4 }}
            onClick={() => {
              onSubmit(sentence)
              setIsEditing(false)
            }}>Guardar</Button>
        </>
      )
        : (

          <Button
            type='submit'
            variant='contained'
            sx={{ alignSelf: 'center', marginTop: 8 }}
            onClick={() => setIsEditing(true)}>Editar Frase</Button>
        )}
    </Box>
  )
}



