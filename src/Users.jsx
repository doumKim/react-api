import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setUsers(null);
				setError(null);
				setLoading(true);
				const response = await axios.get(
					'https://jsonplaceholder.typicode/users/',
				);
				setUsers(response.data);
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};
		fetchUsers();
	}, []);

	if (loading) return <div>로딩 중...</div>;
	if (error) return <div>에러가 발생했습니다.</div>;
	if (!users) return null;

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.usernmae} {user.name}
				</li>
			))}
		</ul>
	);
};

export default Users;
