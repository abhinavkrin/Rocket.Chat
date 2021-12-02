import { Box } from '@rocket.chat/fuselage';
import React from 'react';

const CounterItem = ({ title = '', count = '-', ...props }) => (
	<Box
		display='flex'
		flexDirection='column'
		justifyContent='space-between'
		alignItems='center'
		flexGrow={1}
		{...props}
	>
		<Box fontScale='h4' textTransform='uppercase' color='hint' textAlign='center' pi='x8'>
			{title}
		</Box>
		<Box fontScale='h2'>{count}</Box>
	</Box>
);

export default CounterItem;
