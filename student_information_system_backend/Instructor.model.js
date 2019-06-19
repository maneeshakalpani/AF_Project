const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Instructor=new Schema({

    staffid:{

        type:String

    },

    instructorname:{

        type:String

    },


    instuctorage:{


        type:String

    },
    instructorgender:{


        type:String

    },
    instuctoremail:{


        type:String

    }



});


module.exports=mongoose.model('Instructor',Instructor);