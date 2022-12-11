import transformLatLong from "./transformLatLongFn";
import * as ol from "openlayers";

export default (lat, long) => {
  let pointLatLong = transformLatLong([lat, long]);
  let featurePoint = new ol.Feature(new ol.geom.Point(pointLatLong));
  return featurePoint;
};

