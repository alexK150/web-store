import React from 'react';

import PreviewCollection from "../../components/preview-collection/PreviewCollection.component";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";

const ShopPage = ({collections}) => {

    return (
        <div className='shop-page'>
           <CollectionsOverview/>
        </div>
    );
};

export default ShopPage;