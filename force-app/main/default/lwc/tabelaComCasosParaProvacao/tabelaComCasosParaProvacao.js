import { LightningElement, wire, track } from 'lwc';
import getCases from '@salesforce/apex/CaseHandler.getCases';
import handleCaseApproval from '@salesforce/apex/CaseHandler.handleCaseApproval';
import { NavigationMixin } from 'lightning/navigation';

export default class TabelaComCasosParaProvacao extends LightningElement {
    @track cases = [];
    @track isModalOpen = false;
    @track selectedCase = {};

    columns = [
        {
            label: 'Número do Caso',
            fieldName: 'caseUrl',
            type: 'url',
            typeAttributes: {
                label: { fieldName: 'CaseNumber' },
                target: '_blank',
            },
        },
        { label: 'Descrição', fieldName: 'Description', type: 'text' },
        { label: 'Tipo', fieldName: 'ReclamationType__c', type: 'text' },
        { label: 'Valor', fieldName: 'TransactionValue__c', type: 'currency' },
        { 
            type: 'button', 
            typeAttributes: { 
                label: 'Tratar', 
                name: 'tratar', 
                variant: 'success' 
            } 
        }
    ];

    @wire(getCases)
    wiredCases({ error, data }) {
        if (data) {

            this.cases = data.map(c => ({
                ...c,
                caseUrl: `/lightning/r/Case/${c.Id}/view`, 
            }));
        } else if (error) {
            console.error('Erro ao buscar casos:', error);
        }
    }

    handleRowAction(event) {
        const caseId = event.detail.row.Id;
        this.selectedCase = this.cases.find(c => c.Id === caseId);
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
        this.selectedCase = {};
    }

    approveCase() {
        this.handleCase(true);
    }

    rejectCase() {
        this.handleCase(false);
    }

    handleCase(isApproved) {
        handleCaseApproval({ caseId: this.selectedCase.Id, isApproved })
            .then(() => {
                this.isModalOpen = false;
                this.cases = this.cases.filter(c => c.Id !== this.selectedCase.Id);
            })
            .catch(error => {
                console.error('Erro ao processar o caso:', error);
            });
    }
}
