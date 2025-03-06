import React from 'react';
import { linkRoutes } from '#core/router';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import { LocationViewModel } from './location.vm';
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface Props {
  location: LocationViewModel
}

export const LocationComponent: React.FC<Props> = ({ location }) => {
  return (
    <><TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#a2c8ed' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Dimension</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={location.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {location.name}
            </TableCell>
            <TableCell align="right">{location.type}</TableCell>
            <TableCell align="right">{location.dimension}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer><Link
      component={RouterLink}
      to={generatePath(linkRoutes.locationCollection)}
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
      </Link></>
  )
}
