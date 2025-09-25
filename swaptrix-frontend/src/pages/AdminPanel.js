import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function AdminPanel() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>{t('welcome')} - Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>{t('email')}</th>
            <th>Role</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AdminPanel;