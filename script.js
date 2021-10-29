var days = [
{
    "friday": {
        "delivery": {
            "availability": true,
            "timings": [
                {
                    "close": "12:00",
                    "open": "11:00"
                },
                {
                    "close": "15:00",
                    "open": "14:00"
                }
            ]
        },
        "shop": {
            "availability": true,
            "timings": [
                {
                    "close": "22:00",
                    "open": "11:00"
                }
            ]
        },
        "updated_at": "2021-10-27 03:08:49",
        "is_same": false
    },
    "monday": {
        "delivery": {
            "availability": false,
            "timings": [
                {
                    "close": "14:00",
                    "open": "10:00"
                },
                {
                    "close": "22:00",
                    "open": "18:00"
                }
            ]
        },
        "shop": {
            "availability": true,
            "timings": [
                {
                    "close": "14:00",
                    "open": "10:00"
                },
                {
                    "close": "22:00",
                    "open": "18:00"
                }
            ]
        },
        "updated_at": "2021-08-08 19:24:45",
        "is_same": false
    },
    "saturday": {
        "delivery": {
            "availability": true,
            "timings": [
                {
                    "close": "22:00",
                    "open": "13:00"
                }
            ]
        },
        "shop": {
            "availability": true,
            "timings": [
                {
                    "close": "22:00",
                    "open": "13:00"
                }
            ]
        },
        "is_same": true
    },
    "sunday": {
        "delivery": {
            "availability": true,
            "timings": [
                {
                    "close": "22:00",
                    "open": "13:00"
                }
            ]
        },
        "shop": {
            "availability": true,
            "timings": [
                {
                    "close": "22:00",
                    "open": "13:00"
                }
            ]
        },
        "is_same": true
    },
    "thursday": {
        "delivery": {
            "availability": false,
            "timings": [
                {
                    "close": "22:00",
                    "open": "11:00"
                }
            ]
        },
        "shop": {
            "availability": false,
            "timings": [
                {
                    "close": "22:00",
                    "open": "11:00"
                }
            ]
        },
        "updated_at": "2021-08-08 14:54:54",
        "is_same": true
    },
    "tuesday": {
        "delivery": {
            "availability": true,
            "timings": [
                {
                    "close": "23:36",
                    "open": "22:36"
                }
            ]
        },
        "shop": {
            "availability": true,
            "timings": [
                {
                    "close": "23:36",
                    "open": "22:36"
                }
            ]
        },
        "updated_at": "2021-08-08 14:52:26",
        "is_same": true
    },
    "wednesday": {
        "delivery": {
            "availability": false,
            "timings": []
        },
        "shop": {
            "availability": true,
            "timings": [
                {
                    "close": "22:00",
                    "open": "11:58"
                }
            ]
        },
        "updated_at": "2021-08-08 14:27:17",
        "is_same": false
    }
}
]

function breakchange(id){
    btnObj = document.getElementById(id);
    if (btnObj.className=='btn btn-primary breakbutton'){
        btnObj.innerText = "- Break";
        btnObj.className = 'btn btn-secondary breakbutton';
        console.log("yes")
    }
    else{
        btnObj.className = 'btn btn-primary breakbutton';
        btnObj.innerText = "+ Break";
        console.log("no")
    }
}


console.log(Object.keys(days[0])[0]+ "<br>")
console.log(Object.keys(days[0].friday)+ "<br>")
console.log(Object.keys(days[0].friday.delivery)+ "<br>")
console.log((days[0].friday.delivery.availability)+ "<br>")
console.log(Object.keys(days[0].friday.delivery.timings[0])+ "<br>")
console.log(Object.values(days[0].friday.delivery.timings[0])+ "<br>")
console.log(Object.values(days[0].friday.delivery.timings[1])+ "<br>")
console.log(Object.keys(days[0].friday.shop)+ "<br>")
console.log(Object.keys(days[0].friday.shop.timings[0])+ "<br>")
console.log(Object.values(days[0].friday.shop.timings[0])+ "<br>")

var arrayVariable = Object.keys(days[0]);
var arrayLength = arrayVariable.length;
var temp;

for (i = 0; i < arrayLength; i++) {
      // creating vertical divisions//
        temp = document.createElement('div');
        temp.className = 'days';
        // temp.innerHTML = arrayVariable[i];
        // temp.innerHTML = document.createElement('div')
        firstRow = document.createElement('div');
        firstRow.className = 'row mt-2';
        namecolumn = document.createElement('div');
        namecolumn.className = 'col-3';
        secondColumn = document.createElement('div');
        secondColumn.className = 'col-6';
        thirdColumn = document.createElement('div');
        thirdColumn.className = 'col-3';
        
        
        
        var heading = document.createElement('h1');
        // heading.innerText = "Monday";
        var dayName = Object.keys(days[0])[i];
        heading.innerText = Object.keys(days[0])[i];
        temp.appendChild(firstRow)
        firstRow.appendChild(namecolumn)
        firstRow.appendChild(secondColumn)
        firstRow.appendChild(thirdColumn)
        namecolumn.appendChild(heading)
        
            innerRow = document.createElement('div');
            innerRow.className = 'row mt-2';
            innerRow2 = document.createElement('div');
            innerRow2.className = 'row mt-2';
            secondColumn.appendChild(innerRow);
            secondColumn.appendChild(innerRow2);
            innerRow_col3 = document.createElement('div');
            innerRow_col3.className = 'row mt-2';
            thirdColumn.appendChild(innerRow_col3);
            // console.log(Object.keys(days[0])[i]);
            var dayName_str = Object.keys(days[0])[i]
            var day_object = days[0][dayName_str];
            var day_delivery = day_object.delivery;
            // var delivery_timings = Object.values(day_object.delivery.timings[])
            
            var day_shop = day_object.shop;
            // console.log(delivery_timings)
            var availability_value = day_object.delivery.availability;
            // console.log(availability_value)
            var delivery_timings_values = Object.values(day_object.delivery.timings);
            var delivery_timings_list = [];
            for (k=0;k<day_object.delivery.timings.length;k++){
                var delivery_timings_list_length = (Object.values(delivery_timings_values[k])).length
                for (l=0;l<delivery_timings_list_length;l++)
                    delivery_timings_list.push(Object.values(delivery_timings_values[k])[l])
                    console.log(Object.values(delivery_timings_values[k]))
            }

            console.log("deliverytimings "+(delivery_timings_list))
            
            if (day_object.delivery.timings.length==0){
                emptyRow = document.createElement('div')
                emptyRow.className = 'emptyRow';
                innerRow.appendChild(emptyRow)
            }

            // inside the div//
            for (j=0;j<day_object.delivery.timings.length*2;j++){
                
                
                buttonCols = document.createElement('div');
                buttonCols.className = 'col-2';
                insertButton = document.createElement('div');
                insertButton.className = 'input-group input-group-sm mb-3';
                inputField = document.createElement('input')
                inputField.className = 'form-control';
                inputField.type = 'text';
                innerRow.appendChild(buttonCols)
                buttonCols.appendChild(insertButton)
                insertButton.appendChild(inputField)
                inputField.value = delivery_timings_list[j];

                
            }

            breakButtonCase = document.createElement('div');
            breakButton = document.createElement('button');
            

            if (day_object.delivery.timings.length<=1){
                
                breakButtonCase.className = 'btn-group col-4 ';
                breakButton.className = 'btn btn-primary breakbutton';
                breakButton.innerText = "+ Break";

            }
            else if (day_object.delivery.timings.length==2){
                breakButtonCase.className = 'btn-group col-4';
                breakButton.className = 'btn btn-secondary breakbutton';
                breakButton.innerText = "- Break";
            }
            

            breakButton.setAttribute('onClick','breakchange(id)');



            innerRow_col3.appendChild(breakButtonCase)
            breakButtonCase.appendChild(breakButton)
            breakButton.id = "btn-"+i;

            toggleBreakColumn = document.createElement('div');
            toggleBreakSwitch = document.createElement('div');
            toggleBreak = document.createElement('input');
            toggleBreakColumn.className = 'col-2';
            toggleBreakSwitch.className = 'form-check form-switch';
            toggleBreak.className = 'form-check-input';
            toggleBreak.type = 'checkbox';
            toggleBreak.role = 'switch';
            // toggleBreak.setAttribute("checked")
            if (availability_value==true){
                toggleBreak.checked = true
            }
            else{
                toggleBreak.checked = false
                // toggle.id = 'flexSwitchCheckDisabled'
            }
            
            innerRow_col3.appendChild(toggleBreakColumn)
            toggleBreakColumn.appendChild(toggleBreakSwitch)
            toggleBreakSwitch.appendChild(toggleBreak)

            innerRow_col3_2 = document.createElement('div');
            innerRow_col3_2.className = 'row under mt-2';
            thirdColumn.appendChild(innerRow_col3_2);

            var shop_timings_values = Object.values(day_object.shop.timings);
            var shop_timings_list = [];
            for (k=0;k<day_object.shop.timings.length;k++){
                var shop_timings_list_length = (Object.values(shop_timings_values[k])).length
                for (l=0;l<shop_timings_list_length;l++)
                    shop_timings_list.push(Object.values(shop_timings_values[k])[l])
                    console.log(Object.values(shop_timings_values[k]))
            }

            console.log("shoptimings "+(shop_timings_list))




            for (j=0;j<day_object.shop.timings.length*2;j++){
                if(day_object.shop.timings.length==0){
                    break;
                }
                buttonCols = document.createElement('div');
                buttonCols.className = 'col-2';
                insertButton = document.createElement('div');
                insertButton.className = 'input-group input-group-sm mb-3';
                inputField = document.createElement('input')
                inputField.className = 'form-control';
                inputField.type = 'text';
                innerRow2.appendChild(buttonCols)
                buttonCols.appendChild(insertButton)
                insertButton.appendChild(inputField)
                inputField.value = shop_timings_list[j]
            }
            deliveryButtonCase = document.createElement('div');
            deliveryButtonCase.className = 'btn-group col-3';
            deliveryButton = document.createElement('button');
            deliveryButton.className = 'btn btn-primary deliverybutton';
            deliveryButton.innerText = "Delivery";
            innerRow_col3_2.appendChild(deliveryButtonCase)
            deliveryButtonCase.appendChild(deliveryButton)

            var del_availability_value = day_object.shop.availability

            toggleDeliveryColumn = document.createElement('div');
            toggleDeliverySwitch = document.createElement('div');
            toggleDelivery = document.createElement('input');
            toggleDeliveryColumn.className = 'col-2';
            toggleDeliverySwitch.className = 'form-check form-switch';
            toggleDelivery.className = 'form-check-input';
            toggleDelivery.type = 'checkbox';
            toggleDelivery.role = 'switch';
            toggleDelivery.id = 'flexSwitchCheckChecked';
            innerRow_col3_2.appendChild(toggleDeliveryColumn)
            toggleDeliveryColumn.appendChild(toggleDeliverySwitch)
            toggleDeliverySwitch.appendChild(toggleDelivery)

            if (del_availability_value==true){
                toggleDelivery.checked = true
            }
            else{
                toggleDelivery.checked = false
                // toggle.id = 'flexSwitchCheckDisabled'
            }

        
        document.getElementsByTagName('body')[0].appendChild(temp);
  
}
