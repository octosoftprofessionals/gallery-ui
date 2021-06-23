import React from 'react';
import {useQuery} from 'react-query';
import {getAsset, getAssets, getEvents, getCollections} from '../../services/opensea/core';

const ApiWrapper = () => {
    const {assetData, assetStatus} = useQuery('asset', getAsset);
    const {assetsData, assetsStatus} = useQuery('assets', getAssets);
    const {eventsData, eventsStatus} = useQuery('events', getEvents);
    const {collectionsData, collectionsStatus} = useQuery('collections', getCollections);
    const responseError = "Problem with the request. Try latter";
    
    return ( 
        <>
            {assetData.id ? assetData : responseError}
            {assetsData.length ? assetsData : responseError}
            {eventsData.length ? eventsData : responseError}
            {collectionsData.length ? eventsData : responseError}

        </>
     );
}
 


export default ApiWrapper;