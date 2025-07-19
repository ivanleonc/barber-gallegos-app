import Services from '../models/Services.js'
import { validateObjectId, handleNotFoundError } from '../utils/index.js'

const createService = async (req, res) => {
    if (Object.values(req.body).includes('')) {

        const error = new Error('All fields are required')

        return res.status(400).json({
            msg: error.message
        })
    }
    try {
        const service = new Services(req.body)
        await service.save()
        res.json({
            msg: 'Service created successfully'
        })

    } catch (error) {
        console.log(error)
    }
}

const getServices = async (req, res) => {
    try {
        const services = await Services.find()
        res.json(services)
    }catch(error){
        console.log(error)
    }
}

const getServiceById = async (req, res) => {
    const { id } = req.params

    // Valid a objetc id
    if (validateObjectId(id, res)) return

    // Valid exist
    const service = await Services.findById(id)
    if (!service) {
        return handleNotFoundError('The service does not exist', res)
    }

    // Show service 
    res.json(service)
}

const updateService = async (req, res) => {
    const { id } = req.params

    // Valid a objetc id
    if (validateObjectId(id, res)) return

    // Valid exist
    const service = await Services.findById(id)
    if (!service) {
        return handleNotFoundError('The service does not exist', res)
    }

    // Writing in the object the values news
    service.name = req.body.name || service.name
    service.price = req.body.price || service.price

    try {
        await service.save()
        res.json({
            msg: 'Service updated successfully'
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteService = async (req, res) => {
    const { id } = req.params

    // Valid a objetc id
    if (validateObjectId(id, res)) return

    // Valid exist
    const service = await Services.findById(id)
    if (!service) {
        return handleNotFoundError('The service does not exist', res)
    }

    try {
        await service.deleteOne()
        res.json({
            msg: 'Service deleted successfully'
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService
}