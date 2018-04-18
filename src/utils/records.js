import { Record } from 'immutable';

export const Trail = Record({
  id: null,
  name: null,
  feature: null,
});

export const Hydrant = Record({
  id: null,
  name: null,
  elevation: null,
  trail: null,
  coords: [],
  feature: null,
});
