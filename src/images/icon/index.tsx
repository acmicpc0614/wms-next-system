import imgGear from './gear-svgrepo-com.svg';
import imglist from './list-svgrepo-com.svg';
import imgchart from './analysis-chart-data-svgrepo-com.svg';
import imgcalander from './calander-interface-icon-svgrepo-com.svg';
import imgclock from './clock-snooze-svgrepo-com.svg';

function EmptyIconStar() {
  return (
    <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em">
      <path d="M287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28 153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2c-6.46-6.3-8.75-15.8-5.91-24.5 2.83-8.6 10.3-14.9 19.29-16.2l153.21-22.7 68.6-141.28C270.4 5.249 278.7 0 287.9 0zm0 78.95L235.4 187.2c-3.5 7.1-10.3 12.1-18.1 13.3L98.98 217.9 184.9 303c5.5 5.5 8 13.4 6.7 21.1l-20.2 119.6 105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2-20.2-119.6c-1.3-7.7 1.3-15.6 6.8-21.1l85.9-85.1-118.3-17.4c-7.9-1.2-14.7-6.2-18.1-13.3L287.9 78.95z" />
    </svg>
  );
}

function FilledIconStar() {
  return (
    <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em">
      <path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z" />
    </svg>
  );
}

function IconArrowRotateLeft() {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
      <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2l17.6-17.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3-163.8-62.5-226.3 0L125.7 160z" />
    </svg>
  );
}

function IconThMenu() {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M19 17H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z" />
    </svg>
  );
}

export {
  imgGear,
  imgcalander,
  imgchart,
  imgclock,
  imglist,
  EmptyIconStar,
  FilledIconStar,
  IconArrowRotateLeft,
  IconThMenu,
};
