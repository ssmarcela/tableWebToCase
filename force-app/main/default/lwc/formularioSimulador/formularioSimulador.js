import { LightningElement } from 'lwc';

export default class FormularioSimulador extends LightningElement {
    aparelho = '';
    potencia = 0;
    horas = 0;
    tarifa = '';
    tarifas = [
        { label: 'R$0,50', value: 'R$0,50' },
        { label: 'R$0,70', value: 'R$0,70' },
        { label: 'R$0,90', value: 'R$0,90' }
    ];

    resultado = null;

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    calcularEnergia() {
        const consumoMensal = (this.potencia * this.horas * 30) / 1000;
        let custoEstimado = 0;

        switch (this.tarifa) {
            case 'R$0,50':
                custoEstimado = consumoMensal * 0.50;
                break;
            case 'R$0,70':
                custoEstimado = consumoMensal * 0.70;
                break;
            case 'R$0,90':
                custoEstimado = consumoMensal * 0.90;
                break;
            default:
                custoEstimado = 0;
        }

        this.resultado = {
            consumoMensal: consumoMensal.toFixed(2),
            custoEstimado: custoEstimado.toFixed(2), 
        };
    }
}