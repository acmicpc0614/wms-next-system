import { AVAILABLE, CONFIRMED, DONE, DRAFT, READY } from '../utils/Consts';

export const ReceiptsData = [
  {
    id: '3ase893lkjsd',
    Reference: 'WH/IN/00001',
    Contact: 'Aladin',
    ScheduledData: '10/02/2024 11:02:19',
    SourceDoc: 'P00002',
    Status: DRAFT,
  },
  {
    id: '3aSdfezcjsd',
    Reference: 'WH/IN/00002',
    Contact: 'Madhavi',
    ScheduledData: '10/08/2024 14:53:39',
    SourceDoc: 'P00001',
    Status: DONE,
  },
];

export const DeliveriesData = [
  {
    id: '3489alkhs58',
    Reference: 'WH/OUT/00002',
    Contact: '',
    ScheduledData: '10/02/2024 11:02:19',
    SourceDoc: 'Clothes Shop/0001',
    Status: READY,
  },
  {
    id: 'a3w3gegawe',
    Reference: 'WH/POS/00001',
    Contact: '',
    ScheduledData: '10/02/2024 11:02:19',
    SourceDoc: 'Clothes Shop/0001',
    Status: DONE,
  },
  {
    id: 'rqc2aesrc3rw',
    Reference: 'WH/OUT/00001',
    Contact: 'Madhavi',
    ScheduledData: '10/02/2024 11:02:19',
    SourceDoc: 'S00001',
    Status: DONE,
  },
  {
    id: 'gpasw4vd4as3',
    Reference: 'WH/POS/00002',
    Contact: '',
    ScheduledData: 'Today',
    SourceDoc: 'Return of WH/POS/00001',
    Status: READY,
  },
];

export const ManufactoringsData = [
  {
    id: '3ase893lkjsd',
    Reference: 'WH/IN/00001',
    Start: 'Today',
    Product: 'Black embroidered t-shirt',
    NextAct: '',
    Source: 'Manual Replenishment',
    ComponentStatus: '',
    Quantity: 20,
    State: DONE,
  },
  {
    id: '3ase8asef32jsd',
    Reference: 'WH/IN/00002',
    Start: 'Today',
    Product: 'Casual t-shirt',
    NextAct: '',
    Source: '',
    ComponentStatus: AVAILABLE,
    Quantity: 100,
    State: CONFIRMED,
  },
];

export const InventoryData = [
  {
    id: '239jhaslkfyal0',
    Product: 'cozy sweater',
    OnHandQueen: 120.0,
    CountedQuantity: 0,
    Difference: -120,
    ScheduledData: '10/09/2024',
    User: '',
  },
];
