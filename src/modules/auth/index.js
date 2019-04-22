import reducer, { STORE_NAME } from './redux';

const moduleStore = [STORE_NAME, reducer];

export {
  moduleStore,
};


/*

{
type: 'auth/FETCH_AUTH_SUCCESS',
payload: { accessToken: 'fn4i39fhu83qbfn438qbfe', refreshToken: 'cnmcdiueabcn4839bqciuwcnuewiqb3uy28bcew', user: { id: 1, email: 'davor@hamonlabs.com', name: 'Davor Grubelic' } }
}

*/