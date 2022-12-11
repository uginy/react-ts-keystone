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
    uiStore.setCheck(value.Check);
    uiStore.setInput(value.Input);
  };

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      Check: true,
      Input: '',
    },
  });

 console.log(getSnapshot(uiStore))
  return (
    <form onChange={handleSubmit(onChange)}>
      <Controller
        name="Check"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={uiStore.Check}>
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
