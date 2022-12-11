import { model, Model, tProp, types } from 'mobx-keystone';

@model('form/Check')
export class UiStore extends Model(
  {
    Check1: tProp(types.boolean, true).withSetter(),
    Check2: tProp(types.boolean, true).withSetter(),
    Input: tProp(types.string, '').withSetter()
  }
) {
  
}
