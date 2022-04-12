import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0

  pessoas = [
    {
      nome: 'João',
      sobrenome: 'Soares'
    },
    {
      nome: 'Marina',
      sobrenome: 'Silva'
    },
    {
      nome: 'Andréia',
      sobrenome: 'Pereira'
    },
    {
      nome: 'Lucas',
      sobrenome: 'Andrade'
    },
  ]

  constructor(){

  }

  ngOnInit(): void {
      let interval = setInterval(() => {
        this.count++
        if(this.count === 10){
          clearInterval(interval)
        }
      }, 1000)
  }
}
