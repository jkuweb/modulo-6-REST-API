import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { EpisodeViewModel } from './episode-collection.vm';
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Props {
  episodes: EpisodeViewModel[]
}

export const EpisodeCollection: React.FC<Props> = ({ episodes }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#a2c8ed' }}>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode) => (
            <TableRow
              key={episode.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link
                  component={RouterLink}
                  to={linkRoutes.episode(String(episode.id))}
                >
                  {episode.name}
                </Link>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}
