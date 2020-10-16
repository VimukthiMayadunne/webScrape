const fs = require("fs");


async function creatContract(car,buyer){
    return new Promise(async function(resolve, reject) {
        try{
        let rest = 50000 ;
        let fileName = car.model
        fileName = fileName.replace(/[\W_]+/g," ");
        let str =            
`CONTRACT FOR SELLING A CAR 

    BUYER Details Name: ${buyer.name} 
    Address: ${buyer.addres} 
    Phone Number: ${buyer.contact} 
    SELLER Details 
    Name: ${car.owner.name} 
    Address: ${car.owner.addres}
    Phone Number:  ${car.owner.contact}

VEHICLE DETAILS: 
Upon the receipt of payment in full, the Seller agrees to transfer to the Buyer ownership 
(registration and/or title) of the following motor vehicle:
    Make  of Vehicle: ${car.make}
    Model of Vehicle: ${car.model} 
    Year of Vehicle:  ${car.year} 
    Engine Capacity: ${car.cc} 

MILEAGE: 
To the Seller's best knowledge, the current mileage is accurate and correct. 
    Odometer reading on (${car.dos}): ${car.milage}

PAYMENT INFORMATION: 
    Purchase Price of Vehicle:  ${car.price}
    Date of Transaction: ${buyer.dot}
The Buyer will pay the Seller the purchase price in full by cash, guaranteed check, money order, 
or other method of payment agreed upon by both parties. (Specify if not listed above)__________.

HOLDING DEPOSIT: 
The Seller acknowledges that a holding deposit of ${buyer.deposit} (amount) was received from   
the Buyer on ${buyer.dod} (date).The Buyer will pay the remaining balance in the sum of ${rest}(amount) 
by  ${buyer.dot} (date).

Both parties agree that should the Buyer fail to pay the remaining balance of the agreed upon 
purchase price by the specified date, the Buyer will have no further claims or rights to the 
above mentioned vehicle unless otherwise indicated by the Seller. If payment is not received 
by the agreed upon date, the Seller will have no further obligations and the terms of this 
agreement will be null and void.   

SELLER'S RESPONSIBILITES: 
On the date of sale, the Seller promises to provide the Buyer with the vehicle title, registration,
odometer reading (or odometer disclosure statement where applicable), and any other pertinent
documents or agreed upon paperwork (specify) _________________________ 
“The Buyer acknowledges that all the above mentioned paperwork and/or documentation was received
from the Seller.    Yes/No.” “AS IS”

DISCLAIMER: 
Both parties acknowledge that the above mentioned vehicle is sold as seen, that the buyer has 
tried and inspected the vehicle to his/her satisfaction and has approved the purchase with the
understanding that the vehicle is sold “AS IS” without warranties or guarantees, either 
expressed or implied.   
The Buyer accepts full responsibility for any repairs incurred following ____________________ (date of sale),
as well as any costs related to vehicle registration, safety certification, or transfer of ownership. 
All risks and responsibilities pass to the Buyer once payment is made in full and the Buyer takes possession
of the vehicle.

SIGNATURES: 
Both parties agree to the terms specified above and signify the completion of this transaction
by their signatures.

Buyer's Signature ____________________    
Date _______________________

Seller's Signature _____________________ 
Date ________________ `
        
        const dirpath= '/home/vimukthi/cotracts'
        var prom=fs.mkdir(dirpath, { recursive: true }, (err) => {
            if (err)
                throw err;
        });
        fs.writeFile('/home/vimukthi/cotracts/'+fileName+'.txt', str, (err) => {
            if (err) {
            console.error(err);
            return reject(err);
            }
            console.log("File Created!");
            resolve(str);
        });
        }
        catch(err){
            console.error(err)
            return reject(err)
        }
    });
}

module.exports = {creatContract}