import { observer } from 'mobx-react';
import * as React from 'react';
import './style.css';
import { useRootStore } from './store';
import { Checkbox } from 'antd';
import { getSnapshot } from 'mobx-keystone';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  Check: Boolean;
}

export const App = observer(() => {
  const { uiStore } = useRootStore();

  const onChange = (value: IFormInputs) => {
    console.log(getSnapshot(uiStore), value);
    uiStore.setCheck(value.Check);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      Check: true,
    },
  });

  return (
    <form onChange={onChange}>
      <Controller
        name="Check"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={uiStore.Check}>
            Checkbox
          </Checkbox>
        )}
      />
    </form>
  );
});
