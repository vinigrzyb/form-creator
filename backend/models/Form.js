import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    label: {type: String, required: true},
    type: {type: String, required: true},
})

const formSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    fields: [fieldSchema]
}, { collection: 'forms' }, { versionKey: false })

const form = mongoose.model("Form", formSchema);

export default form;