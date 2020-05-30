import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = (errMsg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMsg
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      console.log('collectionMap', collectionMap);
      dispatch(fetchCollectionSuccess(collectionMap));
    }).catch((err) => {
      dispatch(fetchCollectionFailure(err.message));
    });
  };
};

// export const fetchCollectionStartAsync = (collectionsMap) => ({
//   type: ShopActionTypes.FETCH_COLLECTIONS_START,
//   payload: collectionsMap
// });
