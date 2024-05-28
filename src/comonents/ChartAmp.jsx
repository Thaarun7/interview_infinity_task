import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { data } from '../Data/data';

function ChartAmp() {
    const chartRef = useRef(null);

    useEffect(() => {
      // Create root element
      const root = am5.Root.new(chartRef.current);
  
      // Set themes
      root.setThemes([am5themes_Animated.new(root)]);
  
      root.dateFormatter.setAll({
        dateFormat: "yyyy",
        dateFields: ["valueX"]
      });
  
  
      // Create chart
      const chart = root.container.children.push(am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0
      }));
  
      const easing = am5.ease.linear;
  
      // Create axes
      const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 70
        }),
        tooltip: am5.Tooltip.new(root, {})
      }));
  
      const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));
  
      // Add series
      const series = chart.series.push(am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        connect: false,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      }));
  
      series.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true
      });
  
      series.strokes.template.setAll({
        strokeWidth: 2
      });
  
      // Set up data processor to parse string dates
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"]
      });
  
      series.data.setAll(data);
  
      series.bullets.push(function() {
        const circle = am5.Circle.new(root, {
          radius: 4,
          fill: root.interfaceColors.get("background"),
          stroke: series.get("fill"),
          strokeWidth: 2
        });
  
        return am5.Bullet.new(root, {
          sprite: circle
        });
      });
  
      // Add cursor
      const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        behavior: "none"
      }));
      cursor.lineY.set("visible", false);
  
      // Add scrollbar
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
  
      // Make stuff animate on load
      chart.appear(1000, 100);
  
      // Cleanup function to dispose chart instance
      return () => {
        root.dispose();
      };
    }, []);
  return (
    <div className='col-md-12 col-xl-8'>
      <div className='card sale-card'>
        <div className='card-header'>
          <h5>Deals Analyticssss</h5>
        </div>
        <div className='card-block'>
          <div
            id='sales-analytics'
            ref={chartRef}
            className='chart-shadow'
            style={{
              height: 380,
              overflow: "hidden",
              textAlign: "left",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ChartAmp;
