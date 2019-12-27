import React from 'react';
import {connect} from 'react-redux';

import './collection.styles.scss'
import {selectCollection} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection}) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
);

const mapStateToProps = (state, otherProps) => ({
    collection: selectCollection(otherProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps) (CollectionPage);