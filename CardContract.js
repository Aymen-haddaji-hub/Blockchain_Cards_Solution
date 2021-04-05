'use strict';

const { Contract} = require('fabric-contract-api');

class Cars_Cards extends Contract {

async queryMarks(ctx,card_id) {

    let marksAsBytes = await ctx.stub.getState(card_id); 

    if (!marksAsBytes || marksAsBytes.toString().length <= 0) {

      throw new Error('Card with this Id does not exist: ');

       }

      let marks=JSON.parse(marksAsBytes.toString());
      return JSON.stringify(marks);

  }

async addMarks(ctx,card_id,subject1,subject2,subject3) {
   
   let marks={

       registration_number:subject1,

       first_reg_num:subject2,

       owner:subject3

       };

    await ctx.stub.putState(card_id,Buffer.from(JSON.stringify(marks))); 

    console.log('card value added To the ledger Succesfully..');
    
  }

async deleteMarks(ctx,card_id) {
   
    await ctx.stub.deleteState(card_id); 
    console.log('card value deleted from the ledger Succesfully..');

    }

   
}

module.exports=Cars_Card;