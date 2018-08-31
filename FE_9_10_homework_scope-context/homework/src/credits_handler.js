
const getCurrentTime = () => new Date().toLocaleString('en-GB');

const userCard = (key) => {
    let maxKey = 3;
    if(key < 1 || key > maxKey) {
        
        return console.log('Error: Not correct Card key');
    }
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    return {
        getCardOptions: function() {
        
            return {
                balance,
                transactionLimit,
                historyLogs,
                key
            }
        },
        putCredits: function(creditAmount) {
            balance += creditAmount;
            historyLogs.push({
                operationType: 'Received credits',
                credits: creditAmount,
                operationTime: getCurrentTime()
            });
        },
        takeCredits: function(creditAmount) {
            balance -= creditAmount;
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: creditAmount,
                operationTime: getCurrentTime()
            });
        },
        setTransactionLimit: function(creditAmount) {
            transactionLimit = creditAmount;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: creditAmount,
                operationTime: getCurrentTime()
            });
        },
        transferCredits: function(creditAmount, recipientCard) {
            const taxAmount = 0.005;
            let creditAmountWithTax = creditAmount + creditAmount * taxAmount;

            if(creditAmountWithTax < balance && transactionLimit > creditAmountWithTax) {
                this.takeCredits(creditAmountWithTax);
                recipientCard.putCredits(creditAmount);
            } else {
                console.log('Error: Please check your balance or transaction limit.');
            }
        }

    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        let cardMaximum = 3;
        if(this.cards.length > cardMaximum) {
            console.log('Error: Your limit of entered cards has been exceeded');
        } else {
            const newUserCard = userCard(this.cards.length + 1);
            this.cards.push(newUserCard);
        }
    }

    getCardByKey(key) {

    return this.cards[key - 1];
  }
}