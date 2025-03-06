
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { CharacterViewModel } from '../character.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterViewModel
}

export const CharacterCard: React.FunctionComponent<Props> = ({ character }) => {

  return (
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
          <Link
            component={RouterLink}
            to={generatePath(linkRoutes.characterCollection)}
            sx={{
              position: 'absolute',
              bottom: '30px',
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
  );
};
