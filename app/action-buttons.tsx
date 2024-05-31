import React from 'react';
import {
  MdArrowForwardIos,
  MdArrowBackIosNew,
  MdHourglassTop,
} from 'react-icons/md';
import { Pagination } from './classes';

interface ActionButtonsProps {
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  loading: boolean;
}

const ActionButtons = ({
  pagination,
  setPagination,
  loading,
}: ActionButtonsProps) => {
  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={() =>
          setPagination((prev) => {
            return { ...prev, page: prev.page - 1 };
          })
        }
        disabled={pagination.page === 1 || loading}
        className="flex flex-row items-center gap-2 rounded-sm bg-slate-100 px-4 py-2 text-slate-900 disabled:opacity-50"
      >
        {loading ? (
          <MdHourglassTop className="text-sm" />
        ) : (
          <MdArrowBackIosNew className="text-sm" />
        )}
        Previous
      </button>
      <button
        onClick={() =>
          setPagination((prev) => {
            return { ...prev, page: prev.page + 1 };
          })
        }
        disabled={loading}
        className="flex flex-row items-center gap-2 rounded-sm bg-slate-100 px-4 py-2 text-slate-900 disabled:opacity-50"
      >
        Next
        {loading ? (
          <MdHourglassTop className="text-sm" />
        ) : (
          <MdArrowForwardIos className="text-sm" />
        )}
      </button>
    </div>
  );
};

export default ActionButtons;
