import Form from '../models/Form.js'

class formController {

    static async getForms(req, res){
        try{
            const formsList = await Form.find({}); //sem parâmetros pra retornar todos
            res.status(200).json(formsList);
        }catch(e){
            res.status(500).send({message: e.message});
        }
    }

    static async getFormById(req, res){
        try{
            const form = await Form.findById(req.params.id);
            if(form){
                res.status(200).json(form);
            }else{
                res.status(404).send({message: "Formulário não encontrado"});
            }
        }catch(e){
            res.status(500).send({message: e.message});
        }
    }

    static async createForm(req, res){
        try{
            const newForm = new Form(req.body);
            const savedForm = await newForm.save();
            console.log(req.body);
            res.status(201).json({message: "criado com sucesso", form: newForm});
        }catch(e){
            res.status(500).send({message: `Erro ao criar form: ${e.message}`});
        }
    }

}

export default formController;