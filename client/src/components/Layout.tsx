import React from 'react';
import { Box, BoxProps } from '@mui/material';

export const StackCol = (props: BoxProps) => <Box display="flex" flexDirection="column" {...props} />;
export const StackRow = (props: BoxProps) => <Box display="flex" flexDirection="row" {...props} />;