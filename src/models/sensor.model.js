import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },

    sensor_luminosity: Number,
    proximity_sensor:Number,
    temperature_sensor: Number,
    actuator_led:String
},{
    versionKey:false
})

const SensorModel = mongoose.model("Sensor",sensorSchema);

export default SensorModel