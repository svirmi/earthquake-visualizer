import { BehaviorSubject } from 'rxjs';

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