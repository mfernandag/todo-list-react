import React from 'react'
<<<<<<< HEAD
//import { List, ListItem, ListItemText } 

=======
import { List, ListItem, ListItemText } from '@material-ui/core'

const TasksList = ({ data }) => {
	return (
		<List>
			{data.reverse().map((e, i) => (
				<ListItem button key={i}>
					<ListItemText>{e}</ListItemText>
				</ListItem>
			))}
		</List>
	)
}

export default TasksList
>>>>>>> f52dd48d040c44c55c79fe1dbdad727a4262144a
