<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="dashboard"></main-sidebar>
      </div>
      <div class="flex-grow-1 bg-main container-fluid scroll-y">
        <nav-header></nav-header>
        <div class="row mt-3">
          <div class="col-3">
            <div class="stat-box">
              <div class="title">total links</div>
              <div class="stat-value-wrap">
                <div class="stat-value stat-value-link">
                  <span class="value-inner value-link">
                    12,697
                    <div class="growth-status increase">
                      <span class="flaticon-right-down-2 icons growth-icon"></span>
                    </div>
                  </span>
                </div>
                <div class="icon-wrap icon-link">
                  <span class="flaticon-link-1 icons stat-icon link"></span>
                </div>
              </div>
              <div class="desc">
                <span class="desc-value increase">
                  30.4%
                  <span class="flaticon-arrow icons increase-icon"></span>
                </span> more that last week
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="stat-box">
              <div class="title">total clicks</div>
              <div class="stat-value-wrap">
                <div class="stat-value stat-value-click">
                  <span class="value-inner value-click">
                    25,697
                    <div class="growth-status decrease">
                      <span class="flaticon-right-down-2 icons growth-icon"></span>
                    </div>
                  </span>
                </div>
                <div class="icon-wrap icon-click">
                  <span class="flaticon-click icons stat-icon click"></span>
                </div>
              </div>
              <div class="desc">
                <span class="desc-value decrease">
                  30.4%
                  <span class="flaticon-right-down icons increase-icon"></span>
                </span> more that last week
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="stat-box">
              <div class="title">custom domain</div>
              <div class="stat-value-wrap">
                <div class="stat-value stat-value-domain">
                  <span class="value-inner value-domain">50</span>
                </div>
                <div class="icon-wrap icon-domain">
                  <span class="flaticon-world-wide-web icons stat-icon domain"></span>
                </div>
              </div>
              <div class="desc">5 of 100 custom domain added</div>
            </div>
          </div>
          <div class="col-3">
            <div class="stat-box">
              <div class="title">total pixels</div>
              <div class="stat-value-wrap">
                <div class="stat-value stat-value-pixel">
                  <span class="value-inner value-pixel">80</span>
                </div>
                <div class="icon-wrap icon-pixel">
                  <span class="flaticon-coding icons stat-icon pixel"></span>
                </div>
              </div>
              <div class="desc">
                <span class="desc-value increase">
                  30.4%
                  <span class="flaticon-arrow icons increase-icon"></span>
                </span> more that last week
              </div>
            </div>
          </div>
        </div>
        <div class="section-map mt-4">
          <div class="d-flex justify-content-between">
            <div class="title">Countries</div>
            <div class="toggle-list">
              <label class="mr-2">Switch to list view</label>
              <!-- Rounded switch -->
              <label class="switch to-list">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="map" ref="mapdiv"></div>
            </div>
            <div class="col-6">
              <div class="chart-sorted" ref="sortedDiv"></div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-4">
            <div class="chart-box">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <div class="title">Top Devices</div>
                  <div class="title">Click count per device</div>
                </div>
                <div class="toggle-list chart">
                  <label class="mr-2">Switch to list view</label>
                  <!-- Rounded switch -->
                  <label class="switch to-list chart">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="pie-chart" id="chart-device"></div>
            </div>
          </div>
           <div class="col-4">
            <div class="chart-box">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <div class="title">Top Browser</div>
                  <div class="title">Click count by browser</div>
                </div>
                <div class="toggle-list chart">
                  <label class="mr-2">Switch to list view</label>
                  <!-- Rounded switch -->
                  <label class="switch to-list chart">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="pie-chart" id="chart-browser"></div>
            </div>
          </div>
           <div class="col-4">
            <div class="chart-box">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <div class="title">Top Platform</div>
                  <div class="title">Click count by platform</div>
                </div>
                <div class="toggle-list chart">
                  <label class="mr-2">Switch to list view</label>
                  <!-- Rounded switch -->
                  <label class="switch to-list chart">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="pie-chart" id="chart-platform"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
// eslint-disable-next-line camelcase
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import * as am4charts from '@amcharts/amcharts4/charts';
// eslint-disable-next-line camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
export default {
  name: 'Dashboard',
  data() {
    return {};
  },
  mounted() {
    this.createMap();
    this.createSortedChart();
    this.createChart('chart-device', 'clicks', 85);
    this.createChart('chart-browser', 'clicks', 85);
    this.createChart('chart-platform', 'clicks', 85);
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    createSortedChart() {
      am4core.ready(() => {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        const chart = am4core.create(this.$refs.sortedDiv, am4charts.XYChart);
        chart.padding(20, 40, 40, 20);

        const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = 'country';
        categoryAxis.renderer.minGridDistance = 1;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = false;

        const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        const series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryY = 'country';
        series.dataFields.valueX = 'MAU';
        series.tooltipText = '{valueX.value}';
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;

        const labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.horizontalCenter = 'left';
        labelBullet.label.dx = 10;
        labelBullet.label.text =
          "{values.valueX.workingValue.formatNumber('#')}";
        labelBullet.locationX = 0;

        // as by default columns of the same series are of the same color,
        // we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add('fill', (fill, target) =>
          chart.colors.getIndex(target.dataItem.index),
        );

        categoryAxis.sortBySeries = series;
        chart.data = [
          {
            country: 'United States',
            MAU: 20,
          },
          {
            country: 'United Kingdom',
            MAU: 45,
          },
          {
            country: 'France',
            MAU: 100,
          },
          {
            country: 'Canada',
            MAU: 50,
          },
        ];
      }); // end am4core.ready()
    },
    animateBullet(circle) {
      const animation = circle.animate(
        [
          { property: 'scale', from: 1, to: 5 },
          { property: 'opacity', from: 1, to: 0 },
        ],
        1000,
        am4core.ease.circleOut,
      );
      animation.events.on('animationended', (event) => {
        this.animateBullet(event.target.object);
      });
    },
    createMap() {
      const chart = am4core.create(this.$refs.mapdiv, am4maps.MapChart);

      //  set amp definition
      // eslint-disable-next-line camelcase
      chart.geodata = am4geodata_worldLow;

      //  set proojection
      chart.projection = new am4maps.projections.Miller();

      //  create map polygon series
      const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antartica
      polygonSeries.exclude = ['AQ'];

      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;

      //  Connfigure series
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.polygon.fillOpacity = 0.6;

      //  Create hover state and set alternative fill color
      const hs = polygonTemplate.states.create('hover');
      hs.properties.fill = chart.colors.getIndex(0);

      //  Add image series
      const imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = 'longitude';
      imageSeries.mapImages.template.propertyFields.latitude = 'latitude';
      imageSeries.mapImages.template.tooltipText = '{title}';
      imageSeries.mapImages.template.propertyFields.url = 'url';

      const circle = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 3;
      circle.propertyFields.fill = 'color';

      const circle2 = imageSeries.mapImages.template.createChild(
        am4core.Circle,
      );
      circle2.radius = 3;
      circle2.propertyFields.fill = 'color';

      circle2.events.on('inited', (event) => {
        this.animateBullet(event.target);
      });

      const colorSet = new am4core.ColorSet();

      imageSeries.data = [
        {
          title: 'Brussels',
          latitude: 50.8371,
          longitude: 4.3676,
          color: colorSet.next(),
        },
        {
          title: 'Copenhagen',
          latitude: 55.6763,
          longitude: 12.5681,
          color: colorSet.next(),
        },
        {
          title: 'Paris',
          latitude: 48.8567,
          longitude: 2.351,
          color: colorSet.next(),
        },
        {
          title: 'Reykjavik',
          latitude: 64.1353,
          longitude: -21.8952,
          color: colorSet.next(),
        },
        {
          title: 'Moscow',
          latitude: 55.7558,
          longitude: 37.6176,
          color: colorSet.next(),
        },
        {
          title: 'Madrid',
          latitude: 40.4167,
          longitude: -3.7033,
          color: colorSet.next(),
        },
        {
          title: 'London',
          latitude: 51.5002,
          longitude: -0.1262,
          url: 'http://www.google.co.uk',
          color: colorSet.next(),
        },
        {
          title: 'Peking',
          latitude: 39.9056,
          longitude: 116.3958,
          color: colorSet.next(),
        },
        {
          title: 'New Delhi',
          latitude: 28.6353,
          longitude: 77.225,
          color: colorSet.next(),
        },
        {
          title: 'Tokyo',
          latitude: 35.6785,
          longitude: 139.6823,
          url: 'http://www.google.co.jp',
          color: colorSet.next(),
        },
        {
          title: 'Ankara',
          latitude: 39.9439,
          longitude: 32.856,
          color: colorSet.next(),
        },
        {
          title: 'Buenos Aires',
          latitude: -34.6118,
          longitude: -58.4173,
          color: colorSet.next(),
        },
        {
          title: 'Brasilia',
          latitude: -15.7801,
          longitude: -47.9292,
          color: colorSet.next(),
        },
        {
          title: 'Ottawa',
          latitude: 45.4235,
          longitude: -75.6979,
          color: colorSet.next(),
        },
        {
          title: 'Washington',
          latitude: 38.8921,
          longitude: -77.0241,
          color: colorSet.next(),
        },
        {
          title: 'Kinshasa',
          latitude: -4.3369,
          longitude: 15.3271,
          color: colorSet.next(),
        },
        {
          title: 'Cairo',
          latitude: 30.0571,
          longitude: 31.2272,
          color: colorSet.next(),
        },
        {
          title: 'Pretoria',
          latitude: -25.7463,
          longitude: 28.1876,
          color: colorSet.next(),
        },
      ];
    },
    createChart(elem, name, value) {
      am4core.ready(() => {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        const chart = am4core.create(elem, am4charts.PieChart);
        const empty = 100 - value;

        // Add data
        chart.data = [
          {
            country: name,
            value,
            color: am4core.color('#9e65cd'),
          },
          {
            country: 'empty',
            value: empty,
            color: am4core.color('#ffffff'),
          },
          //   },
          //   {
          //     country: 'Czechia',
          //     litres: 301.9,
          //   },
          //   {
          //     country: 'Ireland',
          //     litres: 201.1,
          //   },
          //   {
          //     country: 'Germany',
          //     litres: 165.8,
          //   },
          //   {
          //     country: 'Australia',
          //     litres: 139.9,
          //   },
          //   {
          //     country: 'Austria',
          //     litres: 128.3,
          //   },
          //   {
          //     country: 'UK',
          //     litres: 99,
          //   },
          //   {
          //     country: 'Belgium',
          //     litres: 60,
          //   },
          //   {
          //     country: 'The Netherlands',
          //     litres: 50,
          //   },
        ];

        // Add and configure Series
        const pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'value';
        pieSeries.dataFields.category = 'country';
        pieSeries.slices.template.stroke = am4core.color('#fff');
        pieSeries.slices.template.strokeWidth = 1;
        pieSeries.labels.template.wrap = true;
        pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        chart.radius = am4core.percent(70);
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template.propertyFields.fill = 'color';

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map,
.chart-sorted {
  height: 30vh;
}
.stat-box {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.9rem;
}

.stat-box .title {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
}

.stat-box .desc {
  margin-top: 0.7rem;
}
.stat-box .desc,
.desc .icons::before {
  font-size: 0.65rem;
}

.desc .icons {
  margin-right: 0.3rem;
}
.stat-box .desc .desc-value.increase {
  color: #47a750;
}

.stat-box .desc .desc-value.decrease {
  color: #f7412c;
}

.stat-box .stat-value-wrap {
  display: flex;
  margin-top: 0.8rem;
}

.stat-value {
  position: relative;
  flex-grow: 1;
}

.stat-value-wrap .icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.stat-value-wrap .icon-wrap.icon-link {
  background-color: #e7d1f4;
}

.stat-value-wrap .icon-wrap.icon-click {
  background-color: #fccccb;
}

.stat-value-wrap .icon-wrap.icon-domain {
  background-color: #e0eafe;
}

.stat-value-wrap .icon-wrap.icon-pixel {
  background-color: #d6eae0;
}

.stat-value-wrap .icon-wrap .stat-icon::before {
  font-size: 1rem;
  font-weight: 700;
}

.stat-value-wrap .icon-wrap .stat-icon.link::before {
  color: #9e65cd;
}

.stat-value-wrap .icon-wrap .stat-icon.click::before {
  color: #f7412c;
}

.stat-value-wrap .icon-wrap .stat-icon.domain::before {
  color: #72a0fc;
}

.stat-value-wrap .icon-wrap .stat-icon.pixel::before {
  color: #3b9966;
}

.stat-value .value-inner {
  position: relative;
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 1;
}

.growth-status {
  position: absolute;
  top: 0;
  left: 100%;
  width: 20px;
  justify-content: center;
  display: flex;
  height: 17px;
  align-items: center;
  margin-left: 0.2rem;
}

.growth-status.increase {
  background-color: #ccead6;
}

.growth-status.decrease {
  background-color: #fccccb;
}

.increase .growth-icon {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.2rem 0;
}
.growth-icon::before {
  font-size: 0.6rem;
  display: block;
}
.increase .growth-icon::before {
  color: #47a750;
}

.decrease .growth-icon::before {
  color: #f7412c;
}

.stat-value .value-inner::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  display: block;
  min-width: 104%;
  height: 8px;
  z-index: 1;
}

.stat-value .value-link::after {
  background-color: #e7d1f4ab;
}
.stat-value .value-click::after {
  background-color: #ffccccb8;
}

.stat-value .value-domain::after {
  background-color: #e0eafebf;
}

.stat-value .value-pixel::after {
  background-color: #d6eae0c4;
}

.stat-value::after {
  content: "";
  position: absolute;
  top: 101%;
  left: 0;
  display: block;
  min-width: 100%;
  height: 1.5px;
}

.stat-value.stat-value-link::after {
  background-color: #e7d1f4;
}

.stat-value.stat-value-click::after {
  background-color: #f7412c;
}

.stat-value.stat-value-domain::after {
  background-color: #72a0fc;
}

.stat-value.stat-value-pixel::after {
  background-color: #47a750;
}

.section-map {
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
}

.section-map .title {
  font-size: 0.9rem;
  font-weight: 700;
}

.toggle-list {
  display: flex;
  align-items: center;
}

.switch.to-list {
  width: 40px;
  height: 20px;
}

.to-list .slider::before {
  height: 25px;
  width: 25px;
  left: -1px;
  bottom: -2px;
  background-color: #000000;
}

input:checked + .slider:before {
  transform: translateX(18px);
  background-color: #2196f3 !important;
}

input:checked + .slider {
  background-color: #a9abae;
}

.toggle-list label {
  font-size: 0.9rem;
  font-weight: 700;
}

.chart-box {
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 1rem 1rem 0.5rem 1rem;
}
.chart-box .title:first-child {
    text-transform: capitalize;
}

.chart-box .title,.toggle-list.chart label  {
  font-size: 0.7rem;
  font-weight: 700;
}

.pie-chart {
  height: 180px;
}


.switch.to-list.chart {
  width: 30px;
  height: 15px;
}

.to-list.chart .slider::before {
  height: 19px;
  width: 19px;
}

.chart input:checked + .slider:before {
  transform: translateX(15px);
  background-color: #2196f3 !important;
}

input:checked + .slider {
  background-color: #a9abae;
}

</style>
