const LightDevice = require('../LightDevice.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');


class YeelinkLightStrip4 extends LightDevice {
  constructor(miotDevice, name, logger) {
    super(miotDevice, name, logger);
  }


  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName() {
    return 'Yeelight LED Light Strip Pro';
  }

  getMiotSpecUrl() {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:light:0000A001:yeelink-strip8:1';
  }


  /*----------========== CONFIG ==========----------*/

  requiresMiCloud() {
    return false;
  }


  /*----------========== METADATA ==========----------*/

  initDeviceServices() {
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:light:00007802:yeelink-strip8:1","description":"Light"}');
    this.createServiceByString('{"siid":4,"type":"urn:yeelink-spec:service:yeelight:00007802:yeelink-strip8:1","description":"yeelight"}');
  }

  initDeviceProperties() {
    this.addPropertyByString('light:on', '{"siid":2,"piid":1,"type":"urn:miot-spec-v2:property:on:00000006:yeelink-strip8:1","description":"Switch Status","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('light:brightness', '{"siid":2,"piid":2,"type":"urn:miot-spec-v2:property:brightness:0000000D:yeelink-strip8:1","description":"Brightness","format":"uint8","access":["read","write","notify"],"unit":"percentage","valueRange":[1,100,1]}');
    this.addPropertyByString('light:color', '{"siid":2,"piid":3,"type":"urn:miot-spec-v2:property:color:0000000E:yeelink-strip8:1","description":"Color","format":"uint32","access":["read","write","notify"],"unit":"rgb","valueRange":[1,16777215,1]}');
    this.addPropertyByString('yeelight:init-power-opt', '{"siid":4,"piid":1,"type":"urn:yeelink-spec:property:init-power-opt:00000001:yeelink-strip8:1","description":"init-power-opt","format":"uint8","access":["read","write","notify"],"value-list": [{"value": 1, "description": "Light-on"}, {"value": 2, "description": "Light-off"}]');
    this.addPropertyByString('yeelight:save-state', '{"siid":4,"piid":2,"type":"urn:yeelink-spec:property:save-state:00000002:yeelink-strip8:1","description":"save-state","format":"uint8","access":["read","write","notify"],"value-list": [{"value": 0, "description": "Disable"}, {"value": 1, "description": "Enable"}]');
    this.addPropertyByString('yeelight:cron-add', '{"siid":4,"piid":3,"type":"urn:yeelink-spec:property:cron-add:00000003:yeelink-strip8:1","description":"cron-add","format":"string","access":["write"]');
    this.addPropertyByString('yeelight:cron-del', '{"siid":4,"piid":3,"type":"urn:yeelink-spec:property:cron-del:00000004:yeelink-strip8:1","description":"cron-del","format":"string","access":["write"]');
    this.addPropertyByString('yeelight:cron-get', '{"siid":4,"piid":5,"type":"urn:yeelink-spec:property:cron-get:00000005:yeelink-strip8:1","description":"cron-get","format":"string","access":["read", "notify"]');
    this.addPropertyByString('yeelight:set-scene', '{"siid":4,"piid":7,"type":"urn:yeelink-spec:property:set-scene:00000007:yeelink-strip8:1","description":"set-scene","format":"string","access":["write"]');
    this.addPropertyByString('yeelight:set-adjust', '{"siid":4,"piid":8,"type":"urn:yeelink-spec:property:set-adjust:00000008:yeelink-strip8:1","description":"set-adjust","format":"string","access":["write"]');
    this.addPropertyByString('yeelight:set-ps', '{"siid":4,"piid":9,"type":"urn:yeelink-spec:property:set-ps:00000009:yeelink-strip8:1","description":"set-ps","format":"string","access":["write"]');
    this.addPropertyByString('yeelight:set-fx', '{"siid":4,"piid":10,"type":"urn:yeelink-spec:property:set-fx:00000006:yeelink-strip8:1","description":"set-fx","format":"string","access":["write"]');
  }

  initDeviceActions() {
    this.addActionByString('light:toggle', '{"siid":2,"aiid":1,"type":"urn:miot-spec-v2:action:toggle:00002811:yeelink-strip8:1","description":"Toggle","in":[],"out":[]}');
    this.addActionByString('light:brightness-up', '{"siid":2,"aiid":2,"type":"urn:miot-spec-v2:action:brightness-up:00002828:yeelink-strip8:1","description":"Brightness Up","in":[],"out":[]}');
    this.addActionByString('light:brightness-up', '{"siid":2,"aiid":3,"type":"urn:miot-spec-v2:action:brightness-down:00002829:yeelink-strip8:1","description":"Brightness Down","in":[],"out":[]}');
    this.addActionByString('yeelight:set-default', '{"siid":4,"aiid":1,"type":"urn:yeelink-spec:action:set-default:00002801:yeelink-strip8:1","description":"set-default","in":[],"out":[]}');
  }

  initDeviceEvents() {
    //no events
  }


  /*----------========== VALUES OVERRIDES ==========----------*/


  /*----------========== PROPERTY OVERRIDES ==========----------*/


  /*----------========== ACTION OVERRIDES ==========----------*/


  /*----------========== OVERRIDES ==========----------*/


}

module.exports = YeelinkLightStrip8;
