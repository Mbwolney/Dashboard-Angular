import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardService } from "../dashboard.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
                               
export interface PeriodicElement {   
  manutencao: string;
  position: number;
  valor: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, manutencao: "Total R$ Manutenção", valor: 500 },
  { position: 2, manutencao: "Média R$ Manutenção", valor: 100 },
  { position: 3, manutencao: "Total Mecânica & Eletrica", valor: 100 },
  { position: 4, manutencao: "Média Mecânia & Eletrica", valor: 100 },
  { position: 5, manutencao: "Total Pneu", valor: 200 },
  { position: 6, manutencao: "Média Pneu", valor: 100 },
  { position: 7, manutencao: "Total Lubrificantes", valor: 200 },
  { position: 8, manutencao: "Média Lubrificantes", valor: 100 }
];

@Component({
  selector: "app-dashboards",
  templateUrl: "./dashboards.component.html",
  styleUrls: ["./dashboards.component.scss"]
})
export class DashboardsComponent implements OnInit {
  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ["position", "manutencao", "valor"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private DashboardService: DashboardService) {}

  ngOnInit() {
    this.bigChart = this.DashboardService.bigChart();
    this.cards = this.DashboardService.cards();
    this.pieChart = this.DashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
}
