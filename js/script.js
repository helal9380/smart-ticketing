const allSeat = document.querySelectorAll('.seat-btn');

let sum = 0;
let increse = 40;
let allTotalPrice = 0;
const fourtySeatElement = document.getElementById('fourty-seat');
for(const seat of allSeat) {
    seat.addEventListener('click', function(e) {
        seat.disabled = true;
        const seatInnerText = seat.innerText;
        console.log(seatInnerText)
        setBackgroundColor(seatInnerText);
        sum++;
        
        // seat count
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText = sum;
        if(sum >= 4) {
            const allSeat = document.querySelectorAll('.seat-btn');
            for(const dis of allSeat) {
                dis.disabled = true;
                dis.classList.add('cursor-not-allowed');
                const applyBtn = document.getElementById('apply-btn');
                applyBtn.disabled = false;
            }
            seat.disabled = true;

        }
        const phoneNumber = document.getElementById('phone-number');
        const model = document.getElementById('modal-btn');
        phoneNumber.addEventListener('keyup', function(e) {
            if(e.target.value.length === 11) {
                model.classList.remove('btn-disabled');
                const digite = document.getElementById('11-digite');
                digite.classList.add('hidden')
            }
            else {
                model.classList.add('btn-disabled');
                const digite = document.getElementById('11-digite');
                digite.innerText = 'please 11 digits';
                digite.classList.remove('hidden')
            }
                
        })
       
        
        increse -= 1;
        fourtySeatElement.innerText = increse;

        const appentTr = document.getElementById('appent-tr');
        const td = document.createElement('td');
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerText = 'Economoy';
        td3.innerText = 550;
        td.innerText = seatInnerText
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td3)
        appentTr.appendChild(tr)

        const td3InnerText = td3.innerText;
        const td3Aount = parseInt(td3InnerText);
        allTotalPrice += td3Aount;
        const totalPriceElement = document.getElementById('total-price');
     
        totalPriceElement.innerText = allTotalPrice;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = allTotalPrice;
    })
}

// count fucntion

function setBackgroundColor(element) {
    const boxelement = document.getElementById(element);
    const parent = boxelement;
    parent.classList.remove('bg-[#F7F8F8]')
    parent.classList.add('bg-[#1DD100]');
    parent.classList.add('text-white');
    parent.classList.add('selected')
}

document.getElementById('apply-btn').addEventListener('click', function() {
    const couponInput =document.getElementById('coupon-input').value;
    if(couponInput === 'NEW15') {
        const totalPriceElement = document.getElementById('total-price').innerText;
        const totalPrice = parseInt(totalPriceElement);
        
        const grandTotalElement = document.getElementById('grand-total');
        
        const h4 = document.createElement('h4');
        const discountBox = document.getElementById('discount-box');
        const h44 = document.createElement('h4');
        const discountPrice = totalPrice / 100 * 15;
        const updateGrandTotal = totalPrice - discountPrice;
        grandTotalElement.innerText = updateGrandTotal;
        h4.innerText = 'Discount :';
        h44.innerText = discountPrice
        discountBox.appendChild(h4)
        discountBox.appendChild(h44)
        console.log(discountPrice)
        const btnHidden = document.getElementById('hide-box');
        btnHidden.classList.add('hidden');
        couponInput.value = '';
    }
    else if(couponInput === 'Couple 20') {
        const totalPriceElement = document.getElementById('total-price').innerText;
        const totalPrice = parseInt(totalPriceElement);
        
        const grandTotalElement = document.getElementById('grand-total');
        
        const h4 = document.createElement('h4');
        const discountBox = document.getElementById('discount-box');
        const h44 = document.createElement('h4');
        const discountPrice = totalPrice * 0.2;
        const updateGrandTotal = totalPrice - discountPrice;
        grandTotalElement.innerText = updateGrandTotal;
        h4.innerText = 'Discount :';
        h44.innerText = discountPrice
        discountBox.appendChild(h4)
        discountBox.appendChild(h44)
        const btnHidden = document.getElementById('hide-box');
        btnHidden.classList.add('hidden');
        couponInput.value = '';
    }
    else {
        alert('invalid coupon');
        const couponInput =document.getElementById('coupon-input');
        couponInput.value = '';
    }
})

document.getElementById('continue').addEventListener('click', function() {
    location.reload();
})