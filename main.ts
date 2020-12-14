/**
 * AIMaker STEM Sensors
 */
//% color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
//% groups=['Sound','Ambient Light Sensor','Flame Sensor', 'Soil Moisture D19A','Soil Moisture Sensor','Reflective Infrared Sensor','others']
namespace aimakeranalogsensors
{
/**
 * AIMaker STEM Sensors
 */
// color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
// groups=['Sound','Ambient Light Sensor','Flame Sensor','Soil Moisture D19A', 'Soil Moisture Sensor','Reflective Infrared Sensor','others']

    //% group="Sound"
    export namespace AnalogSound {
        //% blockId=soundValue block="Read sound value at pin=%p"
        //% group="Sound"
        export function soundValue(p: AnalogPin): number {
            return pins.analogReadPin(p)
        }
    };

    //% group="Ambient Light Sensor"
    export namespace AmbientLight {
        //% blockId=lightValue block="Read light value at pin=%p"
        //% group="Ambient Light Sensor"
        export function lightValue(p: AnalogPin): number {
            return (1024-pins.analogReadPin(p));
        }
    };

    //% group="Flame Sensor"
    export namespace Flame {
        //% blockId=flameValue block="Read flame value at pin=%p"
        //% group="Flame Sensor"
        export function flameValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isFlame block="When flame exists at pin=%p"
        //% group="Flame Sensor"
        export function isFlame(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };
        
    //% group="Soil Moisture D19A"
    export namespace MoistureD19A {
        //% blockId=moistureD19AValue block="Read moisture(D19A) value at pin=%p"
        //% group="Soil Moisture D19A"
        export function moistureD19AValue(p: AnalogPin): number {
            let v = analogReadPin(p);
            v = v*100/1024;
            v = 100 - v;
            return ((int)v);
        }
    };
        
    //% group="Soil Moisture Sensor"
    export namespace Moisture {
        //% blockId=moistureValue block="Read moisture value at pin=%p"
        //% group="Soil Moisture Sensor"
        export function moistureValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }
    };

    //% group="Reflective Infrared Sensor"
    export namespace LaserDistance {
        //% blockId=trackerValue block="Read tracker value at pin=%p"
        //% group="Reflective Infrared Sensor"
        export function trackerValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isBlackLine block="Black line is detected at pin=%p"
        //% group="Reflective Infrared Sensor"
        export function isBlackLine(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };
}
