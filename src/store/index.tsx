import { BehaviorSubject } from 'rxjs';
import { timer, from } from 'rxjs'
import { map, concatMap, filter, take } from 'rxjs/operators'

const RELOAD_RATE = 5000;
const QUAKE_URL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`;

export interface Properties {
    mag: number;
    place: string;
    time: number;
    updated: number;
    tz?: any;
    url: string;
    detail: string;
    felt?: any;
    cdi?: any;
    mmi?: any;
    alert?: any;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number;
    dmin?: any;
    rms: number;
    gap: number;
    magType: string;
    type: string;
    title: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface EarthQuake {
    type: string;
    properties: Properties;
    geometry: Geometry;
    id: string;
}

export const rawEarthQuake$ = new BehaviorSubject<EarthQuake[]>([]);

fetch(QUAKE_URL)
    .then(res => res.json())
    .then(data => rawEarthQuake$.next(data));

    // const bitcoin$ = this.http.get('https://blockchain.info/ticker');


    // this.polledBitcoin$ = timer(0, 10000).pipe(
    //     merge(this.manualRefresh),
    //     concatMap(_ => bitcoin$),
    //     map((response: {EUR: {last: number}}) => response.EUR.last),
    //   );


//     timer(0, 5000)
//   .pipe(concatMap(() => from(fetch(QUAKE_URL))
//     .pipe(map(response => response.json())))
//   )
//   .pipe(take(1));


// const quakes$ = rawEarthQuake$.interval(5000)
//     .flatMap(() => {
//     return loadJSONP({
//     url: QUAKE_URL,
//     callbackName: "eqfeed_callback"
//     }).retry(3);
//     })
//     .flatMap(result => Observable.from(result.response.features))
//     .distinct(quake => quake.properties.code);