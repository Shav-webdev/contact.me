import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

export default function YandexMap(props) {
    return (
        <YMaps>
            <div>
                My awesome application with maps!
                <Map
                    defaultState={{ center: [40.155305, 44.509788], zoom: 13 }}
                />
            </div>
        </YMaps>
    );
}
