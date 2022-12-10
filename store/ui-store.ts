import { model, Model, prop } from 'mobx-keystone';

@model('form/Check')
export class UiStore extends Model({
  check: prop<boolean>().withSetter(),
}) {}
