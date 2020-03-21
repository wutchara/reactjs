import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDeirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);