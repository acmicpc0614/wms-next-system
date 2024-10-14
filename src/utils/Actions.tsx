import { CONFIRMED, DONE, DRAFT, READY } from './Consts';

export const getBaseColor = ({ value }: { value: any }) => {
  switch (value) {
    case DRAFT:
      return 'bg-bodydark1 text-boxdark-2';
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
