import { model, Model, tProp, types } from 'mobx-keystone';

@model('form/Check')
export class UiStore extends Model(
  {
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
