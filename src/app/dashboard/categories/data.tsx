import { ButtonVariant } from '@/components/dashboard/header-section';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Upload,
  Plus,
  FileText,
  Calendar,
  ChevronDown,
  ListFilter,
  ArrowRight,
  MoreHorizontal,
  ArrowLeft,
} from 'lucide-react';
import { ROUTES } from '@/utils/route';

const { DASHBOARD_ADD_CATEGORIES } = ROUTES;
export const data = {
  headerData: {
    title: 'Categories',
    headerButtons: [
      {
        icon: Upload,
        label: 'Importer',
      },
      {
        icon: FileText,
        label: 'Exporter',
      },
      {
        icon: Plus,
        label: 'Ajouter une catégorie',
        href: DASHBOARD_ADD_CATEGORIES,
        className: 'bg-purple-600 text-white hover:bg-purple-700',
        variant: 'default' as ButtonVariant,
      },
    ],
  },
  subHeaderData: {
    subHeader: {
      totalTitle: 'Catégories total:',
      totalValue: '10,356788',
      title: 'Catégories:',
      value: '2379',
    },
    colors: [
      {
        className: 'bg-green-600 w-[150px]',
      },
      {
        className: 'bg-yellow-400 w-[70px]',
      },
      {
        className: 'bg-red-600 w-[120px]',
      },
    ],
    data: [
      {
        className: 'bg-green-600 py-1.5 w-[5px]',
        text: 'en stock: ',
        number: '1452',
      },
      {
        className: 'bg-yellow-600 py-1.5 w-[5px]',
        text: 'stock faible: ',
        number: '355',
      },
      {
        className: 'bg-red-600 py-1.5 w-[5px] ',
        text: 'rupture de stock:',
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
      {
        title: 'statut des montants',
        rightIcon: ChevronDown,
      },
      {
        title: 'statut des catégories',
        rightIcon: ChevronDown,
      },
      {
        leftIcon: ListFilter,
        title: ' filtrage',
      },
    ],
    table: {
      columns: [
        {
          label: <Checkbox className='rounded-xs border-2 border-gray-400' />,
        },
        { label: 'Nom' },
        { label: 'Description' },
        {
          label: 'Statut',
          icon: ChevronDown,
        },
        { label: 'Mise en avant' },
        { label: 'Créé le' },
        { label: 'Actions' },
      ],
      footer: {
        buttonResults: {
          totalResults: 'résultat 1-10 de 45',
          label: '10',
          icon: ChevronDown,
          size: 'sm',
        },
        buttonPagination: [
          {
            label: 'Précédent',
            icon: ArrowLeft,
            className: 'flex items-center',
          },
          {
            label: '1',
            className: 'border border-purple-700',
          },
          {
            label: '2',
          },
          {
            label: '3',
          },
          {
            icon: MoreHorizontal,
          },
          {
            label: '12',
          },
          {
            label: 'Suivant',
            icon: ArrowRight,
          },
        ],
      },
    },
  },
};
