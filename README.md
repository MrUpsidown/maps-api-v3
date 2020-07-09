# google maps javascript api v3

> ### This document lists Google Maps API v3 javascript examples, sometimes in relation with a specific stackoverflow question.
> All my fiddles can be found on my [dashboard](http://jsfiddle.net/user/upsidown/fiddles/)

## Map

* [Maps API v3 base map](http://jsfiddle.net/upsidown/Lw6tF/)
  * The very base map

* [Maps API v3 Styled Map Types](http://jsfiddle.net/upsidown/Lt2Ey/)
  * Create a Styled Map and the corresponding `MapTypeId`
  * A great tool for generating styled maps: [The Styled Map Wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html)

* [Maps API v3 Map resize](http://jsfiddle.net/upsidown/K3P2s/)
  * Trigger a map resize when the map canvas is displayed

* [Maps API v3 Bootstrap modal & map resize](http://jsfiddle.net/upsidown/fag9n52y/)
  * Trigger a map resize when map is shown in a Bootstrap modal
  * [http://stackoverflow.com/questions/29875472](http://stackoverflow.com/questions/29875472)

* [Maps API v3 4 quarters of the projection](http://jsfiddle.net/upsidown/urtuoLsp/)
  * Display all 4 quarters of the map projection and use a formula to find the real north and south edges of the projection
  * [http://stackoverflow.com/questions/27107440](http://stackoverflow.com/questions/27107440)

* [Maps API v3 Marker in each corner](http://jsfiddle.net/upsidown/jg3sf7tb/)
  * Place a marker in each of the map corners
  
* [Maps API v3 map quarters, find where marker lies](http://jsfiddle.net/upsidown/dh425tus/)
  * Divide the map viewport in 4 quarters and check in which quarter a marker lies
  * [https://stackoverflow.com/questions/57058930](https://stackoverflow.com/questions/57058930)

* [Maps API v3 Center map from user input](http://jsfiddle.net/upsidown/gefg183r/)
  * Center map on user input coordinates with validation
  
* [Maps API v3 Custom scale control](http://jsfiddle.net/upsidown/3jnxk71o/)
  * Create a custom scale control
  * [https://stackoverflow.com/q/53159975/1238965](https://stackoverflow.com/q/53159975/1238965)
  
* [Maps API v3 Night Overlay](http://jsfiddle.net/upsidown/s6x8kvgq/)
  * Adds a day/night overlay using the [Nite Overlay library](https://github.com/rossengeorgiev/nite-overlay)

## Events

* [Maps API v3 Handle single and double click events](http://jsfiddle.net/upsidown/a657hvjc/)
  * How to handle single and double click events simultanously
  * [https://stackoverflow.com/questions/56888891](https://stackoverflow.com/questions/56888891)
  
## Marker

* [Maps API v3 Add and remove markers](http://jsfiddle.net/upsidown/b5r4nm3s/)
  * Add and remove a set of markers from the map by the use of a markers array
  * [http://stackoverflow.com/questions/28413791](http://stackoverflow.com/questions/28413791)

* [Maps API v3 markers setInterval](http://jsfiddle.net/upsidown/PWsVH/)
  * Drop markers at a defined time interval

* [Maps API v3 Marker stick within bounds](http://jsfiddle.net/upsidown/c4gaC/)
  * With a non-draggable map, make a marker stick within the map bounds

* [Maps API v3 Repeat draggable marker at low zoom levels](http://jsfiddle.net/upsidown/m76km/)
  * By default, draggable markers are not repeated on the map when world map is smaller than canvas area. This is a quick fix that adds a non draggable marker to mimic the non draggable behavior.

* [Maps API v3 Create random markers](http://jsfiddle.net/upsidown/94uGL/)
  * Create markers at random locations within defined bounds

* [Maps API v3 Loop through markers and center map](http://jsfiddle.net/upsidown/7Q8aX/)
  * Center map on each marker with by clicking on a button

* [Maps API v3 SVG markers increase in size](http://jsfiddle.net/upsidown/88JLY/)
  * Increase marker icon size every time a marker is added to the map

* [Maps API v3 Fit map to markers bounds](http://jsfiddle.net/upsidown/ay337bwp/)
  * Extend a bounds object with each marker position and fit the map to these bounds
  * [http://stackoverflow.com/questions/28716921](http://stackoverflow.com/questions/28716921)

* [Maps API v3 Filter markers by groups](http://jsfiddle.net/upsidown/gts7dknt/)
  * Read JSON data and push markers to arrays by group

* [Maps API v3 MarkerClusterer](http://jsfiddle.net/upsidown/2qdvjc4j/)
  * Clustering a good amount of markers on a map
  
* [Maps API v3 HTML Marker (Custom Overlay)](https://jsfiddle.net/upsidown/4Lf7r5m1/)
  * Create a custom HTML Marker by implementing OverlayView class

## Infowindow

* [Maps API v3 Infowindow scroll](http://jsfiddle.net/upsidown/VFyYb/)
  * Add a nice scrolling to Infowindow

* [Maps API v3 Twitter in Infowindow](http://jsfiddle.net/upsidown/eh4Kp/)
  * Embed a tweet in an Infowindow

* [Maps API v3 Marker with Infowindow in Street View panorama](https://jsfiddle.net/upsidown/9h21jzc7/)
  * Opens an Infowindow on a Street View panorama marker
  * [https://stackoverflow.com/questions/48839938](https://stackoverflow.com/questions/48839938)

* [Maps API v3 Multiple markers with single Infowindow](http://jsfiddle.net/upsidown/4k4d5vtL/)
  * Draw multiple markers that share a common Infowindow object

* [Maps API v3 Multiple markers with single Infowindow (Closure version)](http://jsfiddle.net/upsidown/peor6rqk/)
  * Draw multiple markers that share a common Infowindow object (Closure version)
  * Google Documentation: [Using closures in event listeners](https://developers.google.com/maps/documentation/javascript/examples/event-closure)

## Polyline

* [Maps API v3 Symbol cut on tile edge](http://jsfiddle.net/upsidown/QuTTV/)
  * Predefined and custom polyline symbols are cut off on tiles edges
  * <small>[http://stackoverflow.com/questions/24853312](http://stackoverflow.com/questions/24853312)
  * Bug report: [https://code.google.com/p/gmaps-api-issues/issues/detail?id=6916](https://code.google.com/p/gmaps-api-issues/issues/detail?id=6916)</small>

* [Maps API v3 set and remove polyline points](http://jsfiddle.net/upsidown/c7yfkcke/)
  * Add and remove polyline points with map interactions
  * [http://stackoverflow.com/questions/31052749/](http://stackoverflow.com/questions/31052749/)

## Shapes

* [Maps API v3 Subtract triangle from rectangle](http://jsfiddle.net/upsidown/m9k4sgxr/)
  * Subtract a shape from another one
  * [http://stackoverflow.com/questions/28233018](http://stackoverflow.com/questions/28233018)

* [Maps API v3 Circle between 3 markers](http://jsfiddle.net/upsidown/of1f6dcL/)
  * Draw a cricle that touches 3 markers

* [Maps API v3 Circle to shortest map canvas segment](http://jsfiddle.net/upsidown/qftnk27j/)
  * Create a circle that fits the shortest side of the map canvas
[http://stackoverflow.com/questions/29739964](http://stackoverflow.com/questions/29739964)

* [Maps API v3 Polygon events](http://jsfiddle.net/upsidown/m9k4sgxr/)
  * Listen to editable Polygon events (set_at, insert_at, remove_at)
  * [http://stackoverflow.com/questions/29176269](http://stackoverflow.com/questions/29176269)

* [Maps API v3 allow to edit rectangle and expand further left or right](http://jsfiddle.net/upsidown/Lrxt0wu4/)
  * Rectangles cannot be edited further left/right of 50% of the remaining distance to 360°
  * [https://stackoverflow.com/a/52517844/1238965](https://stackoverflow.com/a/52517844/1238965)

* [Maps API v3 display Polygon bounding box](http://jsfiddle.net/upsidown/jsck7dxp/)
  * Draw a Polygon, get its paths and extend a LatLngBounds object to define a bounding box
  
## Data Layer

* [Maps API v3 Data layer remove feature](http://jsfiddle.net/upsidown/nwvn2nhs/)
  * Load geojson data and manipulate the features
  
* [Maps API v3 Data layer manipulate single feature](http://jsfiddle.net/upsidown/15tf4d03/)
  * Manipulate one feature in a feature collection (show/hide) independently from other features

## Custom controls

* [Maps API v3 Custom Control and geolocation](http://jsfiddle.net/upsidown/19hjuh6s/)
  * Add a custom control to center map on user location.
  * [http://stackoverflow.com/questions/28998743](http://stackoverflow.com/questions/28998743)
  
* [Maps API v3 Custom Zoom control](http://jsfiddle.net/upsidown/rh8endts/)
  * Add a custom zoom control
  * [https://stackoverflow.com/q/54901509/1238965](https://stackoverflow.com/q/54901509/1238965)

## Geocoder Service

* [Maps API v3 Reverse geocoding](http://jsfiddle.net/upsidown/5S3ce/)
  * Reverse geocode coordinates on a map

* [Maps API v3 Drag & drop locations on the map](http://jsfiddle.net/upsidown/4cxL2074/)
  * Geocode an address by dragging and dropping a label on the map

* [Maps API v3 Drag & drop locations on the map & place search box](http://jsfiddle.net/upsidown/y96ktn81/)
  * Geocode an address by dragging and dropping a label on the map (includes Places Search Box)

* [Maps API v3 Geocoder component restrictions](http://jsfiddle.net/upsidown/8e6xh7sc/)
  * Restrict geocoder to a specific country
  * [http://stackoverflow.com/questions/26528744](http://stackoverflow.com/questions/26528744)
  * [Feature request: filter by multiple countries](https://code.google.com/p/gmaps-api-issues/issues/detail?id=4233)

## Directions Service

* [Maps API v3 Directions simple](http://jsfiddle.net/upsidown/5AwhM/)
  * Simple use of the Directions service
  
* [Maps API v3 Directions from/to buttons](http://jsfiddle.net/upsidown/53m68qzc/)
  * Get directions from InfoWindow buttons
  * [https://stackoverflow.com/q/53110741/1238965](https://stackoverflow.com/q/53110741/1238965)

* [Maps API v3 Directions Waypoints](http://jsfiddle.net/upsidown/J8aCH/)
  * Directions service with waypoints and custom markers

* [Maps API v3 Directions with clickable Waypoints](http://jsfiddle.net/upsidown/g67mrsqx/)
  * Directions service with waypoints and custom clickable markers.
  * [https://stackoverflow.com/questions/57023259](https://stackoverflow.com/questions/57023259)
  
* [Maps API v3 Directions with draggable waypoints](https://jsfiddle.net/upsidown/evLx3c0t/)
  * Directions service with draggable waypoints and custom markers.
  
* [Maps API v3 Directions routes and steps](http://jsfiddle.net/upsidown/3uLqrd7c/)
  * Get all routes (alternates) steps and show them on the map
  * [http://stackoverflow.com/questions/27700844](http://stackoverflow.com/questions/27700844)

* [Maps API v3 Directions change polyline color](http://jsfiddle.net/upsidown/wenpn9yd/2/)
  * Change the driving directions polyline color on the fly
  * [http://stackoverflow.com/questions/27700844](http://stackoverflow.com/questions/35597394)

* [Maps API v3 Directions dotted polyline](http://jsfiddle.net/upsidown/7b843s67/)
  * Draw a dotted polyline for map Directions

* [Maps API v3 Directions with custom draggable markers](http://jsfiddle.net/upsidown/evLx3c0t/)
  * Custom draggable markers to edit a Directions (with snap to road function)

* [Maps API v3 Draggable directions with alternate routes](http://jsfiddle.net/upsidown/9jb2nvt8/)
  * Displays directions alternatives with the ability to redraw routes when directions changed.
  * [http://stackoverflow.com/questions/41999828](http://stackoverflow.com/questions/41999828)

* [Maps API v3 Directions with InfoWindow](http://jsfiddle.net/upsidown/anwkL39f/)
  * Bind an InfoWindow to a Directions route by manually rendering the route
  
* [Maps API v3 Directions with InfoWindow with directions instructions](http://jsfiddle.net/upsidown/ypfaekch/)
  * Bind an InfoWindow to a Directions route by manually rendering the route and displaying each step instructions

* [Maps API v3 Directions with InfoWindow with distance from start](http://jsfiddle.net/upsidown/ucny147m/)
  * Bind an InfoWindow to a Directions route by manually rendering the route and displaying distance from start
  * Warning: this uses the **overview Polyline** which is less accurate than rendering each step Poyline
  * Credits for distance calculation go to https://stackoverflow.com/a/9491592/1238965

## Street View Service

* [Maps API v3 Map & StreetView](http://jsfiddle.net/upsidown/fXu5d/)
  * StreetView panorama with default UI disabled

* [Maps API v3 Marker in Street View](http://jsfiddle.net/upsidown/7Gmg9/)
  * Place a Marker on a Street View and toggle between map and Street View
  
* [Maps API v3 Street View coverage layer](http://jsfiddle.net/upsidown/15tf4d03/)
  * Shows Street View coverage on a map, like on Google Maps when clicking on the pegman
  
## Elevation Service

* [Maps API v3 Elevation Service](https://jsfiddle.net/upsidown/jhbkbxpw/)
  * Simple example use of the Elevation Service
  
## Geometry Library

* [Maps API v3 get heading between 2 points](http://jsfiddle.net/upsidown/u8gv0bqt/)
  * Calculate the heading between 2 coordinates using the Geometry library

## Places Library

* [Maps API v3 Search Nearby Places](http://jsfiddle.net/upsidown/yujw0h8p/)
  * Search for nearby places using the Places Service

* [Maps API v3 Nearby place search and setInterval](http://jsfiddle.net/upsidown/c4qnumjv/)
  * Drop place search result markers at a defined time interval
  * [http://stackoverflow.com/questions/29739752](http://stackoverflow.com/questions/29739752)

* [Maps API v3 Places Autocomplete](http://jsfiddle.net/upsidown/GVdK6/)
  * Simple Places API autocomplete field

* [Maps API v3 Places Search Box](http://jsfiddle.net/upsidown/2NhsE/)
  * Use the searchBox class to perform a place serach and display results as markers

* [Maps API v3 Places Autocomplete Predictions](http://jsfiddle.net/upsidown/9JDa5/)
  * Biaise autocomplete results based on location and retrieve predictions

* [Maps API v3 Place Search trigger](http://jsfiddle.net/upsidown/1svw299r/)
  * Trigger a place search from a button
  * [http://stackoverflow.com/questions/19113477](http://stackoverflow.com/questions/19113477)

* [Maps API v3 Places Autocomplete Predictions from 2 fields](http://jsfiddle.net/upsidown/n3t33au2/)
  * Retrieve query predictions based on 2 input fields, render predictions with search highlighting
  * [http://stackoverflow.com/questions/28566699](http://stackoverflow.com/questions/28566699)

* [Maps API v3 Places Autocomplete Predictions simple](http://jsfiddle.net/upsidown/dmwv1t4e/)
  * Same as above but not as much style and a single field.
  
* [Maps API v3 Places Autocomplete Predictions with custom addresses](http://jsfiddle.net/upsidown/q2pn43ks/)
  * Same as above but with inserting custom addresses on top of the returned predictions
  * [https://stackoverflow.com/q/49671434/1238965](https://stackoverflow.com/q/49671434/1238965)

## Styling the map

* [Maps API v3 Simple styled map](http://jsfiddle.net/upsidown/zLxafos3/)
  * Maps API v3 Simple styled map

* [Maps API v3 Changing styles per zoom level](http://jsfiddle.net/upsidown/Gt8eW/)
  * Change map sytles depending on zoom level

* [Maps API v3 Toggle styles](http://jsfiddle.net/upsidown/kofoeppw/)
  * Toggle different feature types with checkboxes
  * [http://stackoverflow.com/questions/28081912](http://stackoverflow.com/questions/28081912)

* [Maps API v3 Change styles](http://jsfiddle.net/upsidown/Lu56chq8/)
  * Change different feature types and elements with checkboxes
  * [https://stackoverflow.com/questions/50859362/](https://stackoverflow.com/questions/50859362/)

* [Maps API v3 Rounded styled map above base map & sync](http://jsfiddle.net/upsidown/ooq7wcjc/)
  * Hack to display a styled map of a rounded shape above a standard map
  * [http://stackoverflow.com/questions/28413474](http://stackoverflow.com/questions/28413474)

## Map Types

* [Maps API v3 OpenStreetMap tiles over Google Maps](http://jsfiddle.net/upsidown/uLh5t6kc/)
  * Embed OSM tiles over Google Maps

* [Maps API v3 OpenStreetMap as Map Type](http://jsfiddle.net/upsidown/p78j9fjr/)
  * Switch between OpenStreetMap and Google imagery with map controls

## Drawing Manager

* [Maps API v3 drawingManager get Polygon paths](http://jsfiddle.net/upsidown/2um0zxct/)
  * Retrieve paths from a Polygon overlay and create a Polygon
  * [http://stackoverflow.com/questions/32739660](http://stackoverflow.com/questions/32739660)

* [Maps API v3 drawingManager events](http://jsfiddle.net/upsidown/w3r0bo1e/)
  * Register events on a shape drawn with the drawingManager
  * [http://stackoverflow.com/questions/27787618](http://stackoverflow.com/questions/27787618)

* [Maps API v3 drawingManager stop drawing with ESC key](http://jsfiddle.net/upsidown/u7nrqevc/)
  * Stop drawing a rectangle when hitting ESC key.
  * [http://stackoverflow.com/questions/28425150](http://stackoverflow.com/questions/28425150)

* [Maps API v3 drawingManager stop drawing **polygons** with ESC key](http://jsfiddle.net/upsidown/a1j58c2b/)
  * Stop drawing a polygon when hitting ESC key. Same as above but for polygons. More info on the link below.
  * [http://stackoverflow.com/questions/28425150](http://stackoverflow.com/questions/28425150)

* [Maps API v3 drawingManager circle events](http://jsfiddle.net/upsidown/k0ye3v9z/)
  * Register events on a circle drawn with the drawingManager:
  * [http://stackoverflow.com/questions/29101088](http://stackoverflow.com/questions/29101088)

> ### ReactJS

* [ReactJS Google Maps code sandbox](https://codesandbox.io/s/reactjs-google-maps-example-dhcii)

* [ReactJS Google Maps with Drawing Manager component](https://codesandbox.io/s/react-google-mapsapi-with-drawing-manager-4b8rw)

* [ReactJS Google Maps with geolocation using use-position](https://codesandbox.io/s/reactjs-google-maps-example-trogl)
  * React hook for following a browser geolocation: npm [use-position](https://www.npmjs.com/package/use-position)
  
* [ReactJS Google Maps Autocomplete](https://codesandbox.io/s/react-js-react-google-places-autocomplete-o1e6f)
  * With https://www.npmjs.com/package/react-google-places-autocomplete

> ### Vue

* [Vue 2 Google Maps boilerplate](https://jsfiddle.net/upsidown/Lafcy16b/)
  * Uses `vue2-google-maps` package
  
* [Vue JS - Manually Loading Google Maps API](https://jsfiddle.net/upsidown/w8q1r34L/)
  * Uses no package - manual loading
  
* [Vue JS - Dynamically add Autocomplete fields](https://codesandbox.io/s/modest-fog-1efqy?file=/src/App.vue)
  * Dynamically add Autocomplete input fields and track their value

> ### Google Visualization API

* [Google Visualization API simple chart](http://jsfiddle.net/upsidown/xyqF7/)
  * Draw a simple chart with the Visualization API

> ### Bootstrap 4

* [Bootstrap 4 base template](https://jsfiddle.net/upsidown/bs5emk4v/)
  * Fork to test

> ### stackoverflow templates

Yes, I need this a lot...

* While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes.

* `Please provide a [Minimal, Reproducible Example](https://stackoverflow.com/help/minimal-reproducible-example) that demonstrates the issue.`

> ### Google Maps API key for JSFiddle.net and Stackoverflow (provided by Google)

* AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk

> Script

* `https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk`
