import React from 'react';

function OrderList(props) {


    // fetch order

    const orderlist = [

        {
            tracking_number: '103-7845645',
            address:'20W 34th St New York, NY, 10001, United States',
            receipt: 'James Smith',
            receipt_phone_number: '123-123-1231',
            status:'Delivering',
            delivered_time: 'March 10'
        },
        {
            tracking_number: '103-7845645',
            address:'20W 34th St New York, NY, 10001, United States',
            receipt: 'James Smith',
            receipt_phone_number: '123-123-1231',
            status:'Delivering',
            delivered_time: 'March 10'
        },
        {
            tracking_number: '103-7845645',
            address:'20W 34th St New York, NY, 10001, United States',
            receipt: 'James Smith',
            receipt_phone_number: '123-123-1231',
            status:'Delivering',
            delivered_time: 'March 10'
        },
        {
            tracking_number: '103-7845645',
            address:'20W 34th St New York, NY, 10001, United States',
            receipt: 'James Smith',
            receipt_phone_number: '123-123-1231',
            status:'Delivering',
            delivered_time: 'March 10'
        },

    ]
    return (
        <div>
            OrderList
        </div>
    );
}

export default OrderList;