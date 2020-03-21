import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDeirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  sections: selectDeirectorySections
});

export default connect(mapStateToProps)(Directory);
