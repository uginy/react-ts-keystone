import { observer } from 'mobx-react';
import * as React from 'react';
import './style.css';
import { useRootStore } from './store';
import { Checkbox, Input } from 'antd';
import { getSnapshot } from 'mobx-keystone';
import { useForm, Controller } from 'react-hook-form';
import { UiStore } from './store/ui-store';

export const App = observer(() => {
  const { uiStore } = useRootStore();

  const onChange = (value: UiStore) => {
    uiStore.setCheck1(value.Check1);
    uiStore.setCheck2(value.Check2);
    uiStore.setInput(value.Input);
  };

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: getSnapshot(uiStore)
  });

 console.log(getSnapshot(uiStore))
  return (
    <form onClick={handleSubmit(onChange)}>
      <Controller
        name="Check1"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={uiStore.Check1}>
            Checkbox
          </Checkbox>
        )}
      />
       <Controller
        name="Check2"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={uiStore.Check2}>
            Checkbox
          </Checkbox>
        )}
      />
      <Controller
        name="Input"
        control={control}
        render={({ field }) => <Input {...field}/>}
      />
    </form>
  );
});
