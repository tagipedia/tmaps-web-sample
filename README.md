# tmaps-web-sample

## Installation
### To integrate TMaps into your Web project, add it to your project:
1. Add <script src="CONTACT_US_FOR_SCRIPT"></script> to your project (Request script and map id from Tagipedia Team)
2. Read our sample for examples

## How it works
it works using dispatch actions between your APP and TMaps. So your APP dispatch actions to TMaps and TMaps dispatch actions to your APP.

## Usage
### TMaps actions dispatched to Your APP

#### <a name="READY">Ready</a>

dispatched when TMaps ready to receive dispatches from Your APP. in order to make easy integration with **Web only** we will not execute your dispatches until map get ready so feel free to dispatch any action before map get ready.

```js
{
   "type": "READY"
};
```

___

#### <a name="MAP_LOADED">Map loaded</a>

dispatched when map loaded and visible to user.

```js
{
   "type": "MAP_LOADED"
};
```
___

#### Features tapped

dispatched when features in map tapped.

```js
{
   "type": "FEATURES_TAPPED",
   "features": features
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**features** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Array* with *Object*, each *Object* with *id*, *properties* keys

___

#### Associated feature tapped

dispatched when features in map tapped with the top feature visible to user.

```js
{
   "type": "ASSOCIATED_FEATURE_TAPPED",
   "feature_id": feature_id,
   "feature": feature
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**feature_id** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String* with valid feature id

&nbsp;&nbsp;&nbsp;&nbsp;**feature** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Object* with *id*, *properties* keys

___

#### Category marked

dispatched when select category in map

```js
{
   "type": "CATEGORY_MARKED",
   "category": category
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**category** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** valid *String* category

___

#### Error

dispatched when error happened in TMaps

```js
{
   "type": "ERROR",
   "error": error
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**error** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Object* with *stack* key and *String* value

___

#### Feature marked

dispatched after MARK_FEATURE ended

```js
{
   "type": "FEATURE_MARKED",
   "feature_id": feature_id
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**feature_id** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String* with valid feature id

___

#### <a name="FEATURE_HIGHLIGHTED">Feature highlighted</a>

dispatched after HIGHLIGHT_FEATURE ended

```js
{
   "type": "FEATURE_HIGHLIGHTED",
   "feature_id": feature_id
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**feature_id** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String* with valid feature id

___

#### <a name="ZOOM_ENDED">Zoom ended</a>

dispatched after SET_ZOOM ended

```js
{
   "type": "ZOOM_ENDED"
};
```
___

#### <a name="CENTER_ENDED">Center ended</a>

dispatched after SET_CENTER ended

```js
{
   "type": "CENTER_ENDED"
};
```

### <a name="your_app_to_tmaps">Your APP actions dispatched to TMaps</a>

#### <a name="set_tenant_data">Set tenant data</a>

dispatch it to set tenants of map. 

```js
{
   "type": "SET_TENANT_DATA",
   "payload": tenants_json
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**payload** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Array* with *Object*, each *Object* with *id*, *feature_id*, *name*, *booth_id*, *icon*, *CUSTOM_KEYS_YOU_NEED* keys

___

#### <a name="SET_DEFAULT_FEATURE_POPUP_TEMPLATE">Set default feature popup template</a>

dispatch it to change default feature popup template.

```js
{
   "type": "SET_DEFAULT_FEATURE_POPUP_TEMPLATE",
   "template": template,
   "template_custom_data": templateCustomData,
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**template** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** valid *String* <a href="https://angular.io/guide/template-syntax">angular template</a> with <a href="#popup_scope">PopupScope</a> <br/>

&nbsp;&nbsp;&nbsp;&nbsp;<a name="template_custom_data">**template_custom_data**</a> <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** *Object* with *CUSTOM_KEYS_YOU_NEED* keys and *String*, *Number*, *Array*, *Object* values <br/>
template custom data of keys that you want to use from <a href="#popup_scope_custom_data">customData</a> in <a href="#popup_scope">PopupScope</a>

___

#### Set theme

dispatch it to change theme of map.

```js
{
   "primary": primary_color,
   "accent": accent_color
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**primary** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** valid *String* color

&nbsp;&nbsp;&nbsp;&nbsp;**accent** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** valid *String* color

___

#### Load map

dispatch it to load map.

```js
{
   "type": "LOAD_MAP",
   "map_id": map_id,
   "theme": {
      "primary": primary_color,
      "accent": accent_color
   },
   "center": [lng, lat],
   "zoom": zoom
};
```

&nbsp;&nbsp;&nbsp;&nbsp;**map_id** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String*

&nbsp;&nbsp;&nbsp;&nbsp;**theme** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** *Object* with *primary*, *accent* keys and valid *String* color values
theme used for colors such as buttons and loading

&nbsp;&nbsp;&nbsp;&nbsp;**center** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** *Array* of *Numbers*
Default map center in longitude and latitude

&nbsp;&nbsp;&nbsp;&nbsp;**zoom** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** *Number*
Default zoom level

___

#### Change render mode

dispatch it to change render mode.

```js
{
   "type": "CHANGE_RENDER_MODE",
   "modeToRender": modeToRender
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**modeToRender**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String* with *2D*, *3D*

___


#### Set zoom

dispatch it to change zoom of map.

```js
{
   "type": "SET_ZOOM",
   "zoom": zoom,
   "zoom_type": zoom_type,
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**zoom**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Number*

&nbsp;&nbsp;&nbsp;&nbsp;**zoom_type**
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** *String* with *FLY_TO*

___

#### Set center

dispatch it to change center of map.

```js
{
   "type": "SET_CENTER",
   "center": [lng, lat],
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**center**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Array* of *Numbers*
Default map center in longitude and latitude

___

#### <a name="HIGHLIGHT_FEATURE">Highlight feature</a>

dispatch it to highlight feature.

```js
{
   "type": "HIGHLIGHT_FEATURE",
   "feature_id": feature_id
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**feature_id**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String* with valid feature id

___

#### Mark feature

dispatch it to mark feature.

```js
{
   "type": "MARK_FEATURE",
   "feature_id": feature_id
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**feature_id**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *String* with valid feature id


## Types

### <a name="popup_scope">PopupScope</a>
#### poi

current feature

```js
poi
```

&nbsp;&nbsp;&nbsp;&nbsp;**poi**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *<a href="#poi">poi</a>*

___
#### enableRouting

*Boolean* to check if routing is enabled

```js
enableRouting
```
___
#### showRoutingDialog

method to show routing dialog.

```js
showRoutingDialog($event, data)
```

&nbsp;&nbsp;&nbsp;&nbsp;**$event**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *<a href="https://angular.io/guide/template-syntax#event-binding---event-">$event</a>*

&nbsp;&nbsp;&nbsp;&nbsp;**data**
&nbsp;&nbsp;&nbsp;&nbsp;**Optional** *Object* with *from*, *to* keys and *<a href="#poi">poi</a>* value

___
#### applyIfneeded

method to call <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply">Angular $apply</a>

```js
applyIfneeded(callback)
```

&nbsp;&nbsp;&nbsp;&nbsp;**callback**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Function*

___
#### <a name="popup_scope_custom_data">customData</a>

custom data object that have all keys of <a href="#template_custom_data">template_custom_data</a>

```js
customData[key]
```

&nbsp;&nbsp;&nbsp;&nbsp;**key**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** with valid key from <a href="#template_custom_data">template_custom_data</a>
___
#### dispatch

method to dispatch action from your APP to TMaps.

```js
dispatch(action)
```

&nbsp;&nbsp;&nbsp;&nbsp;**action**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Object* with valid <a href="#your_app_to_tmaps">action</a>
___
#### <a name="dispatchToContainer">dispatchToContainer</a>

method to dispatch action from TMaps to your APP.

```js
dispatchToContainer(action)
```

&nbsp;&nbsp;&nbsp;&nbsp;**action**
&nbsp;&nbsp;&nbsp;&nbsp;**Required** *Object* with *type*, *CUSTOM_KEYS_YOU_NEED* keys.<br />
*type* is *NSString* value.<br />
*CUSTOM_KEYS_YOU_NEED* is any of *NSString*, *NSNumber*, *NSArray*, *NSDictionary* values.<br />
___
#### closeInfo

method to close feature popup

```js
closeInfo()
```

### <a name="poi">poi</a>

#### id
id of feature

```js
poi.id
```
___
#### category
category of feature

```js
poi.category
```
___
#### tags

tags of feature

```js
poi.tags
```
___
#### getTenant

tenant of feature you set in <a href="#set_tenant_data">SET_TENANT_DATA</a>

```js
poi.getTenant()
```
___
#### <a name="getTenantName">getTenantName</a>

tenant name of feature you set in <a href="#set_tenant_data">SET_TENANT_DATA</a>

```js
poi.getTenantName()
```
___
#### <a name="getTenantIcon">getTenantIcon</a>

tenant icon of feature you set in <a href="#set_tenant_data">SET_TENANT_DATA</a>

```js
poi.getTenantIcon()
```
___
#### <a name="getTenantBoothId">getTenantBoothId</a>

tenant booth_id of feature you set in <a href="#set_tenant_data">SET_TENANT_DATA</a>

```js
poi.getTenantBoothId()
```
___
#### getDisplayName

<a href="#getTenantName">getTenantName</a> or feature name

```js
poi.getDisplayName()
```
___
#### hasName

check if tenant or feature have name. 

```js
poi.hasName()
```
___
#### isBuilding

check if feature is building.

```js
poi.isBuilding()
```
___
#### getIcon

<a href="#getTenantIcon">getTenantIcon</a> or feature icon

```js
poi.getIcon()
```
___
#### getBoothId

<a href="#getTenantBoothId">getTenantBoothId</a> or feature booth id

```js
poi.getBoothId()
```

## Advanced Scenrios (Look at sample for implementation of scenrios)

### Highlight initial feature

#### if you dispatch SET_ZOOM/SET_CENTER

you should dispatch <a href="#HIGHLIGHT_FEATURE">HIGHLIGHT_FEATURE</a> for initial feature after <a href="#ZOOM_ENDED">ZOOM_ENDED</a>/<a href="#CENTER_ENDED">CENTER_ENDED</a>

#### if you don't dispatch SET_ZOOM/SET_CENTER

you should dispatch <a href="#HIGHLIGHT_FEATURE">HIGHLIGHT_FEATURE</a> for initial feature after <a href="#MAP_LOADED">MAP_LOADED</a>

### Add custom buttons inside feature popup template

you should dispatch <a href="#SET_DEFAULT_FEATURE_POPUP_TEMPLATE">SET_DEFAULT_FEATURE_POPUP_TEMPLATE</a> for your customized template and add your custom buttons and use <a href="#dispatchToContainer">dispatchToContainer</a> when button clicked to handle the click action in your APP.







