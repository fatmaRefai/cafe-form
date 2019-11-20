var coffeeTypesAvailable = [
    {
        name: 'Turkish Coffee',
        price: 3
    },
    {
        name:'American Coffee',
        price: 5
    },
    {
        name: 'Iced Latte',
        price: 7
    }
]

var ExtrasAvailable = [
    {
        name: 'Extra Coffee',
        price: 1.5
    },
    {
        name: 'Whipped Cream',
        price: 2
    },
    {
        name: 'Extra Caramel',
        price: 3
    }
]

class coffeeOrder {
    constructor(customerName,coffeeTypeIndex, ExtrasIndices) {
        this.customerName = customerName;
        this.coffeeTypeIndex = coffeeTypeIndex;
        this.ExtrasIndices = ExtrasIndices;
    }

    getCustomerName() {
        return 'Hello ' + this.customerName + '! ';
    }

    getCoffeeType() {
        return 'You ordered ' + coffeeTypesAvailable[this.coffeeTypeIndex].name + ' that costs ' + coffeeTypesAvailable[this.coffeeTypeIndex].price + '$';
    }

    getCoffeeExtras() {

        if(this.ExtrasIndices.length == 0)
            return ' with no extras';
        else{
            var finalExtrasString = ' with ';
            for(var i = 0; i < this.ExtrasIndices.length; i++){
                finalExtrasString += (ExtrasAvailable[this.ExtrasIndices[i]].name + ' that costs ' + ExtrasAvailable[this.ExtrasIndices[i]].price + '$');

                if(i < this.ExtrasIndices.length - 1)
                    finalExtrasString += ' and ';
            }
        }

        return finalExtrasString;
    }

    calculateTotalPrice() {

        var totalPrice = 0;
        totalPrice += coffeeTypesAvailable[this.coffeeTypeIndex].price;
        for(var i = 0; i < this.ExtrasIndices.length; i++)
            totalPrice += ExtrasAvailable[this.ExtrasIndices[i]].price;

        return 'Your total order costs: ' + totalPrice + '$';

    }

    constructReceipt() {
        $('#receipt').append(this.getCustomerName());
        $('#receipt').append(this.getCoffeeType());
        $('#receipt').append(this.getCoffeeExtras());
        $('#receipt').append('<br>');
        $('#receipt').append(this.calculateTotalPrice());
        $('#receipt').append('<br>');
    }

}



$(document).ready(function () {

    $("button").click(function () {
        var newCoffeeOrder, customerName,coffeeTypeIndex, ExtrasIndices = [];

        customerName = $("#customerName").val();
        console.log(customerName);

        coffeeTypeIndex = $("input[name='coffeeType']").index($("input[name='coffeeType']:checked"));

        $.each($("input[name='extra']:checked"), function (index) {
            ExtrasIndices.push(index);
        });

        newCoffeeOrder = new coffeeOrder(customerName,coffeeTypeIndex, ExtrasIndices);
        newCoffeeOrder.constructReceipt();
        
    });

    

});

