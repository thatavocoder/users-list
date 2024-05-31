import React from 'react';
import { UserData } from './classes';
import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';

interface UsersCardProps {
  user: UserData;
}

const UserCard = ({ user }: UsersCardProps) => {
  return (
    <div key={user.ID} className="rounded bg-slate-100 p-4 shadow-md">
      <div className="flex flex-row items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
          <div className="text-xs text-slate-100">
            {user.FirstNameLastName.split(' ')[0][0]}
            {user.FirstNameLastName.split(' ')[1][0]}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{user.FirstNameLastName}</p>
          <p className="text-xs text-slate-700">
            {user.JobTitle} at {user.Company}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <Link
          href={`mailto:${user.Email}`}
          className="flex flex-row items-center gap-2"
        >
          <MdEmail className="text-sm text-slate-700" />
          <p className="text-xs text-slate-800">{user.Email}</p>
        </Link>
        <Link
          href={`mailto:${user.EmailAddress}`}
          className="flex flex-row items-center gap-2"
        >
          <MdEmail className="text-sm text-slate-700" />
          <p className="text-xs text-slate-800">{user.EmailAddress}</p>
        </Link>
        <div className="flex flex-row items-center gap-2">
          <MdPhone className="text-sm text-slate-700" />
          <Link href={`tel:${user.Phone}`}>
            <p className="text-xs text-slate-800">{user.Phone}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
