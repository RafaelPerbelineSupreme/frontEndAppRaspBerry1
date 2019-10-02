import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { conta } from 'src/app/services/conta-mestre.service';
import { usuarios } from 'src/app/services/usuarios.service';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonRadioGroup, {static: false}) radioGroup: IonRadioGroup

  usuarios: usuarios = {
    usuario: '',
    senha: '',
    nome: '',
    celular: '',
    email: '',
    cpf: '',
    vgaEspecial: '',
    plano: '',
    tipoUsuario: '',
    placaCarro: '',
    tipoVeiculo: '',
    modelo: '',
    chassi: '',
    proprietario: '',
    marca: '',
    cor: ''
  }

  conta: conta = {
    usuario: '',
    senha: '',
    nome: '',
    celular: '',
    email: '',
    cpf: '',
    tipoConta: ''
  }


  constructor() { }

  ngOnInit() {
  }

  logForm(form){
    console.log(form.value.usuario);
    console.log(form.value.senha);
    console.log(this.radioGroup.value);
    if(this.radioGroup.value === "CLI"){
      console.log("CLI")
    }
    else if(this.radioGroup.value === "ADM" || this.radioGroup.value === "GRT"){
      console.log("ADM || GRT")
    }
  }

}
