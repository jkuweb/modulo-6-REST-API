import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { LocationViewModel } from './location-collection.vm';
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Props {
  locations: LocationViewModel[];
}

export const LocationCollection: React.FC<Props> = ({ locations }) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#a2c8ed' }}>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location) => (
            <TableRow
              key={location.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link
                  component={RouterLink}
                  to={linkRoutes.location(String(location.id))}
                >
                  {location.name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )


}
