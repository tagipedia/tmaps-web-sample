
$(document).ready(function(){
  //initialize the map with the ID of the Div you want to use
  const map = new TMap({
    selector: '#tmap'
  });

  map.dispatch({
    type: 'LOAD_MAP',
    map_id: CONTACT_US_FOR_MAP_ID, // contact Tagipedia for map id
  });

  //Start listening to events sent from the map.
  map.addListener((action)=> {
    console.log(action);
    switch (action.type) {
      case 'FEATURES_TAPPED':
        map.dispatch({type: 'HIGHLIGHT_FEATURE', feature_id: action.features[0].id});
        break;
      default:
    }
  });
});
