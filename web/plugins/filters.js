import Vue from 'vue';

import cropText from "~/filters/cropText";

const filters = [
    {
        name: 'cropText',
        actor: cropText
    }
];

for (const filter of filters) {
    Vue.filter(filter.name, filter.actor);
}
