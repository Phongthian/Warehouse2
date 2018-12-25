import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  public arraytoPassChart = [];
  
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { 

    this.db.list('/AddDataWarehouse/').valueChanges().pipe(map(res => {
      return res.map(NumberBottls => NumberBottls)
    })).subscribe(res => {
      console.log(res)
      this.arraytoPassChart.push(res)
      this.creatChart();
    });

  }

  creatChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["น้ำแดง", "น้ำเปล่า", "น้ำส้ม", "นม", "น้ำโค้ก"],
        datasets: [{
          data: ["15", "17", "10", "12", "16"],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
            text: 'ธันวาคม'
        },
        legend:{
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }   
   

}

