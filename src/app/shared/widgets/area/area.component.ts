import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-widget-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"]
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "column"
      },
      title: {
        text: "Controle de Frota"
      },
      subtitle: {
        text: null
      },
      xAxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          //Aqui que escreve na Borda Lateral, do Controle de Frota
          text: null
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: "KM",
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4
          ]
        },
        {
          name: "Consumo",
          data: [
            83.6,
            78.8,
            98.5,
            93.4,
            106.0,
            84.5,
            105.0,
            104.3,
            91.2,
            83.5,
            106.6,
            92.3
          ]
        },
        {
          name: "Manutenção",
          data: [
            48.9,
            38.8,
            39.3,
            41.4,
            47.0,
            48.3,
            59.0,
            59.6,
            52.4,
            65.2,
            59.3,
            51.2
          ]
        },
        {
          name: "Custo",
          data: [
            42.4,
            33.2,
            34.5,
            39.7,
            52.6,
            75.5,
            57.4,
            60.4,
            47.6,
            39.1,
            46.8,
            51.1
          ]
        }
      ]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
