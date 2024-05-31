'use client';

import { useEffect, useState } from 'react';
import { Pagination, UserData, UsersReponse } from './classes';
import { BiLoader } from 'react-icons/bi';
import UserCard from './user-card';
import ActionButtons from './action-buttons';

export default function Home() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    usersPerPage: 10,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://give-me-users-forever.vercel.app/api/users/${pagination.page}/next`,
    )
      .then((res) => res.json())
      .then((data: UsersReponse) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, [pagination]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-slate-950 p-8">
      <h1 className="text-center text-4xl font-semibold text-slate-100">
        Users
      </h1>
      {loading ? (
        <div className="flex h-full flex-1 items-center justify-center">
          <BiLoader className="animate-spin text-6xl text-slate-100" />
        </div>
      ) : (
        <div className="grid flex-1 grid-cols-4 gap-2">
          {users.map((user) => (
            <UserCard key={user.ID} user={user} />
          ))}
        </div>
      )}
      <ActionButtons
        pagination={pagination}
        setPagination={setPagination}
        loading={loading}
      />
    </main>
  );
}
