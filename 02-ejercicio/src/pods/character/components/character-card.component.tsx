
import * as React from 'react';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { CharacterViewModel } from '../character.vm';
import { useCharacterContext } from '../providers';
import { AddCharacterSentence } from './add-character-sentence.component';
import { EditCharacterSentence } from './edit-character-sentence.component';
import { Box, Card, CardContent, CardHeader, CardMedia, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import * as classes from './character-card.styles';


export const CharacterCard: React.FunctionComponent = () => {

  const { character, setCharacter, insertCharacterSentence } = useCharacterContext();

  const handleSubmit = (sentence: string) => {
    const newCharacter: CharacterViewModel = {
      ...character,
      bestSentence: sentence
    }
    insertCharacterSentence(newCharacter);

    setCharacter(newCharacter);
  }

  return (
    <>
      <Box display={'grid'}>
        <Card style={{ width: '25rem', margin: '0 auto' }}>
          <CardHeader
            title={character.name}
          />
          <CardContent>
            <div className={classes.content}>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{ height: 0, paddingTop: '100%' }}
              />
              <Table
                aria-label='simple table'
                sx={{ border: '1px solid' + ' aliceblue' }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ textAlign: 'center' }}>
                      Género
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>Especie</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>Estatus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ textAlign: 'center' }}>
                      {character.gender}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {character.species}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {character.status}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table
                aria-label='simple table'
                sx={{ border: '1px solid' + ' aliceblue', marginTop: 6, marginBottom: 6 }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ textAlign: 'center' }}>
                      Best Sentence
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ textAlign: 'center' }}>
                      <Typography variant='h5' className={classes.sentence}>
                        {character.bestSentence}

                      </Typography>
                      {!character.bestSentence
                        ? <AddCharacterSentence onSubmit={handleSubmit} />
                        : <EditCharacterSentence character={character} onSubmit={handleSubmit} />
                      }
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Link
                component={RouterLink}
                to={generatePath(linkRoutes.characterCollection)}
                sx={{
                  position: 'absolute',
                  bottom: '10px',
                  left: 0,
                  transform: 'translateX(50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.3rem',
                  backgroundColor: '#111827',
                  padding: '1rem',
                  borderRadius: '4px',
                  border: '1px solid #111827',
                  color: 'aliceblue',
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'aliceblue',
                    color: '#111827',
                    border: '1px solid #111827',
                  },
                }}
              >
                Regresar
              </Link>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  )
};
