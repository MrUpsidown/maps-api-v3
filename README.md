

# google maps javascript api v3

>### This document lists javascript examples of using the api, sometimes in relation with a specific stackoverflow question.
> All my fiddles can be found on my [dashboard](http://jsfiddle.net/user/upsidown/fiddles/)

## Map

* [Maps API v3 base map](http://jsfiddle.net/upsidown/Lw6tF/)
The very base map

* [Maps API v3 Styled Map Types](http://jsfiddle.net/upsidown/Lt2Ey/)
** Create a Styled Map and the corresponding `MapTypeId`
** A great tool for generating styled maps: [The Styled Map Wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html)

* [Maps API v3 Map resize](http://jsfiddle.net/upsidown/K3P2s/)
Trigger a map resize when the map canvas is displayed

* [Maps API v3 Bootstrap modal & map resize](http://jsfiddle.net/upsidown/fag9n52y/)
Trigger a map resize when map is shown in a Bootstrap modal
<small>[http://stackoverflow.com/questions/29875472](http://stackoverflow.com/questions/29875472)</small>

* [Maps API v3 4 quarters of the projection](http://jsfiddle.net/upsidown/urtuoLsp/)
Display all 4 quarters of the map projection and use a formula to find the real north and south edges of the projection
<small>[http://stackoverflow.com/questions/27107440](http://stackoverflow.com/questions/27107440)</small>

* [Maps API v3 Center map from user input](http://jsfiddle.net/upsidown/gefg183r/)
Center map on user input coordinates with validation

## Marker

* [Maps API v3 Add and remove markers](http://jsfiddle.net/upsidown/b5r4nm3s/)
Add and remove a set of markers from the map by the use of a markers array
<small>[http://stackoverflow.com/questions/28413791](http://stackoverflow.com/questions/28413791)</small>

* [Maps API v3 markers setInterval](http://jsfiddle.net/upsidown/PWsVH/)
Drop markers at a defined time interval

* [Maps API v3 Marker stick within bounds](http://jsfiddle.net/upsidown/c4gaC/)
With a non-draggable map, make a marker stick within the map bounds

* [Maps API v3 Repeat draggable marker at low zoom levels](http://jsfiddle.net/upsidown/m76km/)
By default, draggable markers are not repeated on the map when world map is smaller than canvas area. This is a quick fix that adds a non draggable marker to mimic the non draggable behavior.

* [Maps API v3 Create random markers](http://jsfiddle.net/upsidown/94uGL/)
Create markers at random locations within defined bounds

* [Maps API v3 Loop through markers and center map](http://jsfiddle.net/upsidown/7Q8aX/)
Center map on each marker with by clicking on a button

* [Maps API v3 SVG markers increase in size](http://jsfiddle.net/upsidown/88JLY/)
Increase marker icon size every time a marker is added to the map

* [Maps API v3 Fit map to markers bounds](http://jsfiddle.net/upsidown/ay337bwp/)
Extend a bounds object with each marker position and fit the map to these bounds
<small>[http://stackoverflow.com/questions/28716921](http://stackoverflow.com/questions/28716921)</small>

* [Maps API v3 Filter markers by groups](http://jsfiddle.net/upsidown/gts7dknt/)
Read JSON data and push markers to arrays by group

* [Maps API v3 MarkerClusterer](http://jsfiddle.net/upsidown/2qdvjc4j/)
Clustering a good amount of markers on a map

## InfoWindow

* [Maps API v3 infoWindow scroll](http://jsfiddle.net/upsidown/VFyYb/)
Add a nice scrolling to `infoWindow`

* [Maps API v3 Twitter in infoWindow](http://jsfiddle.net/upsidown/eh4Kp/)
Embed a tweet in an infoWindow

* [Maps API v3 Marker with infoWindow in Street View panorama](https://jsfiddle.net/upsidown/9h21jzc7/)
Opens an infoWindow on a Street View panorama marker
<small>[https://stackoverflow.com/questions/48839938](https://stackoverflow.com/questions/48839938)</small>

* [Maps API v3 Multiple markers with single infowindow](http://jsfiddle.net/upsidown/4k4d5vtL/)
Draw multiple markers that share a common infowindow object

* [Maps API v3 Multiple markers with single infowindow (Closure version)](http://jsfiddle.net/upsidown/peor6rqk/)
Draw multiple markers that share a common infowindow object (Closure version)
<small>[Google Documentation: Using closures in event listeners](https://developers.google.com/maps/documentation/javascript/examples/event-closure)</small>

## Polyline

* [Maps API v3 Symbol cut on tile edge](http://jsfiddle.net/upsidown/QuTTV/)
Predefined and custom polyline symbols are cut off on tiles edges
<small>[http://stackoverflow.com/questions/24853312](http://stackoverflow.com/questions/24853312)
Bug report: [https://code.google.com/p/gmaps-api-issues/issues/detail?id=6916](https://code.google.com/p/gmaps-api-issues/issues/detail?id=6916)</small>

* [Maps API v3 set and remove polyline points](http://jsfiddle.net/upsidown/c7yfkcke/)
Add and remove polyline points with map interactions
<small>[http://stackoverflow.com/questions/31052749/](http://stackoverflow.com/questions/31052749/)</small>

## Shapes

* [Maps API v3 Subtract triangle from rectangle](http://jsfiddle.net/upsidown/m9k4sgxr/)
Subtract a shape from another one
<small>[http://stackoverflow.com/questions/28233018](http://stackoverflow.com/questions/28233018)</small>

* [Maps API v3 Circle between 3 markers](http://jsfiddle.net/upsidown/of1f6dcL/)
Draw a cricle that touches 3 markers

* [Maps API v3 Circle to shortest map canvas segment](http://jsfiddle.net/upsidown/qftnk27j/)
Create a circle that fits the shortest side of the map canvas
<small>[http://stackoverflow.com/questions/29739964](http://stackoverflow.com/questions/29739964)</small>

* [Maps API v3 Polygon events](http://jsfiddle.net/upsidown/m9k4sgxr/)
Listen to editable Polygon events (set_at, insert_at, remove_at)
<small>[http://stackoverflow.com/questions/29176269](http://stackoverflow.com/questions/29176269)</small>

## Data Layer

* [Maps API v3 Data layer remove feature](http://jsfiddle.net/upsidown/nwvn2nhs/)
Load geojson data and manipulate the features

## Custom controls

* [Maps API v3 Custom Control and geolocation](http://jsfiddle.net/upsidown/19hjuh6s/)
Add a custom control to center map on user location.
<small>[http://stackoverflow.com/questions/28998743](http://stackoverflow.com/questions/28998743)</small>

## Geocoder Service

* [Maps API v3 Reverse geocoding](http://jsfiddle.net/upsidown/5S3ce/)
Reverse geocode coordinates on a map

* [Maps API v3 Drag & drop locations on the map](http://jsfiddle.net/upsidown/4cxL2074/)
Geocode an address by dragging and dropping a label on the map

* [Maps API v3 Drag & drop locations on the map & place search box](http://jsfiddle.net/upsidown/y96ktn81/)
Geocode an address by dragging and dropping a label on the map (includes Places Search Box)

* [Maps API v3 Geocoder component restrictions](http://jsfiddle.net/upsidown/8e6xh7sc/)
Restrict geocoder to a specific country
<small>[http://stackoverflow.com/questions/26528744](http://stackoverflow.com/questions/26528744)</small>
<small>[Feature request: filter by multiple countries](https://code.google.com/p/gmaps-api-issues/issues/detail?id=4233)</small>

## Directions Service

* [Maps API v3 Directions simple](http://jsfiddle.net/upsidown/5AwhM/)
Simple use of the Directions service

* [Maps API v3 Directions Waypoints](http://jsfiddle.net/upsidown/J8aCH/)
Directions service with waypoints and custom markers

* [Maps API v3 Directions routes and steps](http://jsfiddle.net/upsidown/3uLqrd7c/)
Get all routes (alternates) steps and show them on the map
<small>[http://stackoverflow.com/questions/27700844](http://stackoverflow.com/questions/27700844)</small>

* [Maps API v3 Directions change polyline color](http://jsfiddle.net/upsidown/wenpn9yd/2/)
Change the driving directions polyline color on the fly
<small>[http://stackoverflow.com/questions/27700844](http://stackoverflow.com/questions/35597394)</small>

* [Maps API v3 Directions dotted polyline](http://jsfiddle.net/upsidown/7b843s67/)
Draw a dotted polyline for map Directions

* [Maps API v3 Directions with custom draggable markers](http://jsfiddle.net/upsidown/evLx3c0t/)
Custom draggable markers to edit a Directions (with snap to road function)

* [Maps API v3 Draggable directions with alternate routes.](http://jsfiddle.net/upsidown/9jb2nvt8/)
Displays directions alternatives with the ability to redraw routes when directions changed.
<small>[http://stackoverflow.com/questions/41999828](http://stackoverflow.com/questions/41999828)</small>

## Street View Service

* [Maps API v3 Map & StreetView](http://jsfiddle.net/upsidown/fXu5d/)
StreetView panorama with default UI disabled

* [Maps API v3 Marker in Street View](http://jsfiddle.net/upsidown/7Gmg9/)
Place a Marker on a Street View and toggle between map and Street View

## Places Library

* [Maps API v3 Search Nearby Places](http://jsfiddle.net/upsidown/yujw0h8p/)
Search for nearby places using the Places Service

* [Maps API v3 Nearby place search and setInterval](http://jsfiddle.net/upsidown/c4qnumjv/)
Drop place search result markers at a defined time interval
<small>[http://stackoverflow.com/questions/29739752](http://stackoverflow.com/questions/29739752)</small>

* [Maps API v3 Places Autocomplete](http://jsfiddle.net/upsidown/GVdK6/)
Simple Places API autocomplete field

* [Maps API v3 Places Search Box](http://jsfiddle.net/upsidown/2NhsE/)
Use the searchBox class to perform a place serach and display results as markers

* [Maps API v3 Places Autocomplete Predictions](http://jsfiddle.net/upsidown/9JDa5/)
Biaise autocomplete results based on location and retrieve predictions

* [Maps API v3 Place Search trigger](http://jsfiddle.net/upsidown/1svw299r/)
Trigger a place search from a button
<small>[http://stackoverflow.com/questions/19113477](http://stackoverflow.com/questions/19113477)</small>

* [Maps API v3 Places Autocomplete Predictions from 2 fields](http://jsfiddle.net/upsidown/n3t33au2/)
Retrieve query predictions based on 2 input fields, render predictions with search highlighting
<small>[http://stackoverflow.com/questions/28566699](http://stackoverflow.com/questions/28566699)</small>

* [Maps API v3 Places Autocomplete Predictions simple](http://jsfiddle.net/upsidown/dmwv1t4e/)
Same as above but not as much style and a single field.

## Styling the map

* [Maps API v3 Simple styled map](http://jsfiddle.net/upsidown/zLxafos3/)
Maps API v3 Simple styled map

* [Maps API v3 Changing styles per zoom level](http://jsfiddle.net/upsidown/Gt8eW/)
Change map sytles depending on zoom level

* [Maps API v3 Toggle styles](http://jsfiddle.net/upsidown/kofoeppw/)
Toggle different feature types with checkboxes
<small>[http://stackoverflow.com/questions/28081912](http://stackoverflow.com/questions/28081912)</small>

* [Maps API v3 Rounded styled map above base map & sync](http://jsfiddle.net/upsidown/ooq7wcjc/)
Hack to display a styled map of a rounded shape above a standard map
<small>[http://stackoverflow.com/questions/28413474](http://stackoverflow.com/questions/28413474)</small>

## Map Types

* [Maps API v3 OpenStreetMap tiles over Google Maps](http://jsfiddle.net/upsidown/uLh5t6kc/)
Embed OSM tiles over Google Maps

* [Maps API v3 OpenStreetMap as Map Type](http://jsfiddle.net/upsidown/p78j9fjr/)
Switch between OpenStreetMap and Google imagery with map controls

## Drawing Manager

* [Maps API v3 drawingManager get Polygon paths](http://jsfiddle.net/upsidown/2um0zxct/)
Retrieve paths from a Polygon overlay and create a Polygon
<small>[http://stackoverflow.com/questions/32739660](http://stackoverflow.com/questions/32739660)</small>

* [Maps API v3 drawingManager events](http://jsfiddle.net/upsidown/w3r0bo1e/)
Register events on a shape drawn with the drawingManager
<small>[http://stackoverflow.com/questions/27787618](http://stackoverflow.com/questions/27787618)</small>

* [Maps API v3 drawingManager stop drawing with ESC key](http://jsfiddle.net/upsidown/u7nrqevc/)
Stop drawing a rectangle when hitting ESC key.
<small>[http://stackoverflow.com/questions/28425150](http://stackoverflow.com/questions/28425150)</small>

* [Maps API v3 drawingManager stop drawing **polygons** with ESC key](http://jsfiddle.net/upsidown/a1j58c2b/)
Stop drawing a polygon when hitting ESC key. Same as above but for polygons. More info on the link below.
<small>[http://stackoverflow.com/questions/28425150](http://stackoverflow.com/questions/28425150)</small>

* [Maps API v3 drawingManager circle events](http://jsfiddle.net/upsidown/k0ye3v9z/)
Register events on a circle drawn with the drawingManager:
<small>[http://stackoverflow.com/questions/29101088](http://stackoverflow.com/questions/29101088)</small>

> ### Google Visualization API

* [Google Visualization API simple chart](http://jsfiddle.net/upsidown/xyqF7/)
Draw a simple chart with the Visualization API

> ### stackoverflow templates

Yes, I need this a lot...

* While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes.

* `Please provide a [Minimal, Complete and Verifiable example](http://stackoverflow.com/help/mcve) that demonstrates the issue.`
