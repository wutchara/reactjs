import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionFetching } from '../../redux/shop/shop.seclectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (<div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
    </div>);
  };
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);