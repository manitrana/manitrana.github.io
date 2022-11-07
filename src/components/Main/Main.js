import React from "react";
import * as ChartGeo from "chartjs-chart-geo";
import { ChoroplethChart } from 'chartjs-chart-geo';
import { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } from 'chartjs-chart-geo';
import {
    Chart as ChartJS,
    CategoryScale,
    Tooltip,
    Title,
    Legend
  } from "chart.js";
  import Chart from "chart.js/auto";


export default function Main(){
    fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((us) => {
        const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
        const states = ChartGeo.topojson.feature(us, us.objects.states).features;
      
        const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
          type: 'choropleth',
          data: {
            labels: states.map((d) => d.properties.name),
            datasets: [{
              label: 'States',
              outline: nation,
              data: states.map((d) => ({feature: d, value: Math.random() * 10})),
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              },
            },
            scales: {
              xy: {
                projection: 'albersUsa'  
              },
              color: {
                quantize: 5,
                legend: {
                  position: 'bottom-right',
                  align: 'bottom'
                  },
                }
              },
            }
          });
        });
}
 