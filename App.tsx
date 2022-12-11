import { observer } from 'mobx-react';
import * as React from 'react';
import './style.css';
import { useRootStore } from './store';
import { Checkbox } from 'antd';
import { getSnapshot, } from 'mobx-keystone';
import { useForm, Controller, SubmitHandler  } from "react-hook-form";

interface IFormInputs {
  Check: Boolean
}

export const App = observer(() => {
  const { uiStore } = useRootStore();


  const onChange = (v: SubmitHandler<IFormInputs>) => {
    console.log(getSnapshot(uiStore));
    // uiStore.setCheck(v.);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });

  return (
    <form onChange={handleSubmit(onChange)}>
      <Controller
        name="firstName"
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
