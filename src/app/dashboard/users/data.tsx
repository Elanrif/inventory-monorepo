import { ButtonVariant } from '@/components/dashboard/header-section';
import { Checkbox } from '@/components/ui/checkbox';
import { ROUTES } from '@/utils/route';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  FileText,
  ListFilter,
  MoreHorizontal,
  Plus,
  Upload,
} from 'lucide-react';

const { DASHBOARD_ADD_USERS } = ROUTES;
export const data = {
  headerData: {
    title: 'Users',
    headerButtons: [
      { icon: Upload, label: 'Import' },
      { icon: FileText, label: 'Export' },
      {
        icon: Plus,
        label: 'Add User',
        href: DASHBOARD_ADD_USERS,
        className: 'bg-purple-600 text-white hover:bg-purple-700',
        variant: 'default' as ButtonVariant,
      },
    ],
  },
  subHeaderData: {
    subHeader: {
      totalTitle: 'total users:',
      totalValue: '10,356788',
      title: 'users:',
      value: '6828',
    },
    colors: [
      { className: 'bg-green-600 w-[150px]' },
      { className: 'bg-yellow-400 w-[70px]' },
      { className: 'bg-red-600 w-[120px]' },
    ],
    data: [
      {
        className: 'bg-green-600 py-1.5 w-[5px]',
        text: 'in stock: ',
        number: '1452',
      },
      {
        className: 'bg-yellow-600 py-1.5 w-[5px]',
        text: 'low stock: ',
        number: '355',
      },
      {
        className: 'bg-red-600 py-1.5 w-[5px] ',
        text: 'out of stock:',
        number: '186',
      },
    ],
  },
  payload: {
    headerBtn: [
      {
        leftIcon: Calendar,
        title: '12 sep-28 oct 2024',
        rightIcon: ChevronDown,
      },
      { title: 'amount status', rightIcon: ChevronDown },
      { title: 'status', rightIcon: ChevronDown },
      { leftIcon: ListFilter, title: ' filter' },
    ],
    table: {
      columns: [
        { label: <Checkbox className='rounded-xs border-2 border-gray-400' /> },
        { label: 'Name' },
        { label: 'Email' },
        { label: 'Phone' },
        { label: 'Address' },
        { label: 'Created' },
        { label: 'Action' },
      ],
      footer: {
        buttonResults: {
          totalResults: 'Result 1-10 of 45',
          label: '10',
          icon: ChevronDown,
          size: 'sm',
        },
        buttonPagination: [
          {
            label: 'Previous',
            icon: ArrowLeft,
            className: 'flex items-center',
          },
          { label: '1', className: 'border border-purple-700' },
          { label: '2' },
          { label: '3' },
          { icon: MoreHorizontal },
          { label: '12' },
          { label: 'Next', icon: ArrowRight },
        ],
      },
    },
  },
};
