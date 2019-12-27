import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import PreviewCollection from "../preview-collection/PreviewCollection.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...collectionProps}) => (
                <PreviewCollection key={id} {...collectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps) (CollectionsOverview);