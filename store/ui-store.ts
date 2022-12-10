import { model, Model, prop, tProp, types } from 'mobx-keystone';

export interface IZoneMatrix {
    Zone: number;
}

export interface IOneDeviceForMatrix {
  Loop: number;
  Address: number;
  Type: string;
  Mode: string;
  Description: string;
  Status: string;
}

@model('form/Check')
export class UiStore extends Model(
  {
    Count: prop<number>(1).withSetter(),
    Devices: prop<IOneDeviceForMatrix[]>(() => []).withSetter(),
    Name: tProp(types.string, '').withSetter(),
    Panel: tProp(types.string, '').withSetter(),
    Result: tProp(types.string, '').withSetter(),
    Loop: tProp(types.string, '').withSetter(),
    Address: tProp(types.string, '').withSetter(),
    Source: tProp(types.string, '').withSetter(),
    PanelType: tProp(types.string, '').withSetter(),
    Zones: prop<IZoneMatrix[]>(() => []).withSetter(),
    GlobalZones: prop<IZoneMatrix[]>(() => []).withSetter(),
    Class: tProp(types.string, '').withSetter(),
    ZoneConditions: tProp(types.string, '').withSetter(),
    Conditions: tProp(types.string, '').withSetter(),
    Check: tProp(types.boolean, false).withSetter()
  },
  {
    toSnapshotProcessor(sn) {
      return {
        ...sn,
        check: sn.Check ? 'YES' : 'NO',
      };
    },
  }
) {}
