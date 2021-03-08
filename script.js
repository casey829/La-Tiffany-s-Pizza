$(document).ready(function () {
    console.log("Content Loaded");
    // business log
    function Order(size, topping, crust) {
        this.Pizzasize = size;
        this.Pizzatopping = topping;
        this.Pizzacrust = crust;
        this.address = []
    }
    function Addresses(county, city, street) {
        this.county = county;
        this.city = city;
        this.street = street;
    }
    function OrderCost(sizeCost, toppingCost, crustCost, deliveryCost, totalCost) {
        this.sizeCost = sizeCost;
        this.toppingCost = toppingCost;
        this.crustCost = crustCost;
        this.deliveryCost = deliveryCost;
        this.totalCost = totalCost;

        totalCost = sizeCost + toppingCost + crustCost + deliveryCost;

        Order.prototype.fullOrder = function () {
            return "Pizza size: " + this.Pizzasize + " " + "Pizza Topping: " + this.Pizzatopping + " " + "Pizza Crust: " + this.Pizzacrust;
        };
        Addresses.prototype.fullAddress = function () {
            return this.street + ", " + this.city + ", " + this.county;
          }
          function resetFields() {
            $("input#county").val("");
            $("input#city").val("");
            $("input#street").val("");
        };
        $("#addOrder").click(function () {
            $("#pizzaOrder").append('neworder md-12'+
            ' <select class="form-control>'+
            '<option value="1">Small</option>'+
            '<option value="2">Medium</option>'+
            ' <option value="3">Large</option>'+
            '</select>'+
            '<label for="select" class="label">Choose topping(s) @ksh.70 each</label>'+
            '  <select class="form-control" id="1">'+' <option value="2">Hawaiian Pizza</option>'+'<option value="3">Veggie Pizza</option>'+'<option value="4">Pepperoni Pizza</option>'+'<option value="5">Meat Pizza</option>'+'<option value="6">Buffalo Pizza</option>'
            +'</select>'+'</div>'+'<label for="select" class="label">Choose topping(s) @ksh.70 each</label>'+''+''
            );

        });
        $('#addDelivery').click(function () {
            $("#newAddress").show();
        })
        $("form#orderForm").submit(function (event) {
            event.preventDefault();


        let inputtedPizzaSize = $("select.size").val();
        let inputtedPizzaTopping = $(".topping").val();
        let inputtedPizzaCrust = $("select.crust").val();
        let newOrder = new Order(inputtedPizzaSize, inputtedPizzaTopping, inputtedPizzaCrust);
        

        $("#new-address").each(function () {
            let inputtedCounty = $(this).find("input#county").val();
            let inputtedCity = $(this).find("input#city").val();
            let inputtedStreet = $(this).find("input#street").val();
            let newAddress = new Addresses(inputtedCounty, inputtedCity, inputtedStreet);
            newOrder.address.push(newAddress);
        })

        $("#checkoutBtn").click(function () {
            $("#orderCheckout").show();
            $(".size").text(Order.Pizzasize);
            $(".topping").text(Order.Pizzatopping);
            $(".crust").text(Order.Pizzacrust);
            $(".location").text(Addresses.fullAddress);
        });
    });
});