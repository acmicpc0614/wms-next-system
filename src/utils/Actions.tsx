import { CONFIRMED, DONE, DRAFT, READY } from './Consts';

export const getBaseColor = ({ value }: { value: any }) => {
  switch (value) {
    case DRAFT:
      return 'bg-bodydark1 text-boxdark-2 dark:bg-boxdark-2 dark:text-white';
    case READY:
      return 'bg-primary text-white';
    case DONE:
      return 'bg-success text-white';
    case CONFIRMED:
      return 'bg-primary text-white';
    default:
      return 'bg-primary text-white';
  }
};

export const getInputClassNameForTable = (index: number) => {
  const baseClasses =
    'focus:border-b-[1px] focus:border-b-bodydark2 focus:outline-none text-sm';
  const evenClasses = 'dark:bg-boxdark';
  const oddClasses = 'dark:bg-meta-4 bg-gray-2';

  return `${baseClasses} ${index % 2 === 0 ? evenClasses : oddClasses}`;
};
