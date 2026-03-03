const Departamento= require('../models/departamento.model');

const crearDepartamento = async (data) => {
    return await Departamento.create(data);
};

const listarDepartamento = async () => {
    return await Departamento.findAll();
};

//Obtener por el ID 
const obtenerDepartamentoPorId = async (id) => {
    return await Departamento.findByPk(id);
}
//ACTUALIZAR
const actualizarDepartamento = async(id, data)=>{
    const departamento = await Departamento.findByPk(id);
    if(!departamento){
        return null;
    }
    await departamento.update(data);
    return departamento;
}

//Eliminar
const eliminarDepartamento = async(id)=>{
    const departamento = await Departamento.findByPk(id);
    if(!departamento){
        return null;
    }
    await departamento.destroy();
    return true;
}


module.exports = {
    crearDepartamento,
    listarDepartamento,
    obtenerDepartamentoPorId,
    actualizarDepartamento,
    eliminarDepartamento
};