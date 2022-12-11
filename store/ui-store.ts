import { model, Model, tProp, types } from 'mobx-keystone';

@model('form/Check')
export class UiStore extends Model(
  {
    Check: tProp(types.boolean, false).withSetter(),
    Input: tProp(types.string, '').withSetter()
  },
  {
    toSnapshotProcessor(sn) {
      return {
        ...sn,
        Check: sn.Check ? 'YES' : 'NO',
        Input: String(sn.Input).toUpperCase()
      };
    },
  }
) {
  
}
