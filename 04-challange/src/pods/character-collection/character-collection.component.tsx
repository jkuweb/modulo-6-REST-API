import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { CharacterViewModel } from './character-collection.vm';
import { SearchFilterComponent } from './components';
import { TablePaginationComponent } from '#common/components';
import { usePaginationContext } from '#common/providers';
import { Alert, Avatar, Link, TableCell, TableRow } from '@mui/material';
import 'animate.css';

interface Props {
  characters: CharacterViewModel[];
}

export const CharacterCollection: FC<Props> = props => {
  const { characters } = props;
  const { rowsPerPage, currentPage } = usePaginationContext();

  return (
    <>
      <SearchFilterComponent />
      <TablePaginationComponent
        dataCollection={characters}
        columnsId={['personaje', 'nombre', 'id']}
      >
        {characters.length > 0 ? (
          characters
            .slice(
              currentPage * rowsPerPage,
              currentPage * rowsPerPage + rowsPerPage
            )
            .map(character => {
              return (
                <TableRow
                  hover
                  role='checkbox'
                  tabIndex={-1}
                  key={character.id}
                >
                  <>
                    <TableCell
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Avatar
                        src={character.image}
                        alt='avatar image'
                        sx={{
                          width: 150,
                          height: 150,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                        className='animate__animated animate__fadeIn'
                      />
                    </TableCell>
                    <TableCell align='center'>
                      <Link
                        component={RouterLink}
                        to={linkRoutes.character(String(character.id))}
                      >
                        {character.name}
                      </Link>
                    </TableCell>
                    <TableCell key={character.id} align='center'>
                      {character.id}
                    </TableCell>
                  </>
                </TableRow>
              );
            })
        ) : (
          <Alert
            severity='warning'
            className='animate__animated animate__hinge animate__delay-2s'
            sx={{
              padding: '1rem',
              fontSize: '1.3rem',
              lineHeight: '1.3rem',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Ningún personaje, pruebe de nuevo...
          </Alert>
        )}
      </TablePaginationComponent>

    </>
  );
};
