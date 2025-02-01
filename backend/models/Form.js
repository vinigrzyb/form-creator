import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    label: {type: String, required: true},
    type: {
        type: String,
        required: true,
        enum: {
            values: ['text', 'number', 'list'],
            message: 'Tipo de campo inválido: {value}'
        },
    },
    listOptions: {type: Array},
    required: {
        type: Boolean,
        default: false
    }
})

const formSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    fields: [fieldSchema],
}, { collection: 'forms' }, { versionKey: false })

const form = mongoose.model("Form", formSchema);

export default form;