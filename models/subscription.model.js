import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true , 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100 ,
    },

    price: {
        type:Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },

    currency: {
        type:String,
        enum: ['USD' ,'INR' ,'GBP' , 'EUR'],
        default: 'INR'
    },

    frequency: {
        type: String,
        enum: ['daily' ,'weekly','monthly','yearly'],
        required: true
    },

    category : {
        type:String,
        enum: ['sports' ,'technology' , 'lifestyle' ,'entertainment' ,'others'],
        required: true
    },

    paymentMethod: {
        type:String,
        required:true,
        trim:true
    },

    status: {
        type: String,
        enum: ['active' ,'cancelled' ,'expired'],
        default: 'active'
    },

    startDate: {
        type : Date,
        required :true,
        validate: {
            validator: (value) => value <= new Date(),
            message : 'Start date must be in the past'
        }
    },

    renewalDate: {
        type : Date,
        validate: {
            validator: function(value) {
                if (value) {
                    return value > this.startDate;
                }
                return true;
            },
            message : 'Renewal date must be after the start date'
        }
    },

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
} , { timestamps: true });

// AUTO CALCULATE THE RENEWAL DATE IF MISSING 
subscriptionSchema.pre('save' , function (next) {
    if (!this.renewalDate) {
        const startDate = new Date(this.startDate);
        const renewalDate = new Date(startDate);

        switch(this.frequency) {
            case 'daily':
                renewalDate.setDate(startDate.getDate() + 1);
                break;
            case 'weekly':
                renewalDate.setDate(startDate.getDate() + 7);
                break;
            case 'monthly':
                renewalDate.setMonth(startDate.getMonth() + 1);
                break;
            case 'yearly':
                renewalDate.setFullYear(startDate.getFullYear() + 1);
                break;
        }

        this.renewalDate = renewalDate;
    }

    // AUTO UPDATE THE STATUS IF RENEWAL DATE HAS PASSED 
    if (this.renewalDate < new Date()) {
        this.status = 'expired';
    }

    next();
});

const Subscription = mongoose.model('Subscription' , subscriptionSchema);

export default Subscription;